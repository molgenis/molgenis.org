**
EMX (entity model extensible) is a flexible spreadsheet format to easily upload any tabular data using Excel or a zipfile of tab-delimited *.tsv files. This works because you can tell MOLGENIS the 'model' of your data via a special sheet named 'attributes'. Optionally, you can also add metadata on entities (i.e., classes, tables), and packages (i.e, models and submodels)
**

# Minimal example 
([download](/data/example1.xlsx))

For example, if you want to upload an Excel with sheet 'patients':

| displayName | firstName | lastName | birthdate  | birthplace |
|-------------|-----------|----------|------------|------------|
| john doe    | john      | doe      | 1976-03-13 | new york   |
| jane doe    | jane      | doe      |            | metropolis |
| papa doe    | papa      | doe      |            | new york   |

Then you must provide a model of your 'patients' via Excel with sheet named 'attributes':

| name        | entity   | dataType | idAttribute | nillable | description             |
|-------------|----------|----------|-------------|----------|-------------------------|
| displayName | patients |          | TRUE        | FALSE    | name                    |
| firstName   | patients |          |             | FALSE    | first name              |
| lastName    | patients |          |             | FALSE    | family name             |
| birthdate   | patients | date     |             | FALSE    | day of birth            |
| birthplace  | patients |          |             | FALSE    | place of birth          |

'entity' should show the name of your data sheet. Each attribute the column headers in your data. Default dataType is 'string' so you only need to provide non-string values (int, date, decimal, etc). And you must always provide one idAttribute that has 'nillable' = 'FALSE'.

You can first upload the 'model' and then the 'data'. Or you can put the both into one file and upload in one go. What you prefer :-) [todo: provide example files for download]

# Advanced example 
([download](/data/example2.xlsx))

Lets assume we want to upload multiple data sheets, with relations between them:

Cities:

| cityName   |lat       | lng       |
|------------|----------|-----------|
| new york   | 40,712784|-74,005941 |
| metropolis | 37,151165|-88,731998 |

Patients:

| displayName | firstName | lastName | birthdate  | birthplace | children           | disease |
|-------------|-----------|----------|------------|------------|--------------------|---------|
| john doe    | john      | doe      | 1976-13-03 | new york   |                    | none    |
| jane doe    | jane      | doe      |            | metropolis |                    | none    |
| pape doe    | papa      | doe      |            | new york   | john doe, jane doe | cardio  |

Notes: birthplace refers to elements in the cityName values in the cities table. children contains comma separated values referring to another patient via displayName (trailing spaces will be removed).

Users:

| userName | active | displayName | firstName | lastName |
|----------|--------|-------------|-----------|----------|
| jdoe     | TRUE   | john doe    | john      | doe      |
| jdoe2    |        | jane doe    | jane      | doe      |
| pdoe     |        | papa doe    | papa      | doe      |

Note: users looks similar patients, i.e. they are also persons having 'displayName', 'firstName', and 'lastName'. We will use this in the model below. 

To model the data advanced data example, again you need to provide the 'attributes' (i.e., columns, properties). Optionally, you can also describe entities (i.e., classes, tables), and packages (i.e, models and submodels) which gives you some advanced options.

Attributes:

| name        | entity   | dataType | nillable | refEntity | idAttribute | description             |
|-------------|----------|----------|----------|-----------|-------------|-------------------------|
| cityName    | cities   |          | FALSE    |           | TRUE        |  unique city name       |
| lat         | cities   | decimal  |          |           |             | latitude in degrees     |
| lng         | cities   | decimal  |          |           |             | longitude in degrees    |
| displayName | persons  |          | FALSE    |           | TRUE        |  unique name            |
| firstName   | persons  |          |          |           |             |  first name             |
| lastName    | persons  |          |          |           |             |  family name            |
| birthdate   | patients | date     |          |           |             |  day of birth           |
| birthplace  | patients | xref     |          | cities    |             |  place of birth         |
| disease     | patients |          |          |           |             |  disese description     |
| userName    | users    |          | FALSE    |           | TRUE        |  unique login name      |
| active      | users    | bool     |          |           |             |  whether user is active |

The example below defines the model for entities 'city', 'patient' and 'user'. Note that 'users' had some attributes shared with 'patients' so we will use 'object orientation' to say that both 'user' and 'patient' are both a special kind of 'persons'. This will be defined using the 'extends' relation defined in the 'entities' sheet below.

Entities:

| name     | package  | extends | abstract | description                                                       |
|----------|----------|---------|----------|-------------------------------------------------------------------|
| cities   | hospital |         |          | list of cities
| persons  | hospital |         | true     | person defines general attributes like firstName, lastName        |
| users    | hospital | persons |          | users extends persons, meaning it 'inherits' attribute definition |
| patients | hospital | persons |          | patient extends person, adding patientNumber                      |

In most cases the 'attributes' sheet is all you need. However, in some cases you may want to add more details on the 'entity'. Here we wanted to show use of 'abstract' (i.e., interfaces) to create model class 'persons' and 'extends' (i.e., subclass, inheritance) to define that 'user' and 'patient' have the same attributes as 'persons'. When data model become larger, or when many data sheets are loaded then the 'package' construct enables you to group your (meta)data. 

