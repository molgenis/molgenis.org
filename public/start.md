**
Here you will learn, step-by-step, what MOLGENIS is, how to install it, and first glance on the options it offers you to manage and explore your data.
**

# What is MOLGENIS?
MOLGENIS is a modular web application for scientific data. MOLGENIS was born from molecular genetics research (and was called 'molecular genetics information system') but has grown, thanks too many sponsors and contributors,  to be used in many scientifc areas such as biobanking, rare disease research, patient registries and even energy research. MOLGENIS provides researchers with user friendly and scalable software infrastructures to capture, exchange, and exploit the large amounts of data that is being produced by scientific organisations all around the world. To get an idea of what the software can do, visit our [MOLGENIS YouTube channel](https://www.youtube.com/channel/UCiVR-YZFcBQe0i6RUwE9kyg).

![molgenis overview](res/images/molgenis-overview.png?raw=true, "molgenis overview")

## Why MOLGENIS?
Why should you use MOLGENIS? One of the key features is that it has a completely customizable data system, allowing you to model your data however you need. This creates flexibility that other, more static, database applications often lack. It's web-based, meaning you setup a server, install and configure MOLGENIS, load your data and share it with the world. If your data is ready, setting up a useful online research database application can be done in a few hours. Another key feature is that MOLGENIS is modular, having all kinds of extension modules to store and interact with your data. A good example are interfaces to create R and Python scripts that interact with your data. This enables you to add your own statistical modules run statistical analysis, or create plots based on your data within the online environment.

MOLGENIS takes away the hassle of storing data, and makes it highly accessible with filters and fast search capabilities. This enables you as a researcher to focus on the data itself.

<!--
## Who is using MOLGENIS?
Several research groups and organisations are already using MOLGENIS for their projects. Below is a list of all the projects currently hosted by us.

|Project name | Pubmed                                            | Project URL                                 |Project description          |
|-------------|---------------------------------------------------|---------------------------------------------|-----------------------------|
|ASE          |[link](http://www.ncbi.nlm.nih.gov/pubmed/25954321)|[Database](molgenis.org/ase)                 |Database for measured ASEs   |
|COL7A1       |[link](http://www.ncbi.nlm.nih.gov/pubmed/21681854)|[Database](https://molgenis03.target.rug.nl/)|Database for COL7A1 mutations|

BIG TODO summarize more examples
-->

## Should I use it?
If you are a researcher, a (bio)informatician, a biomedical practicioner, or anyone else who has a lot of (scientific) data on their hands, then MOLGENIS is a software package that will help you in setting up an online  database application in no time at all, making your data query-able and allowing you to share your data with collaborators effortlessly. By mastering the MOLGENIS software toolkit you will be able to store, edit, analyse, and share your data faster than ever before. 

<!-- If one of the following use cases applies to you, then yes it is worth the effort to learn MOLGENIS.

#### <a name="biobank-example"></a> Biobank catalogue
Biobanks are collections of data from samples.
MOLGENIS is being used to host biobank data for several major Dutch and European biobanking projects. The BBMRI-NL and BBMRI-ERIC projects.

#### <a name="ngs-example"></a> NGS data annotation and interpretation
Next generation sequencing (NGS) data often results in mutation data. thousands of single SNPs...
MOLGENIS is hosting multiple mutation databases like the COL7A1 database and the CHD7 database.
-->
<!-- TODO #### <a name="research-portal-example"></a> Research portals -->
<!-- TODO #### <a name="compute-example"></a> Analysis pipelines and online computing -->

# Try online

## Using our demo server
The first thing you can do is to get some hands-on experience by trying out our [demo server](http://molgenis.org/demo). This server contains several data sets including biobank data and genetic data. If you want to try importing some example files, then the only thing needed from your end is that you create an account. An email will be sent containing your login in credentials.
But perhaps you want to see how your own data looks like, but not upload it for other people to see, not yet anyway. So let's jump right into that.  

## Getting your first data in
So you have a MOLGENIS application up and running, and your dataset is sitting nice and cozy on your computer somewhere, now what? We upload the data of course! As mentioned before, MOLGENIS uses an extensible model format allowing you to model your data however you want. This is done via the **EMX** format. Now I know a custom format sounds scary, but if you keep reading for a bit, you will find out it's not scary at all.

We wanted researchers to be able to describe their data in a flexible 'meta model'. This sounds really interesting, but what it boils down to, is that you have one separate xlsx sheet that describes your column names, or attributes as we call them. Thats it. Thats all the EMX format is. Keep reading to find a detailed example.

## <a name="creating-emx-file"></a> Creating an EMX file
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

## Importing your EMX file
So you have a MOLGENIS application running locally or on the server, and working with the example in the previous paragraph you have now converted your dataset into the EMX format. So I guess it is time to upload!

Browse to wherever your application is running, and login as admin user.
Go to the Upload menu. You now should see something like this:

![Importer first screen](res/images/importer_first_screen.png?raw=true, "importer")

To keep it simple, all you need to do is click the 'select a file' button, select your newly made EMX file, and press the next button until it starts importing. Don't worry about all the options you are skipping, we will handle those in the [upload guide](documentation/guide-upload). After your import is done, you can view your data in the data explorer. Go there by clicking the 'Data Explorer' link in the menu.

Congratulations! You have now deployed MOLGENIS either locally or on a server, and you have made the first steps on getting your data into the MOLGENIS database. Play around a bit with the different data explorer filters to get a feel on how MOLGENIS works.

Of course, simply uploading and showing data is not the only thing you can do with the MOLGENIS software. In the following MOLGENIS step-by-step section, we will take you from being a simple user, and teach you on how to be an expert.

# What is next?

## Download & install

You can download and install MOLGENIS for free. See [Download & Install guide](/download)

## Request cloud installation

We host MOLGENIS for our partners. Email m.a.swertz@rug.nl for more information.

## Become a MOLGENIS guru

You can use the [Documentation](../documentation) to become a MOLGENIS guru.
Or you can see whether you are interested in [MOLGENIS compute](../compute).    

