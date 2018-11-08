---
title: GET MOLGENIS
intro: MOLGENIS is an open source platform that is available for everybody. We have hosting services and self-hosting options for getting access to and using MOLGENIS, depending on your wishes and needs. And all software is open source so programmers can check-out all code and start from there.
layout: blue
---


# Hosting and support
You can get MOLGENIS ready to use from two hosting providers. They can also provide support with entering and managing your data. Please contact one of the support groups below for details and costs.

**Genomics Coordination Center**  
University Medical Center Groningen  
email: <molgenis-support@umcg.nl>

**TraIT service desk, TraIT foundation**   
Lygature, Utrecht  
website: <http://www.ctmm-trait.nl/service-desk/>

# Download and install yourself
You can also install MOLGENIS on your own machines (Licence: LGPLv3). See [Releases](https://github.com/molgenis/molgenis/releases) for overview of versions.

## Install on Linux

To install on Linux you need
* MOLGENIS 'WAR' file (Choose download WAR [here](https://search.maven.org/search?q=g:org.molgenis%20AND%20a:molgenis-app here))
* Java Platform (JDK)
* Apache Tomcat
* PostgreSQL
* Elasticsearch
* Optional: OpenCPU (enables R scripting feature)
* Optional: Python (enables Python scripting feature)
See for details on versions used the [Manual](https://molgenis.gitbooks.io/molgenis/content/quickstart/guide-tomcat.html).

## Install using Docker (experimental)

For testing purposes we now use Docker. We have the ambition to also use it for production but then you need to configure data persistence. However feel free to use our docker as a starting point. Get [Docker Images](https://github.com/molgenis/docker)

# For programmers
The complete source code of MOLGENIS is open source available at [Github](http://github.com/molgenis/molgenis)

You can find developer documentation as part of the [Manual](https://molgenis.gitbooks.io)

We are always happy to hear about your experience with MOLGENIS and suggestions for improvement. Please, help us to improve MOLGENIS and send your feedback and ideas to our 'product owner': <a href="mailto:m.a.swertz@gmail.com">m.a.swertz@gmail.com</a>
