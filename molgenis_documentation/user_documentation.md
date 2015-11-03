## Using technical documentation structure proposed in this [blog](http://stevelosh.com/blog/2013/09/teach-dont-tell/)

### First contact (What is MOLGENIS good for)

1. What is this thing?
2. Why would I care about this thing?
3. Is it worth the effort to learn this thing?

### Black triangle (installation manual and small example)

Your “black triangle” documentation should be a short guide that runs the user through the process of retrieving, installing, and poking your project or language.

### Hairball (aka MOLGENIS in depth explanations of all the plugins)

The “hairball” is the twisted, tangled maze of teaching that is going to take these novices and turn them into expert users. It’s going to mold their brains, one nudge at a time, until they have a pretty good understanding of how your project works.

### The Reference (In depth API and script interfaces.)
* “API documentation” for every user-facing part of your project.
* A full changelog, with particular attention to backwards-incompatible changes between versions.
* Details about the internal implementation of the project.
* Contribution policies (if your project accepts outside contributions).


# <a name="top"></a> MOLGENIS v1.12 user documentation

## <a name="table-of-contents"></a> Table of contents

* [Introduction](#introduction)
	* [What is MOLGENIS](#what-is-molgenis)
	* [Why MOLGENIS](#why-molgenis)
	* [Should I use MOLGENIS](#should-i-use-molgenis)
		* [Biobanks](#biobank-example)
		* [NGS](#ngs-example)
		* [Research portals](#research-portal-example)
		* [Pipeline computing](#compute-example)
	* [Who is using MOLGENIS](#who-uses-molgenis)
		* [Service overview](#service-overview)  
		
* [Trying out MOLGENIS](#trying-out-molgenis)
	* [Installing MOLGENIS using maven cargo](#installing-molgenis-cargo)
	* [Installing MOLGENIS using apache-tomcat](#installing-molgenis-apache-tomcat)
	* [Getting your first data into MOLGENIS](#)
		* [Creating an EMX file](#creating-emx-file)
		* [Importing your EMX file into MOLGENIS](#importing-simple)
	
		
* [From user to expert, MOLGENIS step-by-step](#from-user-to-expert)
	* [Becoming an expert MOLGENIS data importer](#importing-advanced)
	* [How to use the MOLGENIS user interface](#molgenis-interface-modules)
	* [Using scripts](#how-to-use-scripts)
	* [Advanced MOLGENIS application configuration](#advanced-molgenis-app-configuration)
		* [Configuring your homepage](#home-page)
		* [User management](#user-management)
		* [Setting permissions](#permissions)
		* [Menu manager](#menu-manager)
		* [Styling your MOLGENIS application](#themes)
		
* [End note](#end-note)

## <a name="introduction"></a> Introduction
**
This document is a detailed description of the web-based MOLGENIS software. Here you will learn, step-by-step, what MOLGENIS is, and the many options it offers you to explore and manipulate your data.
**

### <a name="what-is-molgenis"></a> What is MOLGENIS?
Molecular Genetics Information Systems, or MOLGENIS for short, is a web-based software toolkit designed to provide biologists with user friendly and scalable software infrastructures to capture, exchange, and exploit the large amounts of data that is being produced by scientific organisations all around the world. To get an idea of what the software can do, visit our [MOLGENIS YouTube channel](https://www.youtube.com/channel/UCiVR-YZFcBQe0i6RUwE9kyg).

### <a name="why-molgenis"></a> Why MOLGENIS?
Why should you use MOLGENIS? One of the key features is that it uses an extensible model system, allowing you to model your data however you want. This creates flexibility that other, more static, database applications often lack. It's web-based, meaning you setup a server, install and configure MOLGENIS, load your data and share it with the world. If your data is ready, setting up a useful online research database can be done in a matter of days. Besides storing your data, MOLGENIS also allows for the creation of R and Python scripts that interact with your data. This enables you to run statistical analysis, or create plots based on your data within the online environment.

MOLGENIS takes away the hassle of storing data, and makes it highly accessible with filters and fast search capabilities. This enables you as a researcher to focus on the data itself.

### <a name="should-i-use-molgenis"></a> Should I use MOLGENIS?
If you are a biologist, a bioinformatician, a researcher, or anyone else who has a lot of biological data on their hands, then MOLGENIS is a software package that will help you in setting up an online research database in no time at all, making your data query-able and allowing you to share your data with collaborators effortlessly. By mastering the MOLGENIS software toolkit you will be able to store, edit, analyse, and share your data faster then ever before. If one of the following use cases applies to you, then yes it is worth the effort to learn MOLGENIS.

<!--
TODO, we need to paint a clear picture on how MOLGENIS is very suitable to handle the use cases described below. The reader should get the feeling that MOLGENIS is perfect for his or her project
-->
#### <a name="biobank-example"></a> Biobank catalogue
Biobanks are collections of data from samples...
MOLGENIS has been used to host biobank data for several major Dutch and European biobanking projects. The BBMRI-NL and BBMRI-ERIC projects....

#### <a name="ngs-example"></a> NGS data annotation and interpretation
Next generation sequencing data often results in mutation data. thousands of single SNPs...
MOLGENIS is hosting multiple mutation databases like the COL7A1 database and the CHD7 database.

#### <a name="research-portal-example"></a> Research portals
Research portals....


#### <a name="compute-example"></a> Analysis pipelines and online computing
<!--
I don't know :( do we have any examples for this? Can we even do this?
-->

Some text...

### <a name="who-uses-molgenis"></a> Who is using MOLGENIS?
There are several research groups already...

#### <a name="service-overview"></a> Service overview
Several research groups and organisations are already using MOLGENIS for their projects. Below is a list of all the projects currently hosted by us.

<!--
TODO: Fill in more of our projects
-->
|Project name | Pubmed                                            | Project URL                                 |Project description          |
|-------------|---------------------------------------------------|---------------------------------------------|-----------------------------|
|ASE          |[link](http://www.ncbi.nlm.nih.gov/pubmed/25954321)|[Database](molgenis.org/ase)                 |Database for measured ASEs   |
|COL7A1       |[link](http://www.ncbi.nlm.nih.gov/pubmed/21681854)|[Database](https://molgenis03.target.rug.nl/)|Database for COL7A1 mutations|

---
---

## <a name="trying-out-molgenis"></a> Trying out MOLGENIS
If you have decided to use MOLGENIS for your project, the first thing you can do is to get some hands-on experience by trying out our [demo server](https://www.molgenis.org/demo). This server contains several datasets including biobank data and genetic data. If you want to try importing some example files, then the only thing needed from your end is that you create an account. An email will be sent containing your login in credentials.

But perhaps you want to see how your own data looks like, but not upload it for other people to see, not yet anyway. So lets jump right into that. 

<!--
TODO: We want to write a more easy way of getting MOLGENIS running locally. The MOLGENIS-cargo pom that Fleur made is a good example. It removes the apache-tomcat installation step. Sending people to the demo server is a good option as well but if we provide some example data then people will run into the "This entity already exists" errors.

Need to think this through a bit more, but for now this section contains a more technical installation guide.
-->
### <a name="installing-molgenis-cargo"></a> Installing MOLGENIS using maven cargo
The fastest and easiest way to get MOLGENIS running on a machine, is using our cargo project. This is collection of files that you can use to deploy MOLGENIS for you. There are three steps you need to do before this will work: 

**Download the cargo project**
<!--
TODO: Get this project to the molgenis repository, so I do not have to link to the Github of fleur
-->
[Download](https://github.com/fdlk/molgenis-cargo) the entire project from GitHub.

**Setting your molgenis-server.properties**   
MOLGENIS will try to find its property file at *<user_home>/.molgenis/omx/*. Create this folder, and create the molgenis-server.properties file. Open the file and write the following lines:

> db_user=molgenis  
> db_password=molgenis  
> db_uri=jdbc:mysql://localhost/omx  
> admin.password=admin  
> user.password=admin  

Remember the *omx* specified in your db_uri, because this will be the name of the database you will create later on in MySQL. This effectively means that whatever you call your database, your db_uri should point to it.

**Setting up your MySQL**  
If you are unfamiliar with MySQL, follow one of their [MySQL installation guides](http://dev.mysql.com/doc/refman/5.7/en/windows-installation.html). Once you have a MySQL server running, login as admin user and type the following commands:

> create database omx;  
> grant all privileges on omx.* to molgenis@localhost identified by 'molgenis';  
> flush privileges;  

If your MySQL has been configured correctly, and your molgenis-server.properties set, then you have to navigate to the location of the cargo and start MOLGENIS with the following command:

``mvn clean resources:resources org.codehaus.cargo:cargo-maven2-plugin:run``

More details are included in the README of the cargo project.

For a more detailed instruction on deploying MOLGENIS, including apache-tomcat, see [Installing MOLGENIS manually](#installing-molgenis-apache-tomcat).

### <a name="installing-molgenis-apache-tomcat"></a> Installing MOLGENIS using apache-tomcat
The three components needed to run MOLGENIS locally or on a server are:

* [apache-tomcat](http://tomcat.apache.org/) 
* [MySQL](https://www.mysql.com/downloads/)
* The WAR for the [latest molgenis-app release](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22molgenis-app%22) from maven central.

Deploy apache-tomcat, and place the molgenis-app WAR as the ROOT.war in your apache-tomcat/webapps folder. If you are unfamiliar with apache-tomcat, follow one of their [apache-tomcat installation guides](https://tomcat.apache.org/tomcat-7.0-doc/deployer-howto.html).

Now that your apache-tomcat is running and MOLGENIS is deployed, you will notice it will not work yet. This is because your MySQL needs to be configured, and a single properties file needs to be set.

**Setting your molgenis-server.properties**   
MOLGENIS will try to find its property file at *<user_home>/.molgenis/omx/*. Create this folder, and create the molgenis-server.properties file. Open the file and write the following lines:

> db_user=molgenis  
> db_password=molgenis  
> db_uri=jdbc:mysql://localhost/omx  
> admin.password=admin  
> user.password=admin  

Remember the *omx* specified in your db_uri, because this will be the name of the database you will create later on in MySQL. This effectively means that whatever you call your database, your db_uri should point to it.

**Setting up your MySQL**  
If you are unfamiliar with MySQL, follow one of their [MySQL installation guides](http://dev.mysql.com/doc/refman/5.7/en/windows-installation.html). Once you have a MySQL server running, login as admin user and type the following commands:

> create database omx;  
> grant all privileges on omx.* to molgenis@localhost identified by 'molgenis';  
> flush privileges;  

Now that your MySQL server and properties file have been configured, restart the apache tomcat server.
If you open up a web browser and navigate to where your apache-tomcat applications are deployed (often this is localhost:8080) you should see the following:  

![](images/molgenis_home_logged_out.png?raw=true, "molgenis home page")  

Congratulations! You now have your MOLGENIS application up and running. Remember the admin.password you set in the molgenis-server.properties file? Use that password to login as the admin user. The next section will take you through the different modules MOLGENIS has to offer.  

### <a name="first-data-upload"></a> Getting your first data into MOLGENIS
So you have a MOLGENIS application up and running, and your dataset is sitting nice and cozy on your computer somewhere, now what? We upload the data of course! As mentioned before, MOLGENIS uses an extensible model format allowing you to model your data however you want. This is done via the **EMX** format. Now I know a custom format sounds scary, but if you keep reading for a bit, you will find out it's not scary at all.

We wanted researchers to be able to describe their data in a flexible 'meta model'. This sounds really interesting, but what it boils down to, is that you have one separate xlsx sheet that describes your column names, or attributes as we call them. Thats it. Thats all the EMX format is. Keep reading to find a detailed example.

#### <a name="creating-emx-file"></a> Creating an EMX file
If you want to skip this theory lesson and download an excel file right away to use as a template, you can find several of them [on Github](https://github.com/molgenis/molgenis/tree/master/molgenis-app/src/test/resources). Be advised that these are files for testing purposes, and do not have real data in them, so they might not fully represent the complexity of your own data.

Now for the example. Say that you have an existing excel sheet with a couple of thousand rows of data and several columns. This data can look something like this:

**Data sheet**:
 
|Identifier|Gene    |Protein measured|Protein count|
|----------|--------|----------------|-------------|
|A12345_Z  |BRCA2   |P51587          |321          |
|B12345_Y  |BRCA2   |Q86YC2          |123          |
|C12345_X  |BRCA2   |Q9P287          |213          |
|D12345_W  |BRCA2   |P46736          |231          |
|E12345_V  |BRCA2   |Q8MKI9          |312          |

Now to make this into a full fledged EMX file, all you have to do is create a new sheet within the same file and call it *attributes*. To give an idea on what the purpose of this sheet is, it will describe the columns that you have set for your data. This description allows MOLGENIS to properly store and display it. An attribute sheet will look something like this:

**Attribute sheet**

|name            |entity            |dataType|description                     |refEntity|idAttribute|nillable|
|----------------|------------------|--------|--------------------------------|---------|-----------|--------|
|Identifier      |example_data_table|string  |The identifier for this table   |         |TRUE       |FALSE   |
|Gene            |example_data_table|string  |The HGNC Gene identifier        |         |FALSE      |TRUE    |
|Protein measured|example_data_table|string  |The protein that was measured   |         |FALSE      |TRUE    |
|Protein count   |example_data_table|int     |Number of proteins measured     |         |FALSE      |TRUE    |

This little bit is all you need. You specify the *name*, which is the name you gave to the column already. The *entity* is the name the table will get when it is stored in the database. The *dataType* is, as you might have guessed, the type of data that is present in each column. The *description* column allows you to describe your attribute. If you want to have a value point to another table, you can use the *refEntity* column. Complex data structures do not always consist of a single table, we support multiple table models through this system of reference entities. The *idAttribute* parameter will tell MOLGENIS that this is the primary key. It has to be unique, and it is not allowed to be null or missing. With the *nillable* parameter you can enforce whether an attribute is allowed to be missing or not.  

This is a minimal example of how you can use one extra sheet and a few columns to properly define your *meta data*. MOLGENIS is now capable of importing your data, storing it, displaying it, and making the data query-able.

In the [Becoming an expert MOLGENIS data importer](#importing-advanced) section, you can find the complete list of EMX options and parameters available to you.

#### <a name="importing-simple"></a> Importing your EMX file into MOLGENIS
So you have a MOLGENIS application running locally or on the server, and working with the example in the previous paragraph you have now converted your dataset into the EMX format. So I guess it is time to upload!

Browse to wherever your application is running, and login as admin user.
Go to the Upload menu. You now should see something like this:

![Importer first screen](images/importer_first_screen.png?raw=true, "importer")

To keep it simple, all you need to do is click the 'select a file' button, select your newly made EMX file, and press the next button until it starts importing. Don't worry about all the options you are skipping, we will handle those [later in this document](#importing-advanced). After your import is done, you can view your data in the data explorer. Go there by clicking the 'Data Explorer' link in the menu.

Congratulations! You have now deployed MOLGENIS either locally or on a server, and you have made the first steps on getting your data into the MOLGENIS database. Play around a bit with the different data explorer filters to get a feel on how MOLGENIS works.

Of course, simply uploading and showing data is not the only thing you can do with the MOLGENIS software. In the following [section](#from-user-to-expert), we will take you from being a simple user, and teach you on how to be an expert.

---
---

## <a name="from-user-to-expert"></a> From user to expert, MOLGENIS step-by-step
In this section you will learn about all the different modules MOLGENIS has to offer, step-by-step. Every module will be explained through a simple use case, going from a light explanation into a an example using every module at its full capabilities. Let us not wait any longer! We will start off with the most basic step, importing your data.

### <a name="importing-advanced"></a> Becoming an expert MOLGENIS data importer
<!--
TODO: Assimilate this into a proper piece of user documentation.
Use the table example from the importing-simple paragraph
-->
EMX (entity model extensible) is a flexible spreadsheet format to easily upload any tabular data using Excel or a zip file of tab-delimited *.tsv files. This works because you can tell MOLGENIS the 'model' of your data via a special sheet named 'attributes'.

## Rules for technical names
For all technical names in the EMX format, the following rules apply:
- No special characters, except for; '_' and '#', only letters, numbers are allowed.
- No names starting with digits. 
- Maximum length for names is 30 chars.
- Keywords used by programming languages (e.g. java, javascript, mysql) are not allowed.

These rules only apply to the technical names, labels are not limited by these rules.

## Minimal example ([download](example1.xlsx))

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

## Advanced data example ([download](example2.xlsx))

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

## Advanced model example

To model the data advanced data example, again you need to provide the 'attributes' (i.e., columns, properties). Optionally, you can also describe entities (i.e., classes, tables), and packages (i.e, models and sub models) which gives you some advanced options.

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
| disease     | patients |          |          |           |             |  disease description     |
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

## EMX model reference documentation

Minimally, you need to provide the 'attributes' of your model (i.e., columns, properties). Optionally, you can also add metadata on entities (i.e., classes, tables), and packages (i.e, models and sub models)

### 'Attributes'

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
  * categorical_mref : many-to-many relation to another entity; requires refEntity to be provided. Forms will display a complete list of options.
  * compound : way to assemble complex entities from building blocks (will be shown as tree in user interface);   requires refEntity to be provided.
  * file: [create a column of the 'file' data type](https://github.com/molgenis/molgenis/wiki/File-datatype) requires refEntity FileMeta.
* refEntity : used in combination with xref, mref or compound. Should refer to an entity.
* nillable : whether the column may be left empty. Default: false
* idAttribute : whether this field is the unique key for the entity. Default: false. Use 'AUTO' for auto generated (string) identifiers.
* description : free text documentation describing the attribute
* rangeMin : used to set range in case of int attributes
* rangeMax : used to set range in case of int attributes
* lookupAttribute : true/false to indicate that the attribute should appear in the xref/mref search drop down in the dataexplorer
* label : optional human readable name of the attribute
* aggregateable : true/false to indicate if the user can use this attribute in an aggregate query
* labelAttribute : true/false to indicate that the value of this attribute should be used as label for the entity (in the dataexplorer when used in xref/mref). Default: false
* readOnly true/false to indicate a readOnly attribute
* tags : ability to tag the data referring to the tags sections, described below
* validationExpression : javascript validation expression that must return a bool. Must return true if valid and false if invalid. See for a syntax description the section [[Javascript Expressions]]
* defaultValue: value that will be filled in in the forms when a new entity instance is created. Not yet supported for mref and xref values. For categorical_mref, should be a comma separated list of ids. For xref should be the of the refEntity. For bool should be true or false. For datetime should be a string in the format YYYY-MM-DDTHH:mm:ssZZ. For date should be a string in the format YYYY-MM-DD.

## Wish list

### 'Entities' options
Required columns:

* entity : unique name of the entity. If packages are provided, name must be unique within a package.

Optional columns:

* extends : reference to another entity that is extended
* package : name of the group this entity is part of
* abstract : indicate if data can be provided for this entity (abstract entities are only used for data modelling purposes but cannot accept data)
* description : free text description of the entity
* backend: the backend (database) to store the entities in (currently MySQL or ElasticSearch)
* tags : ability to tag the data referring to the tags sections, described below

### 'Packages' Options
Required columns:

* name : unique name of the package. If parent package is provided the name is unique within the parent.

Optional columns:
* description : free text description of the package
* parent : use when packages is a sub-package of another package
* tags : mechanism to add flexible meta data such as ontology references, hyperlinks

## BETA feature: 'tags'

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
* relationLabel: human readable label of the relation, e.g. 'Documentation and Help'
* relationIRI: url to the relation definition, e.g. http://edamontology.org/topic_3061
* codeSystem: name of the code system used, e.g. EDAM

Change documentation:

* 'required' and 'unique' (and xref_entity?) property for attribute?
* create separate 'unit' list?
* can we load dataset without entity / attributes (auto load?)
* create 'category'
  * code, label, is missing, description, ontology
  * use decorator to automatically produce identifier (optional)
* validation rules


<!-- 
TODO: Write a header for every module, start by explaining a module with an easy use case, and go into more detail with each step. Teach the user on how to become an expert
-->
### <a name="molgenis-interface-modules"></a> How to use MOLGENIS user interface (Hairball)

* data explorer
	* download
	* search and filter
	* aggregates
	* annotators
	* genome browser
	* charts
	* disease matcher

* questionnaire
* catalogue
* model registry
* mapping service
* pathways
* Account

### <a name="script-interface-how-to"></a> How to script interface (Hairball)

* REST
* R
* Python

### <a name="advanced-molgenis-app-configuration"></a> Advanced MOLGENIS application configuration (Hairball)
Once you have a server running and data loaded, you are probably eager to share your data with the world. However, you might want to only show your data to a select few, or you are not happy with the basic style MOLGENIS offers you. And of course you want people to land on a nice homepage when they navigate to your newly created web-based database. 

In the following paragraphs we explain on how to use different modules to configure your application the way you want to.

#### <a name="home-page"></a> Configuring your homepage


The home page is the first thing a visitor sees. It should be the thing that informs a user about whatever is on the page he or she has navigated to. It should also sell the content, making it a very important piece

#### <a name="user-management"></a> User management
User management is crucial for keeping an overview of people visiting your research database, but it is also important for security reasons. MOLGENIS has an extensive user management system, allowing people to register themselves, or be registered by an administrator. You can find the User manager module under the Admin menu. Going there, you will find something looking like this:

![Menu manager screen](images/user_manager.png?raw=true, "user manager")

The user management menu allows you to create new users and groups. But also lets you edit existing users, or add users to certain groups. The users *admin* and *anonymous* always exist. The admin user, as the name suggests, is the administrator user. The anonymous user is used for people navigating to your website, but are not logged in. This means that giving rights to the anonymous user will give permissions for everyone, also those that are not registered in your system. Note that it is not possible to delete users! You can only set them to inactive, which will prevent him or her from logging in.


**Try it out**  
To let you get a feel of how the user manager works, we will create a new user called molgenis_user. First, click the pencil with green plus icon. This will open up a form for creating a new MolgenisUser. Most of the fields are pretty self explanatory, but there are a few that we will elaborate on. 

First, there is a destinction between required and non-required fields. Required fields are marked by an asterisk. You can decide to only show the required fields by pressing the eye icon at the top right. This will save you the trouble of scrolling past all the non-required fields.

For now, click the eye so it only shows the required fields. It should show:

*  Username: The users login name
*  Password: The users password
*  Active: This sets if the user account is active, meaning that the user can login
*  Superuser: A super user is a form of administrator, he or she has acces to everything
*  Email: The users email
*  Change password: This sets whether the user has to change his or her password on the first login

Fill these fields with the following:

*  Username: molgenis_user
*  Password: password
*  Active: Yes
*  Superuser: No
*  Email: molgenis_user@email.org
*  Change password: No

Then click create. You will now return to the start screen and you can see that the molgenis_user user has been added to the bottom of the table. It has been automatically added to the 'All users' group, which will give the newly created user some basic permissions like the home page and its own account.

But we want more then just a user, we want to create a group as well. In the long run, setting permissions for groups is a lot less time consuming then treating every user individually. 

**Creating groups**  
At the the top of the screen, select the *Groups* tab. Here, you will there is only one group, the All users group. Click the pencil green plus icon to create a new group.

In the popup, set the Name to test_group, and set the group to Active. Click create and you will see the newly created group being added to the bottom of the table.

Go back to the users tab, and you can see there is now a column behind every user, that allows you to place that user in the test_group group. Why don't we add the molgenis_user to this test_group.

**Edit a user**  
If at any time you want to edit an existing user, you can click the icon in the edit column. This will show you a form where you can edit all the information pertaining to that specific user.

Managing your users is quick and easy. And opens up way to our next big security item, [setting permissions](#permissions) for your data.

#### <a name="permissions"></a> Setting permissions
For the scientific community, the need for data security is very large. We tried to meet this demand by implementing an extensive permission system. The system allows for the setting of count, read and write permissions on the different datasets 
and modules present in MOLGENIS. These permissions can be set either for specific users, or entire user groups.

You can navigate to the permission module under the Admin menu, and then navigating to the Permission Manager.

![Menu manager screen](images/permission_manager.png?raw=true, "permission manager")

Here you can set permissions for different groups and users. These permission allow users to either Edit, View, Count, or do nothing with the different data sets and modules in MOLGENIS.

**Try it out**  
Remember that molgenis_user that we created in the [user management](#user-management) section? If you go to the users tab and look for molgenis_user, you will find it does not have any permissions yet, except for those inherited from the All users group. Lets change dat

#### <a name="menu-manager"></a> Menu manager
The menu manager is a module that gives you the ability to arrange your menu to contain the items that you want it to contain. If you only want to show the data explorer and importer, you can do that. If you want to throw away news and background modules because you do not have any need for them, then you can do that as well. Every item is configurable.

![Menu manager screen](images/menu_manager.png?raw=true, "menu manager")

Just remember that throwing away the menu manager module might not be the best idea! And it's good to always keep the blue Home item at the top, else your homepage will no longer be accessible to anonymous visitors.

**Try it out**  
When you enter the menu manager screen, it can be a bit overwhelming. But do not be alarmed, we will take you through it one step at a time.

First, pay attention to the large list on the left. As you can see, this block represents the current menu structure. You can change the structure by moving items around, you can change the name of a menu item by pressing the pencil, and you can remove items by pressing the trash can. Remember to save your changes before leaving this screen by pressing the 'Save the new menu layout' button. If you do not, then your changes will not be applied to the menu.

The block to the right gives you the options to add new menu items, or to add an entirely new menu. Try it by creating a new menu with 'test_plugin' as ID and 'Test' as the Name, then press 'Create'. You will see that a new item, called Test, is added to your list of items on the left. Now that you have created a new menu, lets add an item to that menu.

Fill in the Create Menu Item form with the following data:

* Plugin: contact
* Name: Contact information
* Query string: 

Now press 'Create'. The Contact information item will appear in the list on the right. Move it under the Test menu, and save the layout. You should now have a Test drop down in your menu, and when you open it, it should show you the Contact information item. The contact plugin is similar to the Home plugin as it lets you fill in information via an online editor

**Using Query string to add additional parameters**  
Some modules, like the data explorer, can be opened with starting parameters. These can be used via the Query string field when creating a new menu item. To test this, we will add a Query string to the existing Data Explorer menu item so that the data set we created in the [previous importer section](#creating-emx-file) will be selected at the start.

Edit the existing data explorer item by pressing the pencil, and add the the following Query string:

* Query string: entity=example_data_table

Save and when you now press the *Data explorer* in your menu then you will be taken to the dataexplorer with the example_data_table data set selected.

A complete list of all the Query strings available per module:

* Data Explorer
	* *entity=*: Using this Query string you can open the data explorer with the specified entity selected. If we have a 	  data set called 'test_data', then you can set the url to *entity=test_data*.
	* *hideselect=*: Using this Query string you can hide the drop down for selecting data sets. Use this if you want users to 	  focus on only one data set. Combined with the *entity=* Query string, you can create a dataexplorer that only shows one 	  data set to users.
* Are there more? <!--TODO: find out if there are more query string possibilities for data explorer and / or other modules-->

**Creating redirects to URLs outside MOLGENIS**  
Using the redirect plugin as a menu item, you are able to create a link to an outside source. To show how this works, we will create a menu item that links to wikipedia.

First, create a new Menu item that has the following traits:  

* Plugin: redirect
* Name: Wikipedia Link
* Query string: https://en.wikipedia.org/wiki/Bioinformatics 

Second, move the new link below the Home item. Then press the 'Save the new menu layout' button. 

A new menu item will appear which will take you to the bioinformatics wikipedia page.

##### <a name="themes"></a> Styling your MOLGENIS application
Creating your own research database often comes with the desire to add a unique styling to it. We wanted to give users a way to change the standard [Bootstrap](http://getbootstrap.com/) style that is shipped with MOLGENIS. 

Using the Theme manager, you can select between multiple bootstrap styles.

![Theme Manager](images/theme_manager.png?raw=true, "Theme Manager")

To get the feel of how certain styles look, you can select it in the dropdown menu. The style will not be applied to the application unless you press the 'Save current theme' button.

For an overview of all the different themes offered, visit the [Bootswatch](https://bootswatch.com/) website. It us currently not yet possible to submit your own CSS sheets to update the styling. We do however plan to implement this in the future, giving you even more control to add your own personal style to your MOLGENIS research database.

## <a name="end-note"></a> End note
If you made it all the way through this document, then congratulations! You are now a certified MOLGENIS expert. If you feel the need to contribute to our software, you can find us on [GitHub](https://github.com/molgenis/molgenis). For technical documentation, containing information on the technologies we use and an architectural overview, take a look at our [technical documentation](url/here)

If you have questions, or if you are interested in having a server hosted by us, contact <name_here> <insert_email_here>.

