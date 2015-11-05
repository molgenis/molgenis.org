## Data explorer

One of the central plugins for many of the MOLGENIS databases is the data explorer, as the name suggests this is the pluginh to use if you wish to take a closer look at the data.

Note that some of the compoments described below are only shown to people with the appropriate permissions.

### description of the different components on the screen:
On the top of the data explorer the name of the currently selected entity is shown as well as the description.

At the right side at the top a dropdown is shown which can be used to select the entity you wish to display.
Right of the entity select a delete button is shown, clicking it will allow you to choose if you which to delete theonly the data or also the metadata for the currently selected entity.
  
![Dataexplorer entity select](images/dataexplorer/entitySelect.png?raw=true, "dataexplorer/entitySelect")

In the upper left corner of the data explorer is a search box, this search box can be used to search all your data for a certein search term.
  
![Dataexplorer search](images/dataexplorer/searchbox.png?raw=true, "dataexplorer/searchbox")

Directly below the search box the currently active attribute filters are shown. By clicking on them they can be edited. The cross trailing every filter can be used to delete this filter. Filters can be set from the attribute selection tree which is described below.
Using the checkbox in front of each attribute the visibilty of this attribute in the table can be managed. This filter icon can be used to set filters for this specific attribute.
  
![Dataexplorer active filters](images/dataexplorer/active_filters.png?raw=true, "dataexplorer/active_filters")

In the area with the active filters you will also find the button to open the filter wizard, this is a popup screen that allows you to add filters for different attributes in one go.

![Dataexplorer filter wizard](images/dataexplorer/filterwizard.png?raw=true, "dataexplorer/filterwizard")

## mods
    
![Dataexplorer tabs](images/dataexplorer/dataexplorer_tabs.png?raw=true, "dataexplorer/dataexplorer_tabs")

The data explorer consists of multiple modules to view or process the data in different ways. These modules are described below:

### Data mod
The data mod shows the data in a table, the table can be sorted by clicking on the headers.
If your data contains references to other entities, an icon is shown to expand this reference to show the data from the referenced entity.

Every line starts, depening on your permissions with some action icons:
  
![Dataexplorer action buttons](images/dataexplorer/action_buttons.png?raw=true, "dataexplorer/action_buttons")

- add row:
Using this button will open a popup with inputs for all the attributes in the entity, allowing you to create a new entity.
- Edit row:
Same as the add row button, but with prefilled inputs to allow you to edit an entity.
- inspect row:
This button will open a popup with a custom made report for this row. Different reports can be created at runtime by a admin.
- delete row:
This button can be used to remove a row from the entity.

  
![Dataexplorer download](images/dataexplorer/download_export.png?raw=true, "dataexplorer/download_export")

