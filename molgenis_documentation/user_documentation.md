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
	* [Interacting with your data, MOLGENIS script interfaces](#how-to-interact-with-data)
 		* [REST API](#rest-api)
	 	* [R](#R)
 			* [Plotting Allele-Specific Expression data from MOLGENIS in R](#example-rest-R)
 			* [Query format](#R-query-format)
	 		* [Non-anonymous access](#R-non-anonymous-access)
 			* [Retrieving more rows](#R-getting-more-rows)
 			* [Pagination](#R-pagination)
 			* [Server](#R-server)
 			* [Other methods](#R-other-methods)
 		* [Python](#python)
 			* [Plotting Allele-Specific Expression data from MOLGENIS in Python](#example-rest-python)
 		* [Java](#java)
 		* [JavaScript](#java-script)
 		* [HTTP](#http)
 		* [Scripts](#scripts)
 			* [Creating a script](#creating-a-script)
 			* [Passing parameters to R, JavaScript and Python](#passing-script-parameters)
 			* [Passing parameters to Magma JavaScript](#passing-script-parameters-magma)
 			* [Generate molgenis security token](#generate-molgenis-token)
 			* [Use security token in R script](#use-molgenis-token-R)
 		* [Running a script](#running-a-script)
 		* [Permissions](#script-permissions)
 		* [Putting it all together](#scripts-putting-it-all-together)
 			* [Create the script](#create-the-script)
 			* [Call the script](#call-the-script)
 		* [Entity Report](#entity-report)

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
TODO: Put Jonathan his text here
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

### <a name="how-to-interact-with-data"></a> Interacting with your data, MOLGENIS script interfaces

#### <a name="rest-api"></a> REST API

MOLGENIS has a REST API that allows you to access the data and metadata inside MOLGENIS from the outside through HTTP requests. The REST API allows you to login using your molgenis user account, retrieve data and metadata, and query, aggregate, insert or update the data.

These HTTP requests are platform independent, so you should be able to create them quite easily on most client platforms.
For a couple common platforms we provide you with a higher level client-side MOLGENIS API that should make things even easier.


#### <a name="R"></a> R

The R API is a script that is hosted on MOLGENIS on the URL `http[s]://<your.molgenis.url>/molgenis.R`.

##### <a name="example-rest-R"></a> Plotting Allele-Specific Expression data from MOLGENIS in R
As an example, let's create a plot for publicly available ASE data available on https://molgenis56.target.rug.nl/. For a description of the data, take a look at [http://molgenis.org/ase](http://molgenis.org/ase).

Start up the R environment.

In the shell type:

```R
library('RCurl')
eval(expr = parse(text = getURL("https://molgenis56.target.rug.nl/molgenis.R")))
```

This loads the R API from the molgenis56 server. If you take a look in your workspace by typing

```R
ls()
```
you should see that a couple functions have been added for you to use:

```
 [1] "molgenis.add"                  "molgenis.addAll"               "molgenis.addList"              "molgenis.delete"               "molgenis.env"                 
 [6] "molgenis.get"                  "molgenis.getAttributeMetaData" "molgenis.getEntityMetaData"    "molgenis.login"                "molgenis.logout"              
[11] "molgenis.update"     
```

Let's load some data from the server using `molgenis.get`:

```R
molgenis.get("ASE")
```

This retrieves the top 1000 rows from the ASE entity.

```
P_Value Samples      SNP_ID Chr       Pos                           Genes
1    0.000000000000000020650473933963698652198164782417962682333833636491755847419682368126814253628253936767578125000000000000000000000000000000000000000000000000000000000000000000000     145   rs9901673  17   7484101 ENSG00000129226,ENSG00000264772
2    0.000000000000000008781097353981130661746700850633192724259771276345502150073585312384238932281732559204101562500000000000000000000000000000000000000000000000000000000000000000000     359   rs2597775   4  17503382                 ENSG00000151552
3    0.000000000000000001491745894983400057481059632909089858257546335023040629669255352496293198782950639724731445312500000000000000000000000000000000000000000000000000000000000000000     301      rs3216  11    214421                 ENSG00000177963
[...]
1000 0.000132500824069775005771554265976419628714211285114288330078125000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000      47   rs1056019  12  41337435                 ENSG00000018236
```

Let's retrieve a specific SNP from the ASE entity:

```R
molgenis.get("ASE", q="SNP_ID==rs12460890")
```

```
  Fraction_alternative_allele Likelihood_ratio_test_D Alternative_allele Reference_allele                P_Value Samples     SNP_ID Chr    Pos           Genes
1                       0.527                56.02079               TRUE                C 0.00000000000007170854      21 rs12460890  19 829568 ENSG00000172232
```

This SNP has a mild but significant allele-specific expression, based on expression counts in 21 samples.

Let's retrieve the samples for this SNP:

```R
samples <- molgenis.get("SampleAse", q="SNP_ID==rs12460890")
print(samples)
```

```
       SNP_ID SampleIds Ref_Counts Alt_Counts Chromosome Position      ID
1  rs12460890 ERS194242        130        121         19   829568 1418785
2  rs12460890 ERS326942       4142       4791         19   829568 1418786
3  rs12460890 ERS327006         19         28         19   829568 1418787
4  rs12460890 SRS353551         19         23         19   829568 1418788
5  rs12460890 SRS271084         32         11         19   829568 1418789
6  rs12460890 SRS375020        639        572         19   829568 1418790
7  rs12460890 SRS375024        202        309         19   829568 1418791
8  rs12460890 SRS375022        423        401         19   829568 1418792
9  rs12460890 SRS375030        271        234         19   829568 1418793
10 rs12460890 SRS375026        806       1081         19   829568 1418794
11 rs12460890 SRS375027        213        201         19   829568 1418795
12 rs12460890 SRS376459         74         96         19   829568 1418796
13 rs12460890 SRS375032        730        655         19   829568 1418797
14 rs12460890 SRS376461        584        699         19   829568 1418798
15 rs12460890 SRS376464        331        391         19   829568 1418799
16 rs12460890 SRS376469         13         14         19   829568 1418800
17 rs12460890 SRS376467         70        101         19   829568 1418801
18 rs12460890 SRS376468         47         35         19   829568 1418802
19 rs12460890 SRS418748         19         28         19   829568 1418803
20 rs12460890 SRS418754         44         47         19   829568 1418804
21 rs12460890 SRS418755         60         55         19   829568 1418805
```

There they are.
Let's plot the expression counts in these samples in a scatter plot.

```R
plot(samples$Ref_Counts, samples$Alt_Counts, xlim = c(0, 5000), ylim = c(0, 5000), xlab='Reference Allele', ylab='Alternative Allele', main = 'Allele-Specific Expression for rs12460890')
```

And add a line for the non-specific expression.

```R
lines(c(0,5000), c(0, 5000))
```
![image](images/rs12460890-r.png)

##### <a name="R-query-format"></a> Query format
The query must be in [fiql/rsql format](https://github.com/jirutka/rsql-parser).

##### <a name="R-non-anonymous-access"></a> Non-anonymous access
The ASE data from the previous example is publicly available.
To access private data, you can log in using

```R
molgenis.login("your username", "your password")
```
This will create a molgenis token on the server and set it in the `molgenis.token` variable in your R workspace.

When you're done, you can log out using

```R
molgenis.logout()
```

##### <a name="R-getting-more-rows"></a> Retrieving more rows
By default, `molgenis.get` will retrieve up to 1000 rows only.

If you need more rows, you can request up to 10000 rows by adding the `num` parameter:

```R
molgenis.get("ASE", num=2000)
```
will retrieve the top 2000 rows from the ASE entity.

##### <a name="R-pagination"></a> Pagination
You can retrieve the data page-by-page.

```R
molgenis.get("ASE", num=5)
```
will retrieve a first page of 5 rows and

```R
molgenis.get("ASE", num=5, start=5)
```
will retrieve the second page of 5 rows.

##### <a name="R-server"></a> Server
By default, the MOLGENIS R API retrieves its data from the server you retrieved it from, so if you want to retrieve data from a different server, simply source the molgenis.R from that server.

But if you want to combine data from multiple server, you can specify a different REST API URL to use by setting `molgenis.api.url` in the `molgenis.env` environment. For example:

```R
local({
  molgenis.api.url <- "https://molgenis56.target.rug.nl:443/api/v1/"
}, env = molgenis.env)
```
or

```R
local({
  molgenis.api.url <- "http://localhost:8080/api/v1/"
}, env = molgenis.env)
```

##### <a name="R-other-methods"></a> Other methods
You can manage your data using the other `molgenis.*` methods. See [the technical reference documentation](https://github.com/molgenis/molgenis/wiki/R-project-API-v1).

#### <a name="python"></a> Python
TODO: Merge to molgenis master, show how to install.

##### <a name="example-rest-python"></a> Plotting Allele-Specific Expression data from MOLGENIS in Python
As an example, let's create a plot for publicly available ASE data available on https://molgenis56.target.rug.nl/. For a description of the data, take a look at [http://molgenis.org/ase](http://molgenis.org/ase).

We'll be creating a scatter plot so if you haven't already, install matplotlib from the commandline:

```python
pip install matplotlib
```

Start an interactive python shell and create a molgenis connection:

```python
import molgenis
c = molgenis.Connection("https://molgenis56.target.rug.nl/api/")
```
This imports the molgenis package and instantiates a new Connection and points it at the molgenis56 server. If you take a look at the connection by typing

```python
dir(c)
```
you should see the methods you can call:

```python
['__doc__', '__init__', '__module__', '_getTokenHeader', 'add', 'addAll', 'delete', 'get', 'getAttributeMetaData', 'getEntityMetaData', 'login', 'logout', 'url']     
```

Let's load some data from the server using `c.get`:

```python
c.get("ASE")
```
This retrieves the top 1000 rows from the ASE entity.

```python
[{u'Alternative_allele': u'A', u'P_Value': 2.06504739339637e-17, u'Genes': {u'href': u'/api/v1/ASE/rs9901673/Genes'}, u'Fraction_alternative_allele': 0.479, u'Pos': 7484101, u'Reference_allele': u'C', u'Chr': u'17', u'href': u'/api/v1/ASE/rs9901673', u'Samples': u'145', u'Likelihood_ratio_test_D': 72.0813644150712, u'SNP_ID': u'rs9901673'}, {u'Alternative_allele': u'T', u'P_Value': 8.78109735398113e-18, u'Genes': {u'href': u'/api/v1/ASE/rs2597775/Genes'}, u'Fraction_alternative_allele': 0.479, u'Pos': 17503382, u'Reference_allele': u'C', u'Chr': u'4', u'href': u'/api/v1/ASE/rs2597775', u'Samples': u'359', u'Likelihood_ratio_test_D': 73.769089117417, u'SNP_ID': u'rs2597775'}, {u'Alternative_allele': u'C', u'P_Value': 1.4917458949834e-18, u'Genes': {u'href': u'/api/v1/ASE/rs3216/Genes'}, u'Fraction_alternative_allele': 0.479, u'Pos': 214421, u'Reference_allele': u'G', u'Chr': u'11', u'href': u'/api/v1/ASE/rs3216', u'Samples': u'301', u'Likelihood_ratio_test_D': 77.2691957930797, u'SNP_ID': u'rs3216'}, [...],{u'Alternative_allele': u'T', u'P_Value': 0.000132500824069775, u'Genes': {u'href': u'/api/v1/ASE/rs1056019/Genes'}, u'Fraction_alternative_allele': 0.482, u'Pos': 41337435, u'Reference_allele': u'C', u'Chr': u'12', u'href': u'/api/v1/ASE/rs1056019', u'Samples': u'47', u'Likelihood_ratio_test_D': 14.605874945467, u'SNP_ID': u'rs1056019'}
```
Let's retrieve a specific SNP from the ASE entity:

```python
print c.get("ASE", q=[{"field":"SNP_ID", "operator":"EQUALS", "value":"rs12460890"}])
```
```python
[{u'Alternative_allele': u'T', u'P_Value': 7.1708540619282e-14, u'Genes': {u'href': u'/api/v1/ASE/rs12460890/Genes'}, u'Fraction_alternative_allele': 0.527, u'Pos': 829568, u'Reference_allele': u'C', u'Chr': u'19', u'href': u'/api/v1/ASE/rs12460890', u'Samples': u'21', u'Likelihood_ratio_test_D': 56.0207947348388, u'SNP_ID': u'rs12460890'}]
```
This SNP has a mild but significant allele-specific expression, based on expression counts in 21 samples.

Let's retrieve the samples for this SNP:

```python
samples = c.get("SampleAse", q=[{"field":"SNP_ID", "operator":"EQUALS", "value":"rs12460890"}])
print samples
```

```python
[{u'Ref_Counts': u'130', u'href': u'/api/v1/SampleAse/1418785', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418785/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418785/SNP_ID'}, u'Alt_Counts': u'121', u'ID': u'1418785', u'Chromosome': u'19'}, {u'Ref_Counts': u'4142', u'href': u'/api/v1/SampleAse/1418786', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418786/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418786/SNP_ID'}, u'Alt_Counts': u'4791', u'ID': u'1418786', u'Chromosome': u'19'}, {u'Ref_Counts': u'19', u'href': u'/api/v1/SampleAse/1418787', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418787/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418787/SNP_ID'}, u'Alt_Counts': u'28', u'ID': u'1418787', u'Chromosome': u'19'}, {u'Ref_Counts': u'19', u'href': u'/api/v1/SampleAse/1418788', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418788/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418788/SNP_ID'}, u'Alt_Counts': u'23', u'ID': u'1418788', u'Chromosome': u'19'}, {u'Ref_Counts': u'32', u'href': u'/api/v1/SampleAse/1418789', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418789/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418789/SNP_ID'}, u'Alt_Counts': u'11', u'ID': u'1418789', u'Chromosome': u'19'}, {u'Ref_Counts': u'639', u'href': u'/api/v1/SampleAse/1418790', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418790/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418790/SNP_ID'}, u'Alt_Counts': u'572', u'ID': u'1418790', u'Chromosome': u'19'}, {u'Ref_Counts': u'202', u'href': u'/api/v1/SampleAse/1418791', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418791/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418791/SNP_ID'}, u'Alt_Counts': u'309', u'ID': u'1418791', u'Chromosome': u'19'}, {u'Ref_Counts': u'423', u'href': u'/api/v1/SampleAse/1418792', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418792/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418792/SNP_ID'}, u'Alt_Counts': u'401', u'ID': u'1418792', u'Chromosome': u'19'}, {u'Ref_Counts': u'271', u'href': u'/api/v1/SampleAse/1418793', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418793/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418793/SNP_ID'}, u'Alt_Counts': u'234', u'ID': u'1418793', u'Chromosome': u'19'}, {u'Ref_Counts': u'806', u'href': u'/api/v1/SampleAse/1418794', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418794/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418794/SNP_ID'}, u'Alt_Counts': u'1081', u'ID': u'1418794', u'Chromosome': u'19'}, {u'Ref_Counts': u'213', u'href': u'/api/v1/SampleAse/1418795', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418795/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418795/SNP_ID'}, u'Alt_Counts': u'201', u'ID': u'1418795', u'Chromosome': u'19'}, {u'Ref_Counts': u'74', u'href': u'/api/v1/SampleAse/1418796', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418796/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418796/SNP_ID'}, u'Alt_Counts': u'96', u'ID': u'1418796', u'Chromosome': u'19'}, {u'Ref_Counts': u'730', u'href': u'/api/v1/SampleAse/1418797', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418797/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418797/SNP_ID'}, u'Alt_Counts': u'655', u'ID': u'1418797', u'Chromosome': u'19'}, {u'Ref_Counts': u'584', u'href': u'/api/v1/SampleAse/1418798', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418798/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418798/SNP_ID'}, u'Alt_Counts': u'699', u'ID': u'1418798', u'Chromosome': u'19'}, {u'Ref_Counts': u'331', u'href': u'/api/v1/SampleAse/1418799', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418799/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418799/SNP_ID'}, u'Alt_Counts': u'391', u'ID': u'1418799', u'Chromosome': u'19'}, {u'Ref_Counts': u'13', u'href': u'/api/v1/SampleAse/1418800', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418800/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418800/SNP_ID'}, u'Alt_Counts': u'14', u'ID': u'1418800', u'Chromosome': u'19'}, {u'Ref_Counts': u'70', u'href': u'/api/v1/SampleAse/1418801', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418801/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418801/SNP_ID'}, u'Alt_Counts': u'101', u'ID': u'1418801', u'Chromosome': u'19'}, {u'Ref_Counts': u'47', u'href': u'/api/v1/SampleAse/1418802', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418802/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418802/SNP_ID'}, u'Alt_Counts': u'35', u'ID': u'1418802', u'Chromosome': u'19'}, {u'Ref_Counts': u'19', u'href': u'/api/v1/SampleAse/1418803', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418803/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418803/SNP_ID'}, u'Alt_Counts': u'28', u'ID': u'1418803', u'Chromosome': u'19'}, {u'Ref_Counts': u'44', u'href': u'/api/v1/SampleAse/1418804', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418804/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418804/SNP_ID'}, u'Alt_Counts': u'47', u'ID': u'1418804', u'Chromosome': u'19'}, {u'Ref_Counts': u'60', u'href': u'/api/v1/SampleAse/1418805', u'SampleIds': {u'href': u'/api/v1/SampleAse/1418805/SampleIds'}, u'Position': 829568, u'SNP_ID': {u'href': u'/api/v1/SampleAse/1418805/SNP_ID'}, u'Alt_Counts': u'55', u'ID': u'1418805', u'Chromosome': u'19'}]
```

There they are.

Let's format the expression counts

```python
for sample in samples:
	print "{Ref_Counts:5}\t{Alt_Counts:5}".format(**sample)
```

```python
130  	121
4142 	4791
19   	28
19   	23
32   	11
639  	572
202  	309
423  	401
271  	234
806  	1081
213  	201
74   	96
730  	655
584  	699
331  	391
13   	14
70   	101
47   	35
19   	28
44   	47
60   	55
```

Let's plot the expression counts in these samples in a scatter plot.

```python
import matplotlib.pyplot as plt
plt.scatter([sample["Ref_Counts"] for sample in samples], [sample["Alt_Counts"] for sample in samples])
plt.xlim([0, 5000])
plt.ylim([0, 5000])
plt.xlabel("Reference Allele")
plt.ylabel("Alternative Allele")
plt.title("Allele-Specific Expression for rs12460890")
```


And add a line for the non-specific expression.

```python
plt.plot([0, 5000], [0, 5000])
plt.show()
```
![image](images/rs12460890-py.png)

#### <a name="java"></a> Java
The `molgenis-data-rest-client` module contains an `org.molgenis.data.rest.clientMolgenisClient` class that we use to access the REST API for our own integration tests. It's built using the Spring `RestTemplate`.

The method calls are synchronous. Not all REST API methods are supported yet, it's not well documented and it has no users that we know of other than ourselves. But if you're interested in accessing a remote MOLGENIS instance from Java, you'll want to take a look there for inspiration.

#### <a name="java-script"></a> JavaScript
Internally, MOLGENIS uses `molgenis.RestClient` and `molgenis.RestClientV2` defined in `molgenis.js`. Their methods are implemented using `jquery.ajax`. This interface is not yet supported externally, but if you're planning to access MOLGENIS from JavaScript, you'll want to take a look at that for inspiration.

#### <a name="http"></a> HTTP
This is the raw HTTP REST API that the other APIs are built upon.
There are two versions, v1 and v2. v2 should be seen as an extension of v1.

The main differences between v2 and v1 are that v2 retrieves more entity metadata and that it allows you to query using RSQL.
But beware: the v1 csv endpoint already queries using RSQL.

#### <a name="scripts"></a> Scripts
Scripts are defined in the Scripts plugin.
By default you can find it in the menu under Plugins, Scripts.
The Scripts plugin allows you to create, edit and delete the available scripts.

##### <a name="creating-a-script"></a> Creating a script
You open the script editor by clicking the add button ![image](images/new.png).

* Name: The name uniquely identifies the script
* Type: The script type determines how the script is executed.
	* R scripts are executed in R
	* Python scripts are executed in Python
	* Magma JavaScript and JavaScript scripts are executed in a JavaScript context
* Content: The actual script content goes here.
* Result file extension: Allows you to render output in your script. For instance, if you set this to `png`, the script will be provided with a parameter `outputFile`. You can write your png image to this file. When the script is done, the contents of the file will be served as a result of the script invocation request.
* Parameters Your script may define parameters that it needs in order to run. **All parameters are of type String**. Multiple scripts can share the same parameter, here you just specify the parameter names.

##### <a name="passing-script-parameters"></a> Passing parameters to R, JavaScript and Python
If your Type is R, JavaScript or Python, the Script Content is interpreted as a [Freemarker](http://freemarker.apache.org) template. The parameters are provided as Freemarker variables. You can render them in the script by typing `${parameter}`, but the full Freemarker syntax is at your disposal, so for instance `<#if><#else><#/if>` constructs are also available.

This means that if you want to initialize an R or Python string variable with the value of a parameter string, you'll need to explicitly encapsulate it with quotes.

So in R:

```
# Assign string parameter
name <- "${name}"
# Assign numeric parameter
amount <- ${amount}
```

And in Python:

```
# Assign string parameter
name = "${name}"
# Assign numeric parameter
amount = ${amount}
```

And in JavaScript:

```
// Assign string parameter
var name = "${name}"
// Assign numeric parameter
var amount = ${amount}
```

The script template will be rendered to a file in the File Store and this file will be interpreted using the R or Python interpreter.

##### <a name="passing-script-parameters-magma"></a> Passing parameters to Magma JavaScript
If your Type is [Magma JavaScript](http://wiki.obiba.org/display/OPALDOC/Magma+Javascript+API), the parameters are available through Magma's [$ selector](http://wiki.obiba.org/display/OPALDOC/value+selector+method) method.
JavaScript will have to do the type conversions for you. Or if you want to be sure, you should cast the values explicitly

```
// Assign string parameter
var name = $("name")
// Assign numeric parameter
var amount = int($("amount"))
```

##### <a name="generate-molgenis-token"></a> Generate molgenis security token
Your script can access data inside a MOLGENIS repository through the REST API.
If the data is private data, you can set Generate Security Token to Yes.
Then a molgenis security token will be generated for the user running the script and added as a parameter named `molgenisToken`.
You can pass the token on to the REST API.

##### <a name="use-molgenis-token-R"></a> Use security token in R script
Pass the token as a parameter when you request the molgenis.R api script:

```
library('RCurl')
eval(expr = parse(text = getURL("https://molgenis01.target.rug.nl/molgenis.R?molgenis-token=${molgenisToken}")))
molgenis.get("MolgenisUser")
```

#### <a name="running-a-script"></a> Running a script
You can run your script by pressing the ![image](images/execute.png) execute button.
If the script has parameters, you'll be presented with a popup form to specify them.

You can also run the script through an HTTP request.
For instance, to run the `bmi` script with parameters `weight=50` and `height=1.60` on server `http://molgenis09.target.rug.nl` you can surf to [https://molgenis09.target.rug.nl/scripts/bmi/run?weight=50&height=1.60](https://molgenis09.target.rug.nl/scripts/bmi/run?weight=50&height=1.60)

**Beware that you need to URL-encode parameter values if they contain special characters**

#### <a name="script-permissions"></a> Permissions
Note that in order to execute scripts, users need

* to be authenticated (i.e. anonymous users cannot execute your scripts)
* View permissions on the Scripts entity
* View permissions on the ScriptParameter entity
* View permissions on the ScriptType entity

#### <a name="scripts-putting-it-all-together"></a> Putting it all together
Let's take the R script from [the previous example](#example-rest-R) and add it to the Script plugin. The script will fetch the public ASE data from [https://molgenis56.target.rug.nl/](https://molgenis56.target.rug.nl/)

You'll need a running instance of MOLGENIS.
So either run this example locally on your own MOLGENIS instance or Sign Up on our demo server [https://molgenis09.target.rug.nl/](https://molgenis09.target.rug.nl/)

##### <a name="create-the-script"></a> Create the script

Go to the Script plugin and create a new script.

* Name: Any name will do, as long as it's unique. Since the result will be a plot of Allele-Specific Expression for a SNP, we suggest the name `plot-ase`.
* Type: We're creating an R script, so pick `R`.
* Generate security token: No, since the data is publicly available and lives on a different server anyways.
* Result file extension: R can plot postscript, pdf, png and jpeg. Let's pick `png`.
* Parameters: In the example we plotted one specific ASE, let's make the snp ID a parameter. Select `snp_id`. If it's not yet available you can add it by pushing the **+** button to the right of the select box.

* Content:

```
library('RCurl')
eval(expr = parse(text = getURL("https://molgenis56.target.rug.nl/molgenis.R")))

samples <- molgenis.get("SampleAse", q="SNP_ID==${snp_id}")
jpeg('${outputFile}')

max <- max(samples$Ref_Counts, samples$Alt_Counts)

plot(samples$Ref_Counts, samples$Alt_Counts, xlim = c(0, max), ylim = c(0, max), xlab='Reference Allele', ylab='Alternative Allele', main = 'Allele-Specific Expression for ${snp_id}')
lines(c(0,max), c(0, max))
```

Let's take a closer look at what happens here.

First we fetch and source the MOLGENIS R API from molgenis56.
This means it'll be set up to retrieve its data from molgenis56.

Then we retrieve the samples using `molgenis.get`.

The `snp_id` parameter gets filled in into the rsql query q.
So if for instance `snp_id` equals `rs2287988`, Freemarker will fill the parameter in where it says `${snp_id}` so the query becomes `q="SNP_ID==rs2287988"`.

The outputFile parameter gets filled in into `jpeg('${outputFile}')` so that R plots to the correct output file.

In [the previous example](#example-rest-R) we manually set the axes to `c(0, 5000)`, but here the amount of reads depends on the chosen SNP. So we compute the maximum amount of reads in both the `Ref_Counts` and `Alt_Counts` attributes of the `samples` dataframe.

Next we create the scatter plot and the reference line, like we did before.
Note how we use the `snp_id` parameter a second time, to render the plot title.

Save the script.

##### <a name="call-the-script"></a> Call the script
Push the ![image](images/execute.png) execute button.

In the popup, specify the value for `snp_id`, for example `rs2287988`.

Push Run.

![image](images/rs2287988.png)

#### <a name="entity-report"></a> Entity Report
If you are plotting your own data, a nice trick is to define a FreemarkerTemplate with an Entity Report for the entity you're plotting.

For instance, if you have an entity with a SNP_ID attribute, it's as easy as adding `<img src="https://molgenis09.target.rug.nl/scripts/plot-ase/run?snp_id=${entity.getString("SNP_ID")}"/>` into the FreemarkerTemplate for that entity.

This will allow you to generate one or more plots for entities you select in the Data Explorer. See the documentation for Entity Report.

### <a name="advanced-molgenis-app-configuration"></a> Advanced MOLGENIS application configuration (Hairball)
Once you have a server running and data loaded, you are probably eager to share your data with the world. However, you might want to only show your data to a select few, or you are not happy with the basic style MOLGENIS offers you. And of course you want people to land on a nice homepage when they navigate to your newly created web-based database. 

In the following paragraphs we explain on how to use different modules to configure your application the way you want to.

#### <a name="home-page"></a> Configuring your homepage
The home page is one of the most important part of your MOLGENIS application. It is a doorway to the rest of your application, and as it is such, it should look nice! When you are logged in as administrator, the home page contains an *edit* button. Clicking this button will open up an editor. 

![Home page editor](images/home_page_editor.png?raw=true, "home page editor")

Here you can do simple stuff like adding text, images, and table. 

If you want more control, you can go to tools -> Source code. This opens up an HTML editor, which is nice if you know how to write HTML. For even more fancy functionality, the Source code editor also allows you to write JavaScript code.

If you need some aspiration for a nice home page, you visit either the [ASE website](http://molgenis.org/ase) or the [COL7A1 website](https://molgenis03.target.rug.nl/).

#### <a name="user-management"></a> User management
User management is crucial for keeping an overview of people visiting your online database, but it is also important for security reasons. MOLGENIS has an extensive user management system, allowing people to register themselves, or be registered by an administrator. MOLGENIS uses groups and users to efficiently control permissions. Groups and users can both have individual permissions on certain data sets for example. But users can also be part of a group, automatically inheriting the permissions set for that group. You can find the User manager module under the Admin menu:

![Menu manager screen](images/user_manager.png?raw=true, "user manager")

The user management menu allows you to create new users and groups. But also lets you edit existing users, or add users to certain groups. The users *admin* and *anonymous* always exist. The admin user, as the name suggests, is the administrator user. The anonymous user is used for people navigating to your website. This means that giving rights to the anonymous user will give permissions for everyone, also those that are not registered in your system. Note that it is not possible to delete users! You can only set them to inactive, which will prevent him or her from logging in.

**Try it out**  
To let you get a feel of how the user manager works, we will create a new user called molgenis_user. First, click the ![New button](images/new.png?raw=true, "new button") button. This will open up a form for creating a new MolgenisUser. Most of the fields are pretty self explanatory, but there are a few that we will elaborate on. 

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
At the the top of the screen, select the *Groups* tab. Here, you will there is only one group, the All users group. Click the ![New button](images/new.png?raw=true, "new button") button to create a new group.

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
Remember that molgenis_user that we created in the [user management](#user-management) section? If you go to the users tab and look for molgenis_user, you will find it does not have any permissions yet, except for those inherited from the All users group. Lets change it so that our test_group has the permission to open the Data explorer, and the molgenis_user will be able to see the example_data_table data set, which we created in the [Creating an EMX file](#creating-emx-file) section.

**Setting group permissions**  
As you open the permission manager, the groups tab is already selected. For the group *test_group* we want to set the permissions in such a way to the members of that group can use the data explorer to look at data sets. To do this, select the test_group from the drop down. Next you will want to lookup dataexplorer in the Plugin column, and set the permission to *View*. Press the Save button which is below the table to save your change. 

To make it work perfectly, we will also have to give rights to the group to read the data explorer settings table. To do this, select the *Entity Class Permissions* menu, select the test_group from the drop down, and find the *settings_dataexplorer* in the Entity Class column and set it to *View*. 

**Setting user permissions**  
Now that we have the Data Explorer module working for the test_group, we want to give our molgenis_user the permission to see the example_data_table. To do this, select Entity Class Permissions menu, switch to the Users tab, and select molgenis_user from the dropdown. Look up example_data_table in the Entity Class column and set the permission to *View*.

Congratulations! The molgenis_user account should now be able to use the data explorer, and see the example_data_table data set. You can verify this by logging out as admin, and logging in again as the molgenis_user.

Note that if you are creating more complex data sets that have references to other data sets, that you should also consider giving permissions to those reference tables.

And if you are wondering about the Entity permissions menu, that is reserved for when we implement row level security.

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
Some modules, like the data explorer, can be opened with starting parameters. These can be used via the Query string field when creating a new menu item. To test this, we will add a Query string to the existing Data Explorer menu item so that the data set we created in the [Creating an EMX file](#creating-emx-file) section will be selected at the start.

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

For an overview of all the different themes offered, visit the [Bootswatch](https://bootswatch.com/) website. It is currently not yet possible to submit your own CSS sheets to update the styling. We do however plan to implement this in the future, giving you even more control to add your own personal style to your MOLGENIS research database.

## <a name="end-note"></a> End note
If you made it all the way through this document, then congratulations! You are now a certified MOLGENIS expert. If you feel the need to contribute to our software, you can find us on [GitHub](https://github.com/molgenis/molgenis). For technical documentation, containing information on the technologies we use and an architectural overview, take a look at our [technical documentation](url/here)

If you have questions, or if you are interested in having a server hosted by us, contact <name_here> <insert_email_here>.

