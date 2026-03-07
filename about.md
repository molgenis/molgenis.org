---
title: About
intro: MOLGENIS consists of a team of over 30 developers, researchers and data managers that develop, support and continuously improve the software and 
  services. 
  Furthermore we 
  have a large community of international and national partners supporting the infrastructure.
layout: blue
excerpt: "About MOLGENIS: history, team, governance, and partnerships of the open-source scientific data platform."
---

The MOLGENIS teams enable new software development, hosting, (data management) support and advice. In addition we coordinate a wider community of users, sponsors and enthusiasts. We look forward to hear about your experiences with MOLGENIS and suggestions for improvement. Please help us to improve MOLGENIS and send your feedback and ideas to: <a href="mailto:support@molgenis.org">support@molgenis.org</a>. You can also post your ideas open source at [GitHub](https://github.com/molgenis/).

<img class="team-photo" src="/images/team_2025.jpg" alt="Molgenis team photo 2025"/>

## History
MOLGENIS was created in 2002 as an open source software that was configurable to be quickly adapted to new research needs (i.e. [microarray experiments](https://pubmed.ncbi.nlm.nih.gov/15059831/)). 
It therefore was created with a blueprint system, so users can quickly configure what they need, and then
MOLGENIS quickly generates tools to manage and query those data (e.g. [Nature Reviews Genetics](https://pubmed.ncbi.nlm.nih.gov/17297480/)). Now,
MOLGENIS has become an infrastructure of tools, services, expertise, and their partner communities, sustaining the whole ecosystem for over two decades.

## Coordination
MOLGENIS is currently coordinated by [Prof.Dr. Morris Swertz](http://www.rug.nl/staff/m.a.swertz) of the Genomics Coordination 
Center ([GCC](https://umcgresearch.org/w/gcc)), 
kindly hosted by the Department of 
Genetics of the University Medical Center Groningen. Please contact at: <a href="mailto:support@molgenis.org">support@molgenis.org</a>. MOLGENIS is funded 
by a large range of public projects from various academic sponsors (see [Partners](/partners.html)).

### Governance
MOLGENIS development is strategically guided by a large list of academic partner projects, the PIs of which provide solicited and unsolicited scientific and strategic advice. Also, they highlight critical issues and emerging global trends in academia where MOLGENIS could fill a gap or meet a need and help the MOLGENIS team to push forward FAIR data and FAIR data stewardship in a national and international context, in particular in human data research, biobanking and rare disease. 

### User groups
In addition to strategic advice MOLGENIS also has several user communities guiding its development. These groups are managed by the respective communities, and often change dynamically following changes in funded project. For example, there is a Dutch biobank user group and a European directory user forum. We plan to expand these user engagement activities to ensure optimal allocation of the limited development resources.

## Partners

MOLGENIS is co-developed, used and funded by UMCG and the following partnerships:

{% assign sorted_partners_by_start = site.partners | sort: "start" | reverse %}
<ul>
{% for item in sorted_partners_by_start %}
<li><a href="/partners.html#{{ item.name | strip | slugify }}">{{item.start}} - {{item.end}}: {{item.name}} {% if item.funding %} ({{item.funding}}) {% endif %}
</a></li>
{% endfor %}
</ul>

In addition we greatly thank in-kind contribution from several commercial parties:
* IntelliJ, for software development

## Publications

Publications by MOLGENIS community members:

### Sample and data catalogues:
* Swertz et al (2022) Towards an Interoperable Ecosystem of Research Cohort and Real-world Data Catalogues Enabling Multi-center Studies. [Yearb Med Inform](https://pubmed.ncbi.nlm.nih.gov/36463884/)
* Holub et al (2016) BBMRI-ERIC Directory: 515 Biobanks with Over 60 Million Biological Samples. [Biopreservation and Biobanking](https://www.ncbi.nlm.nih.gov/pubmed/27936342)
* Roxana Merino-Martinez et al (2016) Toward Global Biobank Integration by Implementation of the Minimum Information About BIobank Data Sharing (MIABIS 2.0 Core). [Biopreservation and Biobanking](https://www.ncbi.nlm.nih.gov/pubmed/26977825)

### FAIRification:
* Van der Velde et al (2022) FAIR Genomes metadata schema promoting Next Generation Sequencing data reuse in Dutch healthcare and research. [Sci Data](https://pubmed.ncbi.nlm.nih.gov/35418585/)
* Wilkinson et al (2016) The FAIR Guiding Principles for scientific data management and stewardship. [Scientific Data](https://www.ncbi.nlm.nih.gov/pubmed/26978244)
* Lancaster et al (2015) Cafe Variome: general-purpose software for making genotype-phenotype data discoverable in restricted or open access contexts. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/26224250)

### Harmonisation:
* Pang et al (2017) BiobankUniverse: automatic matchmaking between datasets for biobank data discovery and integration. [Bioinformatics](https://www.ncbi.nlm.nih.gov/pubmed/29036577)
* Pang et al (2016) MOLGENIS/connect: a system for semi-automatic integration of heterogeneous phenotype data with applications in biobanks. [Bioinformatics](https://www.ncbi.nlm.nih.gov/pubmed/27153686)
* Pang et al (2015) BiobankConnect: software to rapidly connect data elements for pooled analysis across biobanks using ontological and lexical indexing. [Journal of the Medical Informatics Association](https://www.ncbi.nlm.nih.gov/pubmed/25361575)
* Pang et al (2015) SORTA: a system for ontology-based re-coding and technical annotation of biomedical phenotype data. [Database(Oxford)](https://www.ncbi.nlm.nih.gov/pubmed/26385205)

### Large research projects and studies:
* Van der Velde et al (2018) MOLGENIS Research: Advanced bioinformatics data software for non-bioinformaticians. [Bioinformatics](https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/bty742/5085379)
* Li et al (2016) A Functional Genomics Approach to Understand Variation in Cytokine Production in Humans. [Cell](https://www.ncbi.nlm.nih.gov/pubmed/27814507)
* Netea et al (2016) Understanding human immune function using the resources from the Human Functional Genomics Project. [Nature Medicine](https://www.ncbi.nlm.nih.gov/pubmed/27490433)
* Snoek et al (2013) WormQTL--public archive and analysis web portal for natural variation data in Caenorhabditis spp. [Nucleic Acids Research](https://www.ncbi.nlm.nih.gov/pubmed/23180786)

### Patient and mutation registries:
* Van den Akker et al (2011) The international dystrophic epidermolysis bullosa patient registry: an online database of dystrophic epidermolysis bullosa patients and their COL7A1 mutations. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/21681854)
* Lazarinne et al (2015) The ARVD/C genetic variants database: 2014 update. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/25676813)
* Van der Velde et al (2013) An overview and online registry of microvillus inclusion disease patients and their MYO5B mutations. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/24014347)
* Janssen et al (2012) Mutation update on the CHD7 gene involved in CHARGE syndrome. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/22461308)

### Rare disease genome knowledge systems:
* Van der Velde (2017) GAVIN: Gene-Aware Variant INterpretation for medical sequencing. [Genome Biology](https://www.ncbi.nlm.nih.gov/pubmed/28093075)
* Van Gijn et al (2018) New workflow for classification of genetic variants' pathogenicity applied to hereditary recurrent fevers by the International Study Group for Systemic Autoinflammatory Diseases (INSAID). [Journal of Medical Genetics](https://www.ncbi.nlm.nih.gov/pubmed/29599418)
* Engwerda et al (2018) The phenotypic spectrum of proximal 6q deletions based on a large cohort derived from social media and literature reports. [European Journal of Human Genetics](https://www.ncbi.nlm.nih.gov/pubmed/29904178)
* Sikkema-Raddatz et al (2016) NIPTRIC: an online tool for clinical interpretation of non-invasive prenatal testing (NIPT) results. [Science reports](https://www.ncbi.nlm.nih.gov/pubmed/27917919)

### Genotype processing:
* Kanterakis et al (2015) Molgenis-impute: imputation pipeline in a box. [BMC Research Notes](https://www.ncbi.nlm.nih.gov/pubmed/26286716)
* Deelen et al (2015) Calling genotypes from public RNA-sequencing data enables identification of genetic variants that affect gene-expression levels. [Genome Medicine](https://www.ncbi.nlm.nih.gov/pubmed/25954321)
* Johanson et al (2016) CoNVaDING: Single Exon Variation Detection in Targeted NGS Data. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/26864275)
* Deelen et al (2014) Genotype harmonizer: automatic strand alignment and format conversion for genotype data integration. [BMC Research Notes](https://www.ncbi.nlm.nih.gov/pubmed/25495213)
