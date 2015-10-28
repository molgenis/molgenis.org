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


# MOLGENIS user documentation
---
## Introduction
**
This document is a detailed description of the web-based MOLGENIS software. Here you will learn, step-by-step, what MOLGENIS is, and the many options it offers you to explore and manipulate your data.
**

### What is MOLGENIS?
Molecular Genetics Information Systems, or MOLGENIS for short, is a web-based software toolkit designed to provide biologists with user friendly and scalable software infrastructures to capture, exchange, and exploit the large amounts of data that is being produced by scientific organizations all around the world. 

### Why MOLGENIS?
Why should you use MOLGENIS? One of the key features is that it uses an extensible model system, allowing users to model their data however they want. This creates flexibility that other, more static, database applications often lack. Its web-based, meaning you setup a server, install and configure MOLGENIS, load your data and share it with the world. If your data is ready, setting up a useful online research database can be done in a matter of days. Besides storing your data, MOLGENIS also allows for the creation of R and Python scripts that interact with your data. This enables you to run statistical analysis, or create plots based on your data within the online environment.

MOLGENIS takes away the hassle of storing and analysing data by taking care of the storing and querying part. Allowing researchers to focus on the data itself.

### Should I use MOLGENIS?
If you are a biologist, a bioinformatician, a researcher, or anyone else who has a lot of biological data on their hands, then MOLGENIS is a software package that will help you in setting up an online research database in no time at all, making your data query-able and allowing you to share your data with collaborators effortlessly. By mastering the MOLGENIS software toolkit you will be able to store, edit, analyse, and share your data faster then ever before. If one of the following use cases applies to you, then yes it is worth the effort to learn MOLGENIS.

#### Biobank catalogue
Biobank catalogue text + screenshots + example projects

#### NGS data annotation/interpretation
Using MOLGENIS for NGS text + screenshots + example projects

#### Research portals groups/consortia
Palga / mutation databases text + screenshots + example projects

#### Online analysis + pipelines
More analysis compute things?

### Getting your own MOLGENIS (Black triangle)
Molgenis can be downloaded from https://github.com/molgenis/molgenis

#### Happy install example
Example of how it should go in an ideal world

#### How to install
Installation guide ( Copy paste Readme.MD I guess)
Download VM, ready, go
Download war, install mysql + tomcat, go
How to upgrade (upgrade war, clean database, delete index)

#### How to configure your MOLGENIS
MOLGENIS is a variable system which can be catered to suit your needs and preferences. 

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

### How to get your data into MOLGENIS (Hairball)
Data is uploaded

#### Happy upload example
Easy uploading

#### The MOLGENIS flexible ‘meta model’ concept

* EMX reference
* CSV, XLS

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

### How to develop (Hairball / The Reference)

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
Extensive software, developed with advanced technologies etc etc..

#### Architecture overview 
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
