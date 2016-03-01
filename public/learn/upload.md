# EMX format

EMX (entity model extensible) is a flexible spreadsheet format to easily upload any tabular data using Excel or a zipfile of tab-delimited *.txt files. This works because you can tell MOLGENIS the 'model' of your data via a special sheet named 'attributes'.

## Minimal example
[download](example1.xlsx)

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

## Advanced data example
[download](example2.xlsx)

Lets assume we want to upload multiple data sheets, with relations between them:

Cities:

| cityName   |
|------------|
| new york   |
| metropolis |

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

## Advanced metadata example

To model the data advanced data example, again you need to provide the 'attributes' (i.e., columns, properties). Optionally, you can also describe entities (i.e., classes, tables), and packages (i.e, models and submodels) which gives you some advanced options.

### 'Attributes' sheet (required)
The example below defines the model for entities 'city', 'patient' and 'user'. Note that 'users' had some attributes shared with 'patients' so we will use 'object orientation' to say that both 'user' and 'patient' are both a special kind of 'persons'. This will be defined using the 'extends' relation defined in the 'entities' sheet below.

| name        | entity   | dataType | nillable | refEntity | idAttribute | description             |
|-------------|----------|----------|----------|-----------|-------------|-------------------------|
| cityName    | cities   |          | FALSE    |           | TRUE        |  unique city name       |
| displayName | persons  |          | FALSE    |           | TRUE        |  unique name            |
| firstName   | persons  |          |          |           |             |  first name             |
| lastName    | persons  |          |          |           |             |  family name            |
| birthdate   | patients | date     |          |           |             |  day of birth           |
| birthplace  | patients | xref     |          | cities    |             |  place of birth         |
| disease     | patients |          |          |           |             |  disese description     |
| userName    | users    |          | FALSE    |           | TRUE        |  unique login name      |
| active      | users    | bool     |          |           |             |  whether user is active |

### 'Entities' sheet (optional)
In most cases the 'attributes' sheet is all you need. However, in some cases you may want to add more details on the 'entity'. Here we wanted to show use of 'abstract' (i.e., interfaces) to create model class 'persons' and 'extends' (i.e., subclass, inheritance) to define that 'user' and 'patient' have the same attributes as 'persons'. When data model become larger, or when many data sheets are loaded then the 'package' construct enables you to group your (meta)data. 

| name     | package  | extends | abstract | description                                                       |
|----------|----------|---------|----------|-------------------------------------------------------------------|
| cities   | hospital |         |          | list of cities
| persons  | hospital |         | true     | person defines general attributes like firstName, lastName        |
| users    | hospital | persons |          | users extends persons, meaning it 'inherits' attribute definition |
| patients | hospital | persons |          | patient extends person, adding patientNumber                      |

### 'Packages' sheet (optional)
Package allow you to create several models in your system, describe the and next them using the 'parent' relationship. For example:

| name     | description                                                   | parent |
|----------|---------------------------------------------------------------|--------|
| root     | my main package                                               |        |
| hospital | sub package holding entities to describe all kinds of persons | root   |

# EMX model reference documentation

Minimally, you need to provide the 'attributes' of your model (i.e., columns, properties). Optionally, you can also add metadata on entities (i.e., classes, tables), and packages (i.e, models and submodels)

## Attributes

Required columns:
* entity : name of the entity this attribute is part of
* attribute : name of attribute, unique per entity

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
  * compound : way to assemble complex entities from building blocks (will be shown as tree in user interface); requires refEntity to be provided
* refEntity : used in combination with xref, mref or compound. Should refer to an entity.
* nillable : whether the column may be left empty. Default: false
* idAttribute : whether this field is the unique key for the entity. Default: false. Use 'AUTO' for auto generated (string) identifiers.
* description : free text documentation describing the attribute
* rangeMin : used to set range in case of int attributes
* rangeMax : used to set range in case of int attributes
* lookupAttribute : true/false to indicate that the attribute should appear in the xref/mref search dropdown in the dataexplorer
* label : optional human readable name of the attribute
* aggregateable : true/false to indicate if the user can use this atrribute in an aggregate query
* labelAttribute : true/false to indicate that the value of this attribute should be used as label for the entity (in the dataexplorer when used in xref/mref). Default: false
* readOnly true/false to indicate a readOnly attribute
* tags : ability to tag the data referring to the tags sections, described below
* validationExpression : javascript validation expression that must return a bool. Must return true if valid and false if invalid. See for a syntax description the section [[Javascript Expressions]]

## Entities
Required columns:

