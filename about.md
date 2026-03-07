---
title: About
intro: MOLGENIS consists of a team of over 30 developers, researchers and data managers that develop, support and continuously improve the software and 
  services. 
  Furthermore we 
  have a large community of international and national partners supporting the infrastructure.
layout: blue
---

The MOLGENIS teams enable new software development, hosting, (data management) support and advice. In addition we coordinate a wider community of users, sponsors and enthusiasts. We look forward to hear about your experiences with MOLGENIS and suggestions for improvement. Please help us to improve MOLGENIS and send your feedback and ideas to: <a href="mailto:support@molgenis.org">support@molgenis.org</a>. You can also post your ideas open source at [GitHub](https://github.com/molgenis/).

<img class="team-photo" src="/images/team_2025.jpg" alt="Molgenis team photo 2025"/>

## History
MOLGENIS was created in 2002 as an open source software that was configurable to be quickly adapted to new research needs (i.e. [microarray experiments](https://pubmed.ncbi.nlm.nih.gov/15059831/)). 
It therefore was craeted with a blueprint system, so users can quickly configure what they need, and then
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

MOLGENIS is co-developed, used and funded by:

{% assign sorted_by_start = site.partners  | sort: "start" %}
{% assign sorted_by_end = sorted_by_start | sort: "end" | reverse %}
<ul>
{% for item in sorted_by_end %}
<li><a href="/partners.html#{{ item.name | strip | slugify }}">{{item.start}} - {{item.end}}: {{item.name}} {% if item.funding %} ({{item.funding}}) {% endif %}
</a></li>
{% endfor %}
</ul>

In addition we greatly thank in-kind contribution from several commercial parties:
* Balsamiq, for great wireframing
* IntelliJ, for software development