At the bottom of the table there is a download button, which will allow you to safe the data to a CSV of XLS file. Depending on the purpose of the download, id's or labels can be used as column headers.
Another button will allow you to send your data to a [galaxy](https://galaxyproject.org/ "galaxy") server.


#### genome browser
  
![Dataexplorer first screen](images/dataexplorer/genome_browser.png?raw=true, "dataexplorer/genome_browser")

When a selected entity has chromosome and position attribute the genome browser will be shown. The browser used by MOLGENIS is the [Dalliance](http://www.biodalliance.org "Dalliance") genome browser.
Clicking on a row in the data table will make the genome browser zoom to the coordinates of that row.
A button ('apply filters') is available at the bottom of the genome browser to filter the data table based on the coordinates currently in shown in the genome browser.


#### try it out
#####Data exploration
upload the [vcf_example_file](/data/Documentation_VCF.vcf "vcf example file") using the importer.
Lets select a entity containing genomic variants by selecting the entityname you just chose for the upload in the entity select.
Let's assume we have a specific location we are interested in say position 103214569 at chromosome 7, so we'd like to search for that specific line in the entity.
Let's first use the search box to see if we can find the line that way:

But now we like to take a look at all variantion on chromosome 7, as you can imagine searching for "7" in all the attributes in the data will give us a lot of results we are not looking for. So we'd like to filter for this value specifically for the chromosome attribute.

Click the filter icon in front of "#CHROM" in te attribute selection tree and enter "8" in the input field than click "apply"
However we meant to search for chromosome 7, so lets click the filter in the active filters box, and change the value to 7.
We now have all the values for chromosome 7 in the table, however the results are devided over several pages of results, we'd like to view them all in one screen; click the "rows per page" dropdown below the table and select "100" this will show 100 results per page.
The "FILTER" column shows the dame value for every line, we are not interested in this column so let's hide it by clicking the checkbox in front of "#CHROM" in the attribute selection tree.

Click any header in the table to sort the data based on that column, click again to sort in the other direction.
Click one of the lines in the data table to zoom to the position of this variant in the genome browser.
Click the symbol in front of the "SAMPLES" column header to show the columns belonging to the samples.

Click the magnifing glass in front of the dataline to show a report for that line. The default report is just showing all attribute values in a structured way. However as stated above all kinds of reports can be added at runtime by an admin.

#####Data manipulation

Click the edit icon and change the chromosome from 7 to 8 and save.
Adding a row works the same way, only without the prefilled fields.
Now lets click the red garbage bin icon in front of a line to delete this line from the entity.

### Annotation mod

The anotator mod of the data explorer is the user interface to use the MOLGENIS annotator framework, which can also be used as a standalone commandline jar.
The annotator framework is a system to add data from other resources to your entities. For example pathognicity prediction, allele frequencies and phenotype information.

![Dataexplorer annotators](images/dataexplorer/annotators.png?raw=true, "dataexplorer/annotators")

The screen shows a list of available annotators that can be used. Clicking the title of the annotator will result in a popup with additional information such as a general description and a listing of the attributes that will be added by this annotator.
Using the checkboxes multiple annotaotrs can be selected for one run, which is starten by clicking the "annotate" button. If preferred a copy of the dataset can be created with the annotations added to this copy, leaving the original entity as it is.
Annotated fields will be added to the entity in a compound attribute.

On the right hand side of the screen a list of unavailable annotators is shows, the reason why they are unavailable is shown in the list, this can for example be due to a resource being unavailble or an atrribute needed to map the entity and resource to each other missing.
The gear icon trailing every annotator in the list can be used to configure the settings for this annotator.

### Aggregation mod

The aggregation mod allows users to produce counts for queries on the data.

The screen has 2 area's the controls and the results, the controls allow you to choose the attributes you wish to use for the aggregation.

![Dataexplorer aggregates](images/dataexplorer/aggregate_controls.png?raw=true, "dataexplorer/aggregates")

You can select 1 attribute for simple one dimensional counts, represented as a table with one column, or two attributes to get a 2 dimensional aggregate table.
A third dropdown allows you to select a attribute that has to be distinct within the results.

![Dataexplorer aggregate results](images/dataexplorer/aggregate_result_table.png?raw=true, "dataexplorer/aggregateresults")

These functionalities are best explained by the example in the "try it out section below".

#### try it out
Upload [emx_example_file](/data/Documentation_EMX.xlsx "EMX example file") throught the importer.
Navigate to the data explorer and select the aggregates tab. Select the just uploaded "biobanks" entity.

Now select "patientid" in the entity dropdown.
You now get an 1 dimensional list of counts, showing you that every patient has 3 entries in the selected entity

Now select "biobank" in the first aggregate dropdown and in the second select "sampletype"
You now get a table representing the amount of samples in both biobanks per type.

finally select "patientid" in the third dropdown, the distinct attribute. 
The table will update to show you for how many patients the sample of a specific type are available in a biobank.

### Charts mod
TODO: highcharts 
[Highcharts](http://www.highcharts.com "Highcharts")

MOLGENIS currently offers two types of plots for your data, the scatter plot and the boxplot.
![Dataexplorer charts](images/dataexplorer/charts.png?raw=true, "dataexplorer/charts")

#### scatter plot [Scatter_plot](https://en.wikipedia.org/wiki/Scatter_plot "Scatter plot")
![Dataexplorer charts create scatterplot](images/dataexplorer/aggregate_result_table.png?raw=true, "dataexplorer/scatterplot")

For the scatterplot 2 attributes are selected to make the plot, optionally a third attribute can be selected to split the dots in groups using different shapes and colours per group. Optionally you can provide a title for your plot.

![Dataexplorer charts scatterplot](images/dataexplorer/scatter plot.png?raw=true, "dataexplorer/scatterplot")

#### box plot [Box_plot](https://en.wikipedia.org/wiki/Box_plot "Box plot")

![Dataexplorer aggregate create boxplot](images/dataexplorer/create box plot.png?raw=true, "dataexplorer/createboxplot")

For the boxplot 1 attribute (feature) is to be selected to make the plot, optionally a second attribute can be selected to split the dots in groups. Optionally you can provide a title for your plot.

![Dataexplorer charts boxplot](images/dataexplorer/boxplot.png?raw=true, "dataexplorer/boxplot")



