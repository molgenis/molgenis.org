---
title: MOLGENIS - the flexible research data platform
intro: "MOLGENIS provides virtual data infrastructure to large (inter)national health research projects and groups. 
All MOLGENIS tools are free and open source, implement standards and FAIR principles, and have model-based configuration to quickly adapt to new 
research."
layout: blue
---

# Tools
<p>MOLGENIS provides FAIR data infrastructure through flexible tools:</p>
<div style="text-align: center">
<img src="/images/molgenis-cycle.png" alt="molgenis data lifecycle tools" style="width: 80%; height: auto;"/>
</div>
<p style="text-align: center" ><a href="/tools.html" class="bluebutton">Discover all MOLGENIS tools</a></p>

# Research communities
MOLGENIS accelerates research with flexible IT tools, support and hosting:

<!-- thanks to https://blog.logto.io/css-only-infinite-scroll -->
<div class="carousel">
<!-- endless scroll requires all twice -->
    <div class="carousel-group">
{% for item in site.communities %}
        <div class="carousel-card">
            <h2>{{ item.name }}</h2>
            <p>"{{ item.summary | capitalize}}"</p>
            <p class="carousel-card-footer"><a href="/communities.html#{{ item.name | strip | slugify }}">read more</a></p>
        </div>
{% endfor %}
    </div>
    <div aria-hidden class="carousel-group">
{% for item in site.communities %}
        <div class="carousel-card">
            <h2>{{ item.name }}</h2>
            <p>"{{ item.summary | capitalize}}"</p>
            <p class="carousel-card-footer"><a href="/communities.html#{{ item.name | strip | slugify }}">read more</a></p>
     </div>
{% endfor %}
    </div>
</div>

<div style="text-align: center">
<a href="/tools.html" class="bluebutton">Discover all MOLGENIS communities</a>
</div>

# Partnerships
MOLGENIS is created and sustained through multi-center partnerships:

{% assign sorted_partners = site.partners | sort: "name" %}
<a id="top"/>
<div class="partner-grid">{% for item in sorted_partners %}
<div class="partner-block">
  <a href="/partners.html#{{ item.name | strip | slugify }}"><img src="{{ item.logo }}">
    {{ item.name }}</a>
 <span class="tooltip">{{ item.title }}</span>
</div>
{% endfor %}</div>

<div style="text-align: center">
<a href="/partners.html" class="bluebutton">Discover all MOLGENIS partners</a>
</div>

# Get involved

- Contact: <a href="mailto:support@molgenis.org">support@molgenis.org</a>
- Github: <a href="https://github.com/molgenis">https://github.com/molgenis</a>
- LinkedIn: <a href="https://www.linkedin.com/company/molgenis">https://www.linkedin.com/company/molgenis</a>
