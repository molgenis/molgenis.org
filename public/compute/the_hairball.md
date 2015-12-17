## The Hairball
### Parameters
Parameters can be provided in text files, there are a couple of formats to choose from.

Say you want to specify the following four combinations of parameters:

|project |dir |sample |
|--------|----|-------|
|project1|dir1|sample1|
|project1|dir2|sample2|
|project1|dir2|sample3|
|project2|dir2|sample4|

We'll show how the following combination of parameters looks in each of the file formats.

#### Table format
This is an ordinary csv file with key names as headers on the first line.
The rest of the lines contain comma separated value combinations for those keys.

```
project, dir, sample
project1, dir1, sample1
project1, dir2, sample2
project1, dir2, sample3
project2, dir2, sample4
```

This is a normal CSV file so you'll need to surround the cell value with quotes in the csv format if you want to put a comma in the value.

#### Property format
This is a property file with key names as keys and comma separated value combinations for each key as a value.
All value lists must be the same size

```
project=project1,project1,project1,project2
dir=dir1,dir2,dir2,dir2
sample=sample1,sample2,sample3,sample4
```

This is parsed as a normal property file and the values are subsequently split on ,

#### List parameter values
A parameter value of the range format `i..j` will result in multiple rows, one for all values within the range.
So for example if you have provided (in any format) the parameter values

|project |value|
|--------|-----|
|project1|1..2 |
|project2|1..3 |

They will be expanded to

|project |value|
|--------|-----|
|project1|1    |
|project1|2    |
|project2|1    |
|project2|2    |
|project2|3    |

Similarly, a parameter value with a comma-separated list of values will result in multiple rows, one for all values in the list

So 

|project |dir |sample         |
|--------|----|---------------|
|project1|dir1|sample1        |
|project1|dir2|sample2,sample3|
|project2|dir2|sample4        |

Will be expanded to

|project |dir |sample |
|--------|----|-------|
|project1|dir1|sample1|
|project1|dir2|sample2|
|project1|dir2|sample3|
|project2|dir2|sample4|

#### Multiple files
You may specify multiple parameter files.
Each parameter may only be specified in one file.
The resulting list of parameters will be created by taking all possible combinations of parameter combinations from each file.

#### Simple example
Say we have the following parameter combinations:

|input|
|-----|
|hello|
|bye  |

and

|workflowName   |creationDate|
|---------------|------------|
|myFirstWorkflow|today       |

Then these will get combined to 

|input|workflowName   |creationDate|
|-----|---------------|------------|
|hello|myFirstWorkflow|today       |
|bye  |myFirstWorkflow|today       |

#### Example with three files

Say we have the following three files:

|input|
|-----|
|hello|
|bye  |

|sample |
|-------|
|sample1|
|sample2|

|workflowName   |creationDate|
|---------------|------------|
|myFirstWorkflow|today       |

Then these will get combined to 

|input|sample |workflowName   |creationDate|
|-----|-------|---------------|------------|
|hello|sample1|myFirstWorkflow|today       |
|hello|sample2|myFirstWorkflow|today       |
|bye  |sample1|myFirstWorkflow|today       |
|bye  |sample2|myFirstWorkflow|today       |

#### Collapsing (or Folding) the table of Parameter values
Say we have the following combinations:

|project |dir |sample |
|--------|----|-------|
|project1|dir1|sample1|
|project1|dir2|sample2|
|project1|dir2|sample3|
|project2|dir2|sample4|

Now if a particular step's protocol depends only on the value of parameter `project`, it only needs to be run twice, once for `project=project1` and once for `project=project2`.
So the table of parameter combinations can be collapsed to the much smaller table.

|project |
|--------|
|project1|
|project2|

If the step's protocol depends on parameters `project` and `dir`, three instances for the step need to be created, collapsing the table as follows:

|project |dir |
|--------|----|
|project1|dir1|
|project1|dir2|
|project2|dir2|

The step need not be run for the combination `project=project1, dir=dir2`, since no parameter combinations exits with those values.

#### environment files
Data is shared between steps using env files.
Those contain entries of the shape `name[index]=value`

At generation time, compute generates `user.env` which contains all inputs for all steps that are known at generation time.

At runtime, the steps may create files named *stepname*_*stepindex*.env. So for example `step1_0.sh` creates `step1_0.env`.

#### Weaving
Parameters which are known beforehand can also be **weaved** directly into the protocols (if 'weave' flag is set in command-line options). In our example, two shell scripts are generated for 
the 'step1'. The weaved version of generated files are shown below.

step1_0.sh:
```bash
  #string in
  #output out
  # Let's do something with string 'in'
  echo "hello_hasBeenInStep1"
  out=hello_hasBeenInStep1
```

and step1_1.sh
```bash
  #string in
  #output out
  # Let's do something with string 'in'
  echo "bye_hasBeenInStep1"
  out=bye_hasBeenInStep1
```

The output values of the first steps are not known beforehand, so, 'string' cannot be weaved and will stay in the generated for the 'step2' script as it was. However, the 'wf' and 'date' values are weaved.

step2_0.sh:
```bash
  #string wf
  #string date
  #list strings
  echo "Workflow name: myFirstWorkflow"
  echo "Created: today"
  echo "Result of step1.sh:"
  for s in "${strings[@]}"
  do
      echo ${s}
  done
```

If values can be known, the script will have the following content 

step2_0.sh with all known values:
```bash
  #string wf
  #string date
  #list strings
  echo "Workflow name: myFirstWorkflow"
  echo "Created: today"
  echo "Result of step1.sh:"
  for s in "hello" "bye"
  do
      echo ${s}
  done
```

If 'weaved' flag is not set, +step1_0.sh+ file, for example looks as follows:
```bash
  # Connect parameters to environment
  input="bye"
  #string input
  # Let's do something with string 'in'
  echo "${input}_hasBeenInStep1"
  out=${input}_hasBeenInStep1
```

In this way, users can choose how generated files look like.
In the current implementation, values are first taken from parameter files. If they are not present, then compute looks,
if these values can be known at run-time, by analysing all previous steps of the protocol, where values are unknown.
If values cannot be known at run-time, compute will give a generation error. 

### Protocol headers
#### List and String
Each Protocol lists its Inputs in the header
The ``


#### MOLGENIS header

#### Parameter mapping


### Templates
#### Freemarker
#### Header and footer
#### Submit.sh
#### Backends

### molgenis-compute.sh
#### cleanen
#### Parameters overriden

### Github workflows

