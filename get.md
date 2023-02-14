---
title: GET MOLGENIS
intro: MOLGENIS is open source and free to download, install and use. There are also hosting services if you don't want to install and maintain yourself.
layout: blue
---

# Data platform

MOLGENIS original product is its FAIR data platform. You can freely copy and install MOLGENIS data platform on your own machines (Licence: LGPLv3). 

The actively developed MOLGENIS is codenamed 'exm2' and you can see [Releases](https://github.com/molgenis/molgenis-emx2/releases) here. It is easier to install as compared to previous version, see README at https://github.com/molgenis/molgenis-emx2. This package also includes pre-packaged the 'catalogue', FAIR genomes and beacon v2 tools.

The previous generation of MOLGENIS is still in maintances and you can see [Releases](https://github.com/molgenis/molgenis/releases) for overview of versions. 

There are also organisations who can host MOLGENIS for you and provide data management support. And programmers can take MOLGENIS code and customize it. Each option is described below.

# Analysis tools

In addition to the data platform quite a range of additional tools have emerged>

*** DataSHIELD armadillo ***
For federated analysis using the DataSHIELD protocol we have Armadillo. This can be found here https://github.com/molgenis/molgenis-service-armadillo

*** Variant interpretation pipeline (VIP) ***
For NGS DNA variant analysis we have the VIP toolbox. This can be found here https://github.com/molgenis/vip

*** CAPICE ***
CAPICE is a modern machine learning based variant pathogenicity classifiction predictor for DNA variants. See https://github.com/molgenis/capice

*** NGS_DNA pipeline ***
NGS_DNA is a NGS DNA best practice pipeline for Illumina sequencing - alignment, variant calling, annotation and QC. See https://github.com/molgenis/NGS_DNA

*** Compute ***
Compute is a simple workflow management framework for generating/submitting/monitoring Bash scripts on compute clusters managed by schedulers. eSee https://github.com/molgenis/molgenis-compute

*** TRE/Sandbox for HPC ***
For setting up trusted research environments for large genome analysis projects (such as Solve-RD) we operate HPC clusters on OpenStack, in close collaboration with University of Groningen center for information technology. See https://docs.gcc.rug.nl/


# Hosting and support
Our team provide MOLGENIS hosting as a service. Please contact us for details and costs regarding tailored support:

**Genomics Coordination Center (GCC)**  
University Medical Center Groningen  
email: <molgenis-support@umcg.nl>  


# Install on server for multiple users and data persistence

If our hosting solution is not suitable and you want to host your own molgenis instance in your own cloud or on your own premise. Please take a look at our [ansible galaxy repo](https://galaxy.ansible.com/molgenis) where the setup and requirements are explained.

# Install locally for single user testing with Docker (experimental)

For local testing purposes we provide a Docker image.  Get [Docker Images](https://github.com/molgenis/docker)

# For programmers
The complete source code of MOLGENIS is open source available at [Github](http://github.com/molgenis/molgenis)

You can find developer documentation as part of the [Manual](https://molgenis.gitbook.io/molgenis/)

We are always happy to hear about your experience with MOLGENIS and suggestions for improvement. Please, help us to improve MOLGENIS and send your feedback and ideas to our 'product owner': <a href="mailto:m.a.swertz@gmail.com">m.a.swertz@gmail.com</a>
