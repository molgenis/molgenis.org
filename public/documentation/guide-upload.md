**
In this section you will learn how to upload you data. Let us not wait any longer! After a quick re-cap of terminology and formats we will start off with the most basic step, importing your data.
**

# Terminology
In this section we introduce and explain, terminology of MOLGENIS


* Package: A namespace item. Multiple packages can create a namspace where entities can live in. The default namespace in molgenis is called "default"
* Data set: A collections of entities that are contextually related. 
* Entity: An entity is the template and collection of a subject like a table in a database.
* Entity: We also use the term entity for the actual data that is collected based on the template from an entity (Term above), like a row in a database. In the future we will change this term to "instance" to avoid complexity and double use of the same term
* Attribute: An attribute describes the charcteristics of a data item in an entity, Like a column in a database

# Formats
The MOLGENIS upload module supports the following file formats and data:
	
|file format		|file extention             |data formats     |
|-------------------|---------------------------|-----------------|
|CSV              	|".csv" ".txt" ".tsv" ".zip"|EMX              |
|Excel            	|".xls" ".xlsx"             |EMX              |
|OWL              	|".owl.zip"                 |OWL              |
|VCF (version 4.0)	|"vcf" ".vcf.gz"            |VCF (version 4.0)|

Abbreviations:

* CSV: Comma Separated Value
* OWL: Web Ontology Language
* VCF: Variant Call Format
* EMX: Entity Model eXtensible

# Overview
The upload module is the place in MOLGENIS where you can upload your data into the MOLGENIS application. If you have the permissions, you will see the upload menu item.

![Upload menu item](/res/images/upload/upload-menu-item.png?raw=true, "upload menu item")

The different pages will be explained by uploading the<a name="advanced-data-example"></a> "Advanced data example" ([download](/data/advanced_data_example_v20151104.xlsx)) example data set.

The steps are: 

1. Upload file
2. Options
3. Packages
4. Validation
5. Result

Navigation buttons at the bottom of the pages:

* Previous: Go to the previous page.
* Next: Go to the next page.
* Restart: Push this button when you want to start importing a new data set. It will redirect you to the start of this wizard. Pushing this button will restart the wizard. The upload job continues to upload the data set.
* Finish: The same as Restart.

# Upload file

1. Select a file to upload.
2. Click on the next button.

![Upload file screen](/res/images/upload/upload-file-screen.png?raw=true, "Upload file")

# Choose options
Select a data upload option. On this page you can select the rules of how to upload your data into MOLGENIS. Because this dataset is an new data set to the application we leave the default option "Add entities" selected. In tabular data sets, the term entities refers to data-rows.
It is important to understand that this selection is about the data and not the meta data of the data set. 

Choose options:
* Add entities: Importer adds new entities or fails if entity exists.
* Add entities / update existing: Importer adds new entities or updates existing entities.
* Update entities: Importer updates existing entities or fails if entity does not exist.


![Upload file screen](/res/images/upload/options-screen.png?raw=true, "Options")

# Choose packages
Because the entity (table) persons has no package defined, we get the option to choose another package different from the MOLGENIS default package. The select options list the available packages in the data set.

![Upload file screen](/res/images/upload/packages-screen.png?raw=true, "Packages")

# Check validation
When you see this page the validation is already done. This page validates the structure of the meta data.

"Entities" table where all the entities (tables) are defined.

* Name: Name of entity
* Importable: Is this entity inportable or not. Two options (Yes, No) 

"Entity fields" table that will contain information about the fields of an entity (Columns of the table)

* Name: Name of entity
* Detected: A comma separated list of fields that were found for this entity
* Required: Are there required fields defined in the meta data that are missing in the entity?
* Available: Are there fields in the meta data that are optionel and were not found in the entity?
* Unknown: Are there fields defined in the entity that were undefined in the meta data?

![Upload file screen](/res/images/upload/validation-screen.png?raw=true, "Validation")

# Review results

When this page is shown with the "import succes" message, then you know that your data and metadata have been uploaded correctly.

After the data is uploaded into MOLGENIS, you can change the permissions for the entities.

In the permissions view you can do this repeatedely for multiple groups:

1. Select a group: which user group will get these permissions.
2. Select permission for an entity (table). You can choose between: Edit, View, Count and None. For more information about permissions visit the [Admin guide](guide-admin)

![Upload file screen](/res/images/upload/result-screen.png?raw=true, "Result")

# What next?

To learn more you could read the [EMX reference](ref-emx).
Alternatively directly move on to [explore your data](guide-explore)
