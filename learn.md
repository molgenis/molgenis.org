---
title: Learn
intro: Read more about MOLGENIS in manuals, news items and publications.
layout: blue
---
# Documentation
Here you can find documentation:

 * [MOLGENIS Data Platform manual](https://molgenis.gitbooks.io/molgenis/content/)
 * [MOLGENIS Computer Platform manual](https://molgenis.gitbooks.io/molgenis-pipelines/content/)

# News archive
Here you can find all news items:

<ul>
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a><small> <i>Posted {{ post.date | date: '%A, %B %d, %Y'}}</i></small></li>
{% endfor %}
</ul>

# Publications
Relevant publications by MOLGENIS community members:

## Sample and data catalogues:
* Holub et al (2016) BBMRI-ERIC Directory: 515 Biobanks with Over 60 Million Biological Samples. [Biopreservation and Biobanking](https://www.ncbi.nlm.nih.gov/pubmed/27936342)
* Roxana Merino-Martinez et al (2016) Toward Global Biobank Integration by Implementation of the Minimum Information About BIobank Data Sharing (MIABIS 2.0 Core). [Biopreservation and Biobanking](https://www.ncbi.nlm.nih.gov/pubmed/26977825)

## Harmonization / FAIRification:
* Pang et al (2017) BiobankUniverse: automatic matchmaking between datasets for biobank data discovery and integration. [Bioinformatics](https://www.ncbi.nlm.nih.gov/pubmed/29036577)
* Wilkinson et al (2016) The FAIR Guiding Principles for scientific data management and stewardship. [Scientific Data](https://www.ncbi.nlm.nih.gov/pubmed/26978244)
* Pang et al (2016) MOLGENIS/connect: a system for semi-automatic integration of heterogeneous phenotype data with applications in biobanks. [Bioinformatics](https://www.ncbi.nlm.nih.gov/pubmed/27153686)
* Pang et al (2015) BiobankConnect: software to rapidly connect data elements for pooled analysis across biobanks using ontological and lexical indexing. [Journal of the Medical Informatics Association](https://www.ncbi.nlm.nih.gov/pubmed/25361575)
* Pang et al (2015,)SORTA: a system for ontology-based re-coding and technical annotation of biomedical phenotype data. [Database(Oxford)](https://www.ncbi.nlm.nih.gov/pubmed/26385205)
* Lancaster et al (2015) Cafe Variome: general-purpose software for making genotype-phenotype data discoverable in restricted or open access contexts. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/26224250)

## Large research projects and studies:
* Van der Velde et al (2018) MOLGENIS Research: Advanced bioinformatics data software for non-bioinformaticians. [Bioinformatics](https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/bty742/5085379)
* Li et al (2016) A Functional Genomics Approach to Understand Variation in Cytokine Production in Humans. [Cell](https://www.ncbi.nlm.nih.gov/pubmed/27814507)
* Netea et al (2016) Understanding human immune function using the resources from the Human Functional Genomics Project. [Nature Medicine](https://www.ncbi.nlm.nih.gov/pubmed/27490433)
* Snoek et al (2013) WormQTL--public archive and analysis web portal for natural variation data in Caenorhabditis spp. [Nucleic Acids Research](https://www.ncbi.nlm.nih.gov/pubmed/23180786)

## Patient and mutation registries:
* Van den Akker et al (2011) The international dystrophic epidermolysis bullosa patient registry: an online database of dystrophic epidermolysis bullosa patients and their COL7A1 mutations. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/21681854)
* Lazarinne et al (2015) The ARVD/C genetic variants database: 2014 update. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/25676813)
* Van der Velde et al (2013) An overview and online registry of microvillus inclusion disease patients and their MYO5B mutations. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/24014347)
* Janssen et al (2012) Mutation update on the CHD7 gene involved in CHARGE syndrome. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/22461308)

## Rare disease genome knowledge systems:
* Van der Velde (2017) GAVIN: Gene-Aware Variant INterpretation for medical sequencing. [Genome Biology](https://www.ncbi.nlm.nih.gov/pubmed/28093075)
* Van Gijn et al (2018) New workflow for classification of genetic variants' pathogenicity applied to hereditary recurrent fevers by the International Study Group for Systemic Autoinflammatory Diseases (INSAID).[Journal of Medical Genetics](https://www.ncbi.nlm.nih.gov/pubmed/29599418)
* Engwerda et al (2018) The phenotypic spectrum of proximal 6q deletions based on a large cohort derived from social media and literature reports. [European Journal of Human Genetics](https://www.ncbi.nlm.nih.gov/pubmed/29904178)
* Sikkema-Raddatz et al (2016) NIPTRIC: an online tool for clinical interpretation of non-invasive prenatal testing (NIPT) results. [Science reports](https://www.ncbi.nlm.nih.gov/pubmed/27917919)

## Genotype processing:
* Kanterakis et al (2015) Molgenis-impute: imputation pipeline in a box. [BMC Research Notes](https://www.ncbi.nlm.nih.gov/pubmed/26286716)
* Deelen et al (2015) Calling genotypes from public RNA-sequencing data enables identification of genetic variants that affect gene-expression levels. [Genome Medicine](https://www.ncbi.nlm.nih.gov/pubmed/25954321)
* Johanson et al (2016) CoNVaDING: Single Exon Variation Detection in Targeted NGS Data. [Human Mutation](https://www.ncbi.nlm.nih.gov/pubmed/26864275)
* Deelen et al (2014) Genotype harmonizer: automatic strand alignment and format conversion for genotype data integration. [BMC Research Notes](https://www.ncbi.nlm.nih.gov/pubmed/25495213)
