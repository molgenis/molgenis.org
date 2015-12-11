#First contact
##What is MOLGENIS Compute?
MOLGENIS Compute is a tool to generate shell script files for big data workflows that can run in parallel on clusters and grids.

The code is open source and hosted on GitHub.
http://github.com/molgenis/molgenis-compute

The software is licensed under the LGPL license.
#The Black Triangle

## Download
You can download the [latest version of MOLGENIS Compute](https://github.com/molgenis/molgenis-compute/releases) from GitHub.

## Domain model
In MOLGENIS Compute, Data is processed using a Workflow that consists of a series of Steps that depend on each other. Each Step follows a Protocol, which is a parameterized template for the shell script for that Step.

In Molgenis Compute, anything can be a parameter.

* the name of a working directory
* the version number for a tool to use
* the name of a sample to analyze
* the amount of memory allocated for a cluster job
* the name of a report to produce

You can specify parameter values at generation time in parameter files.
In fact, for some parameters you may want to specify multiple values for some parameters.

## Trying it out
### Create a workflow
We assume you have downloaded and unzipped molgenis compute commandline and are now in the directory containing the unzipped files.

You can generate a template for a new workflow using the command:

```bash
  sh molgenis_compute.sh --create myfirst_workflow
```

This will create a new directory for the workflow:

```bash
  cd myfirst_workflow
  ls
```

The directory contains a typical Molgenis Compute workflow structure

file | description
---------|----
`/protocols` |  folder with bash script Protocols
`/protocols/step1.sh` | Shell script template for the first protocol
`/protocols/step2.sh` | Shell script template for the second protocol
`workflow.csv` | file listing steps and parameter flow
`workflow.defaults.csv` | default parameters for workflow.csv (optional)
`parameters.csv` | parameters you want to run analysis on
`header.ftl` | user extra script header (optional)
`footer.ftl` | user extra script footer (optional)

### Steps
Take a look at `workflow.csv` generated workflow

step|protocol|dependencies
----|--------|----------
step1|protocols/step1.sh|in=input
step2|protocols/step2.sh|wf=workflowName;date=creationDate;strings=step1.out

![image](../res/images/compute/Workflow.png?raw=true,"The workflow")

The workflow consists of two steps, `step1` and `step2`.

`step1` has protocol `protocols/step1.sh`, `step2` has protocol `protocols/step2.sh`

### Protocols
Let's take a look at one of the protocol templates.
Open `protocols/step1.sh`

```FreeMarker
#string in
#output out

# Let's do something with string 'in'
echo "${in}_hasBeenInStep1"
out=${in}_hasBeenInStep1
```

In the header of the template file, the input parameter `in` and output value `out` are declared.

When generating the job scripts for step 1, the value for the input parameter `in` will be filled in where `${in}` is written.

### Generate

### Run it