Packages:

| name     | description                                                   | parent |
|----------|---------------------------------------------------------------|--------|
| root     | my main package                                               |        |
| hospital | sub package holding entities to describe all kinds of persons | root   |

# Rules for technical names
For all technical names in the EMX format, the following rules apply:
- No special characters, except for; '_' and '#', only letters, numbers are allowed.
- No names starting with digits. 
- Maximum length for names is 30 chars.
- Keywords used by programming languages (e.g. java, javascript, mysql) are not allowed.

These rules only apply to the technical names, labels are not limited by these rules.

# Attributes options

Required columns:
* entity : name of the entity this attribute is part of
* name : name of attribute, unique per entity.

Optional columns (can be omitted):

* dataType: defines the data type (default: string)
  * string : character string of <255 characters
  * text : character string of unlimited length (usually <2Gb)
  * int : natural numbers like -1, 0, 3. Optionally use rangeMin and rangeMax
  * long : non-decimal number of type long
  * decimal : decimal numbers like -1.3, 0.5, 3.75 (float precision)
  * bool : yes/no choice
  * date : date in yyyy-mm-dd format
  * datetime : date in yyyy-mm-dd hh:mm:ss
  * xref : cross reference to another entity; requires refEntity to be provided
  * mref : many-to-many relation to another entity; requires refEntity to be provided
  * categorical_mref : many-to-many relation to another entity; requires refEntity to be provided. Forms will display a complete list of options.
  * compound : A way to assemble complex entities from building blocks (will be shown as tree in user interface); Don't forget to fill in the partOfAttribute configuration of the attributes that are grouped under this attribute. The partOfAttribute must contain the name of this new created compound attribute.
  * file: [create a column of the 'file' data type](https://github.com/molgenis/molgenis/wiki/File-datatype) requires refEntity FileMeta.
* refEntity : used in combination with xref, mref or categorical. Should refer to an entity.
* nillable : whether the column may be left empty. Default: false
* idAttribute : whether this field is the unique key for the entity. Default: false. Use 'AUTO' for auto generated (string) identifiers.
* description : free text documentation describing the attribute
* description-{languageCode} : description for specified language (can be multiple languages, example: description-nl)
* rangeMin : used to set range in case of int attributes
* rangeMax : used to set range in case of int attributes
* lookupAttribute : true/false to indicate that the attribute should appear in the xref/mref search dropdown in the dataexplorer
* label : optional human readable name of the attribute
* label-{languageCode} : label for specified language (can be multiple languages, example: label-nl)
* aggregateable : true/false to indicate if the user can use this atrribute in an aggregate query
* labelAttribute : true/false to indicate that the value of this attribute should be used as label for the entity (in the dataexplorer when used in xref/mref). Default: false
* readOnly true/false to indicate a readOnly attribute
* tags : ability to tag the data referring to the tags sections, described below
* validationExpression : javascript validation expression that must return a bool. Must return true if valid and false if invalid. See for a syntax description the section [[Javascript Expressions]]
* defaultValue: value that will be filled in in the forms when a new entity instance is created. Not yet supported for mref and xref values. For categorical_mref, should be a comma separated list of ids. For xref should be the of the refEntity. For bool should be true or false. For datetime should be a string in the format YYYY-MM-DDTHH:mm:ssZZ. For date should be a string in the format YYYY-MM-DD.
* partOfAttribute: is used to group attributes into a compound attribute. Put here the name of the compound attribute.
* expression:

"Computed string":
  1. Create a new target attribute into the "myEntity" entity, that will become the new computed attribute (in the example: "myLabel")
  2. Add in the expression column of the new attribute "myLabel": "the name of attribute to convert from" (in example: expression -> "myXref")

**Example (Computed string): "xref as label attribute" (config attributes table)**

| name    | entity	  | label	       | dataType	| idAttribute	| refEntity	  | nillable	| visible	| labelAttribute	| expression |
|---------|----------|--------------|----------|-------------|-------------|----------|---------|----------------|------------|
| id      | myEntity | Id	          | int	     | TRUE	       |             |FALSE		   | FALSE	  | FALSE          |            |
| myXref	 | myEntity | Other Entity	| xref	    | FALSE	      | otherEntity |TRUE      | TRUE    | FALSE	         |            |
| myLabel | myEntity | Label	       | string	  | FALSE	      |             |TRUE		    | FALSE	  | TRUE           | myXref     |

"Computed object": 
  1. Create a two new target attributes (attr1, attr2) in a new entity (newEntity).
  2. Create a xref attribute (myXref) to contain the computed entity.
  3. Add in the expression column of new xref attribute (myXref) the next script: "{attr1: myAttr1, attr2: myAttr2}"
  4. The name of the attributes to convert from should be in the same entity as the new xref attribute (myEntity).

**Example (Computed object): "computed myXref" (config attributes table)**

| name    | entity	   | label	       | dataType	| idAttribute	| refEntity	  | nillable	| visible	| labelAttribute	| expression |
|---------|-----------|--------------|----------|-------------|-------------|----------|---------|----------------|------------|
| id      | myEntity  | Id	          | int	     | TRUE	       |             |FALSE		   | FALSE	  | FALSE          |            |
| myXref	 | myEntity  | New Entity  	| xref	    | FALSE	      | newEntity   |TRUE      | TRUE    | FALSE	         |{attr1: myAttr1, attr2: myAttr2}|
| myAttr1 | myEntity  | My Attr 1    | date   	 | FALSE	      |             |TRUE		    | FALSE	  | TRUE           |            |
| myAttr2 | myEntity  | My Attr 2    | int      | FALSE	      |             |TRUE		    | FALSE	  | TRUE           |            |
| attr1   | newEntity |    Attr 1    | string   | FALSE	      |             |TRUE		    | FALSE	  | TRUE           |            |
| attr2   | newEntity |    Attr 2    | string   | TRUE 	      |             |TRUE		    | FALSE	  | TRUE           |            |


# Entities options
Required columns:

* entity : unique name of the entity. If packages are provided, name must be unique within a package.

Optional columns:

* extends : reference to another entity that is extended
* package : name of the group this entity is part of
* abstract : indicate if data can be provided for this entity (abstract entities are only used for data modeling purposes but cannot accept data)
* description : free text description of the entity
* description-{languageCode} : description for specified language (can be multiple languages, example: description-nl)
* backend: the backend (database) to store the entities in (currently MySQL or ElasticSearch)
* tags : ability to tag the data referring to the tags sections, described below

# Packages options
Required columns:

* name : unique name of the package. If parent package is provided the name is unique within the parent.

Optional columns:
* description : free text description of the package
* parent : use when packages is a sub-package of another package
* tags : mechanism to add flexible meta data such as ontology references, hyperlinks

# Tags options (BETA)

Optionally, additional information can be provided beyond the standard meta data described above. Therefore all meta-data elements can be tagged in simple or advanced ways (equivalent to using RDF triples). For example, above in the packages example there is a 'homepage' tag provided. For example:

| identifier | label                   | objectIRI               | relationLabel          | codeSystem | relationIRI |
|------------|-------------------------|-------------------------|------------------------|------------|-------------|
| like       | like                    |                         |                        |            |             |
| homepage   | http://www.molgenis.org | http://www.molgenis.org | homepage               |            |             |
| docs       | http://some.url         | http://www.molgenis.org | Documentation and Help | EDAM       | http://edamontology.org/topic_3061 |

Required columns:
* identifier : unique name of this tag, such that it can be referenced
* label : the human readable label of the tag (e.g. the 'like' tag as shown above).

Optional columns:
* objectIRI: url to the value object (will become an hyperlink in the user interface)
* relationLabel: human readible label of the relation, e.g. 'Documentation and Help'
* relationIRI: url to the relation definition, e.g. http://edamontology.org/topic_3061
* codeSystem: name of the code system used, e.g. EDAM

# Internationalization

You can internationalize attribute labels and descriptions, entity labels and descriptions and
you can define internationalized versions of entity attributes.

### entities

description-{languageCode} : description for specified language (can be multiple languages)
label-{languageCode} : label for specified language (can be multiple languages)

Example:

| name     | package  | description-en  | description-nl     | label-en | label-nl |
|----------|----------|-----------------|--------------------|----------|----------|
| cities   | hospital | list of cities  | lijst van steden   | Cities   | Steden   |
| persons  | hospital | list of persons | lijst van personen | Persons  | Personen |


### attributes

description-{languageCode} : description for specified language (can be multiple languages)
label-{languageCode} : label for specified language (can be multiple languages)

Example:

| name        | entity   | idAttribute | description-en           | description-nl                | label-en        | label-nl       |
|-------------|----------|-------------|--------------------------|-------------------------------|-----------------|----------------|
| displayName | patients | TRUE        | Patient name             | Naam van de patient           | name            | naam           |
| firstName   | patients |             | Patient first name       | Voornaam van de patient       | first name      | voornaam       |
| lastName    | patients |             | Patient family name      | Achternaam van de patient     | family name     | achternaam     |

### Language depended entity attributes

You can internationalize attributes by postfixing the name with -{countryCode}.

If this is the label attribute,
you must set all city-xx labelAttribute values to 'TRUE' on the 'entities' tab.

Example:

**entities:**

| name           | entity   | idAttribute | label-nl    | label-de      | labelAttribute |
|----------------|----------|-------------|-------------|---------------|----------------|
| name           | gender   | TRUE        |             |               |                |
| genderlabel-nl | gender   |             | Label (nl)  | Etikette (nl) | TRUE           |
| genderlabel-de | gender   |             | Label (de)  | Etikette (de) | TRUE           |


**gender:**

| name    | genderlabel-nl   | genderlabel-de |
|---------|------------------|----------------|
| Male    | Man              | Man            |
| Female  | Vrouw            | Frau           |
| Unknown | Onbekend         | Unbekannt      |

