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


# <a name="top"></a> MOLGENIS user documentation

## <a name="introduction"></a> Introduction
**
This document is a detailed description of the web-based MOLGENIS software. Here you will learn, step-by-step, what MOLGENIS is, and the many options it offers you to explore and manipulate your data.
**

## <a name="table-of-contents"></a> Table of contents

* [What is MOLGENIS?](#what-is-molgenis)
* [Trying out MOLGENIS](#trying-out-molgenis)
* [Why MOLGENIS?](#why-molgenis)
* [Should I use MOLGENIS?](#should-i-use-molgenis)
	* [Biobanks](#biobank-example)
	* [NGS](#ngs-example)
	* [Research portals](#research-portal-example)
	* [Pipeline computing](#compute-example)
	

### <a name="what-is-molgenis"></a> What is MOLGENIS?
Molecular Genetics Information Systems, or MOLGENIS for short, is a web-based software toolkit designed to provide biologists with user friendly and scalable software infrastructures to capture, exchange, and exploit the large amounts of data that is being produced by scientific organisations all around the world. To get an idea of what the software can do, visit our [MOLGENIS YouTube channel](https://www.youtube.com/channel/UCiVR-YZFcBQe0i6RUwE9kyg).

### <a name="why-molgenis"></a> Why MOLGENIS?
Why should you use MOLGENIS? One of the key features is that it uses an extensible model system, allowing you to model your data however you want. This creates flexibility that other, more static, database applications often lack. It's web-based, meaning you setup a server, install and configure MOLGENIS, load your data and share it with the world. If your data is ready, setting up a useful online research database can be done in a matter of days. Besides storing your data, MOLGENIS also allows for the creation of R and Python scripts that interact with your data. This enables you to run statistical analysis, or create plots based on your data within the online environment.

MOLGENIS takes away the hassle of storing data, and makes it highly accessible with filters and fast search capabilities. This enables you as a researcher to focus on the data itself.

### <a name="should-i-use-molgenis"></a> Should I use MOLGENIS?
If you are a biologist, a bioinformatician, a researcher, or anyone else who has a lot of biological data on their hands, then MOLGENIS is a software package that will help you in setting up an online research database in no time at all, making your data query-able and allowing you to share your data with collaborators effortlessly. By mastering the MOLGENIS software toolkit you will be able to store, edit, analyse, and share your data faster then ever before. If one of the following use cases applies to you, then yes it is worth the effort to learn MOLGENIS.

#### <a name="biobank-example"></a> Biobank catalogue TODO
Biobank catalogue text + screenshots + example projects

#### <a name="ngs-example"></a> NGS data annotation/interpretation TODO
Using MOLGENIS for NGS text + screenshots + example projects

#### <a name="research-portal-example"></a> Research portals groups/consortia TODO
Palga / mutation databases text + screenshots + example projects

#### <a name="compute-example"></a> Online analysis + pipelines TODO
Analysis compute things?

---
---

### Trying out MOLGENIS
If you have decided to use MOLGENIS for your project, the first thing you can do is to get some hands-on experience by trying out our [demo server](https://www.molgenis.org/demo). This server contains several datasets including biobank data and genetic data. If you want to try importing some example files, then the only thing needed from your end is that you create an account. An email will be sent containing your login in credentials.

But perhaps you want to see how your own data looks like, and you would like to see your data locally, and not upload it for other people to see, not yet anyway. So lets jump right into that. 

<!--
TODO: We want to write a more easy way of getting MOLGENIS running locally. The MOLGENIS-cargo pom that Fleur made is a good example. It removes the apache-tomcat installation step. Sending people to the demo server is a good option as well but if we provide some example data then people will run into the "This entity already exists" errors.

Need to think this through a bit more, but for now this section contains a more technical installation guide.
-->
#### Installing MOLGENIS
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

### Getting your first data into MOLGENIS
So you have a MOLGENIS application up and running, and your dataset is sitting nice and cozy on your computer somewhere, now what? We upload the data of course! As mentioned before, MOLGENIS uses an extensible model format allowing you to model your data however you want. This is done via the **EMX** format. Now I know a custom format sounds scary, but if you keep reading for a bit, you will find out it's not scary at all.

We wanted researchers to be able to describe their data in a flexible 'meta model'. This sounds really interesting, but what it boils down to, is that you have one separate xlsx sheet that describes your column names, or attributes as we call them. Thats it. Thats all the EMX format is. Keep reading to find a detailed example.

#### Creating an EMX file
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

This is a minimal example of how you can use one extra sheet and a few columns to properly define your *meta data*. MOLGENIS is now capable of importing your data, storing it, displaying it, and making the data query able.

In the next section, you can find the complete list of EMX options and parameters.

#### Importing your EMX file into MOLGENIS
So you have a MOLGENIS application running locally or on the server, and working with the example in the previous paragraph you have now converted your dataset into the EMX format. So I guess it is time to upload!

Browse to wherever your application is running, and login as admin user.
Go to the Upload menu. You now should see something like this:

![Importer first screen](images/importer_first_screen.png?raw=true, "importer")

---
---

### To become an expert MOLGENIS data import user

There are several other 

### How to use MOLGENIS user interface (Hairball)

* data explorer
* search and filter
* aggregates
* export
* genome browser
* import
* biobankconnect
* questionnaire
* annotators
* catalogue
* model registry

### How to script interface (Hairball)

* REST
* R
* Python

### Advanced MOLGENIS application configuration (Hairball)
Once you got 

##### Menu manager
The Menu manager

##### Permissions
Permissions

##### User management
User management

##### Home page (static content)
Custom home page

##### Themes
Style themes

---
---

### How to develop (The Reference)

* Download code, eclipse, compile, run
* How to create a UI plugin
* React only (F): upload a zip as ‘app’
* Controller, template, javascript, html
* (see REST interface)
* How to create a backend plugin
* How to create an annotator
* Advanced topics
* How to test: selenium, integration, performance, unit
* How to migrations
* How to generate a deploy (F)

### Understanding how MOLGENIS works (The Reference)
If you have decided to become active in MOLGENIS development, then the following information will help you in understanding the architecture of software. The major java object and APIs are described in detail.

#### Architectural overview 
![](images/architecture_overview.png?raw=true "MOLGENIS architecture overview")

##### Core
The core of MOLGENIS

##### Extension points
Extension points

##### Dependencies
Dependencies

#### Data service
MOLGENIS provides a simple but powerful data framework. Key concepts are described below.
![](images/data_service.png?raw=true "MOLGENIS architecture overview")

##### Repositories
Scientific data always comes in large homogeneous collections to enable comparisons. The MOLGENIS entity framework allows for the definition of these collections as follows:

* repository: interface to access a collection  
* metadata: defines the attributes of each record in the collection  
* permission: defines who has collection level admin, edit, aggregate or view permissions  
* capabilities: define what a repository can do, i.e. add, updated, delete, etc

##### AttributeMetaData
The heart of EntityMetaData is defined by the definition of attributes.
TODO

##### EntityMetaData
EntityMetaData describes entities, which represent data uploaded into MOLGENIS
TODO

See the [EMX documentation](https://github.com/molgenis/molgenis/wiki/EMX-upload-format) for explanation of the proporties.

##### How to write a backend plugin?
TODO: describe what is needed

##### MyRepository
TODO

##### MyRepositoryCollection
TODO

#### service overview
Services we provide…

##### Data
Data

##### Account
Account system..

##### Permission
Permission system
