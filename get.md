---
title: GET MOLGENIS
intro: MOLGENIS is open source and free to download, install and use. There are also hosting services if you don't want to install yourself.
layout: blue
---

You can freely copy and install MOLGENIS on your own machines (Licence: LGPLv3). See [Releases](https://github.com/molgenis/molgenis/releases) for overview of versions. There are also organisations who can host MOLGENIS for you and provide data management support. And programmers can take MOLGENIS code and customize it. Each option is described below:

# Hosting and support
At least two hosting organisations provide MOLGENIS hosting as a service. E.g. for 200 euro/month UMCG hosts 1 MOLGENIS servers and for 250 euro/month 3 MOLGENIS servers. This includes basic data management support with functional application management. In addition, hosting providers can deliver support on a tailor made basis. Please contact one of the support groups below for details and costs regarding tailored support.

**Genomics Coordination Center**  
University Medical Center Groningen  
email: <molgenis-support@umcg.nl>
Example service agreement: [here](/attachments/MOLGENIS_DVO_annex4_20201120.pdf)
Acceptable Use policy: [here](/attachements/MOLGENIS_AUP.pdf)

**TraIT service desk, TraIT foundation**   
Lygature, Utrecht  
website: <http://www.ctmm-trait.nl/service-desk/>


# Install on Linux

To install on Linux you need
* MOLGENIS 'WAR' file (Choose download WAR [here](https://search.maven.org/search?q=g:org.molgenis%20AND%20a:molgenis-app here))
* Java Platform (JDK)
* Apache Tomcat
* PostgreSQL
* Elasticsearch
* Optional: OpenCPU (enables R scripting feature)
* Optional: Python (enables Python scripting feature)
See for details on versions used the [Manual](https://molgenis.gitbook.io/molgenis/quickstart/guide-tomcat.html).

# Install using Docker (experimental)

For testing purposes we now use Docker. We have the ambition to also use it for production but then you need to configure data persistence. However feel free to use our docker as a starting point. Get [Docker Images](https://github.com/molgenis/docker)

# For programmers
The complete source code of MOLGENIS is open source available at [Github](http://github.com/molgenis/molgenis)

You can find developer documentation as part of the [Manual](https://molgenis.gitbook.io/molgenis/)

We are always happy to hear about your experience with MOLGENIS and suggestions for improvement. Please, help us to improve MOLGENIS and send your feedback and ideas to our 'product owner': <a href="mailto:m.a.swertz@gmail.com">m.a.swertz@gmail.com</a>