* entity : unique name of the entity. If packages are provided, name must be unique within a package.

Optional columns:

* extends : reference to another entity that is extended
* package : name of the group this entity is part of
* abstract : indicate if data can be provided for this entity (abstract entities are only used for data modeling purposes but cannot accept data)
* description : free text description of the entity
* tags : ability to tag the data referring to the tags sections, described below

## Packages
Required columns:

* name : unique name of the package. If parent package is provided the name is unique within the parent.

Optional columns:
* description : free text description of the package
* parent : use when packages is a sub-package of another package
* tags : mechanism to add flexible meta data such as ontology references, hyperlinks

## BETA feature: tags

### 'Tags' sheet (optional, BETA)
Optionally, additional information can be provided beyond the standard meta data described above. Therefore all meta-data elements can be tagged in simple or advanced ways (equivalent to using RDF triples). For example, above in the packages example there is a 'homepage' tag provided. For example:

| identifier | label                   | objectIRI               | relationLabel          | codeSystem | relationIRI |
|------------|-------------------------|-------------------------|------------------------|------------|-------------|
| like       | like                    |                         |                        |            |             |
| homepage   | http://www.molgenis.org | http://www.molgenis.org | homepage               |            |             |
| docs       | http://some.url         | http://www.molgenis.org | Documentation and Help | EDAM       | http://edamontology.org/topic_3061 |

### 'Tags' options

Required columns:
* identifier : unique name of this tag, such that it can be referenced
* label : the human readable label of the tag (e.g. the 'like' tag as shown above).

Optional columns:
* objectIRI: url to the value object (will become an hyperlink in the user interface)
* relationLabel: human readible label of the relation, e.g. 'Documentation and Help'
* relationIRI: url to the relation definition, e.g. http://edamontology.org/topic_3061
* codeSystem: name of the code system used, e.g. EDAM

Change or change documentation:

* 'required' and 'unique' (and xref_entity?) property for attribute?
* create separate 'unit' list?
* can we hload dataset without entity / attributes (auto load?)
* create 'category'
  * code, label, ismissing, description, ontology
  * use decorator to automatically produce identifier (optional)
* validation rules

# Import API

## Endpoints

[SERVER URL]/plugin/importwizard/importFile/
This endpoint can be used to import a file into MOLGENIS by providing the file by for example the use of a webform.

##### Required parameter:
MultipartFile file

[SERVER URL]/plugin/importwizard/importByUrl/
This endpoint can be used to import a file into MOLGENIS by providing a URL to the file.

##### Required parameter:
String url

##### optional parameters for both endpoints:
entityName: The name of the entity, this only has effect for VCF files (.vcf and .vcf.gz)
	Default value is the filename.

action: the database action to import with, options are:
	ADD: add records, error on duplicate records
	ADD_UPDATE_EXISTING: add, update existing records
	UPDATE: update records, throw an error if records are missing in the database
	ADD_IGNORE_EXISTING: Adds new records, ignores existing records

Note that for VCF files only "add" is supported

Default value is "ADD".

notify: Boolean value to indicate of success and failure should be reported to the user by email.
	Default value is "false".

## Response:
The service responds with a statuscode **201 CREATED** if the preliminary checks went well and the import run has been started, it also returns a href to the metadata of the importrun.
The href can be used to poll the status of the import by checking the status field of the importrun, also the message field of the importrun entity gives some basic feedback on what was imported or what went wrong.
##Examples
### importByURL Example:

    https://molgenis01.gcc.rug.nl/plugin/importwizard/importByURL
    notify=false&entityName=demo&url=https://raw.githubusercontent.com/bartcharbon/molgenis/feature/importService/
    molgenis-app/src/test/resources/vcf/test.vcf

#####Response:

    201 CREATED
    /api/v2/ImportRun/[ImportRunID]

### importFile example using cURL(https://curl.haxx.se):
    curl -H "x-molgenis-token:[TOKEN]" -X POST -F"file=@path/to/file/test.vcf" -Faction=update -FentityName=newName
    -Fnotify=true http://[SERVER URL]/plugin/importwizard/importFile

#####Response:

    201 CREATED
    /api/v2/ImportRun/[ImportRunID]

## Exceptions:
In case anything went wrong even before starting the importrun a **400 BAD REQUEST** is returned.

#### Examples of known exceptions are:
* Invalid action: [ILLEGAL VALUE] valid values: ADD, ADD_UPDATE_EXISTING, UPDATE, ADD_IGNORE_EXISTING
* Update mode UPDATE is not supported, only ADD is supported for VCF
* A repository with name NewEntity already exists