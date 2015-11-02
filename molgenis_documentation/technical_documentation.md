# <a name="top"></a> MOLGENIS v1.12 technical documentation

## <a name="table-of-contents"></a> Table of contents
* [Become a MOLGENIS developer](#how-to-develop)
	* [Understanding how MOLGENIS works](#molgenis-architecture)
		* [Architectural overview](#architecture-overview)
			* [MOLGENIS core](#molgenis-core)
			* [MOLGENIS dependencies](#molgenis-dependencies)
		* [Data service](#data-service)
			* [Repositories](#molgenis-repositories)
			* [Attribute metadata](#molgenis-attribute-metadata)
			* [Entity metadata](#molgenis-entity-metadata)
			* [My repository](#molgenis-my-repository)
			* [My repository collection](#molgenis-my-repository-collection)
		* [How to write a new backend plugin](#how-to-write-a-new-plugin)


## <a name="how-to-develop"></a> Become a MOLGENIS developer (The Reference)

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

### <a name="molgenis-architecture"></a> Understanding how MOLGENIS works (The Reference)
If you have decided to become active in MOLGENIS development, then the following information will help you in understanding the architecture of software. The major java object and APIs are described in detail.

#### <a name="architecture-overview"></a> Architectural overview 
![](images/architecture_overview.png?raw=true "MOLGENIS architecture overview")

##### <a name="molgenis-core"></a> MOLGENIS core
The core of MOLGENIS

##### <a name="molgenis-dependencies"></a> MOLGENIS dependencies
Dependencies

#### <a name="data-service"></a> Data service
MOLGENIS provides a simple but powerful data framework. Key concepts are described below.
![](images/data_service.png?raw=true "MOLGENIS architecture overview")

##### <a name="molgenis-repositories"></a> Repositories
Scientific data always comes in large homogeneous collections to enable comparisons. The MOLGENIS entity framework allows for the definition of these collections as follows:

* repository: interface to access a collection  
* metadata: defines the attributes of each record in the collection  
* permission: defines who has collection level admin, edit, aggregate or view permissions  
* capabilities: define what a repository can do, i.e. add, updated, delete, etc

##### <a name="molgenis-attribute-metadata"></a> Attribute metadata
The heart of EntityMetaData is defined by the definition of attributes.
TODO

##### <a name="molgenis-entity-metadata"></a> Entity metadata
EntityMetaData describes entities, which represent data uploaded into MOLGENIS
TODO

See the [EMX documentation](https://github.com/molgenis/molgenis/wiki/EMX-upload-format) for explanation of the proporties.

##### <a name="molgenis-my-repository"></a> My repository
TODO

##### <a name="molgenis-my-repository-collection"></a> My repository collection
TODO

#### <a name="how-to-write-a-new-plugin"></a> How to write a backend plugin?
TODO: describe what is needed
