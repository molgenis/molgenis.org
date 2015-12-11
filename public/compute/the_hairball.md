## The Hairball
### Parameters
#### Multiple files
#### i..j
#### Collapsing (a.k.a. Folding)
#### Weaving
Parameters, which are known before hand can be connected to the environment file or weaved directly in the protocols (if 'weave' flag is set in command-line options). In our example, two shell scripts are generated for 
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


#### env files
#### Parameter mapping

### Protocol headers
#### List and String
#### MOLGENIS header

### Templates
#### Freemarker
#### Header and footer
#### Submit.sh
#### Backends

### molgenis-compute.sh
#### cleanen
#### Parameters overriden

### Github workflows

