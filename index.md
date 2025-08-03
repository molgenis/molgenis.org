---
title: "FAIR and open-source data infrastructure for health research"
intro: "MOLGENIS provides virtual FAIR data infrastructures for large (inter)national multi-centre health research communities.
 MOLGENIS is open access (public/partnership/fee-based) and all tools are free and open source, implementing (inter)national standards and FAIR principles, so 
 they can easily be reused."
image: /images/frontpage-small-darker3.jpg
layout: blue
---

# FAIR data infrastructures

<div style="display: flex; justify-content: space-between;">

<div style="flex: 1; padding-top: 5vw">
<p>MOLGENIS is a virtual data infrastructure providing FAIR data tools for large (inter)national multi-centre health research groups.</p>
<p style="text-align: center" ><a href="/tools.html" class="bluebutton">Discover all MOLGENIS tools</a></p>
</div>

<div style="flex: 1;">
  <img src="/images/molgenis-cycle.png" alt="molgenis data lifecycle tools" style="max-width: 100%; height: auto;">
</div>

</div>

# For health research communities

MOLGENIS accelerates research communities with user-friendly IT tools, support and hosting:

<!-- thanks to https://blog.logto.io/css-only-infinite-scroll -->
<div class="carousel">
<!-- endless scroll requires all twice -->
    <div class="carousel-group">
{% for item in site.communities %}
        <div class="carousel-card">
            <h2>{{ item.name }}</h2>
            <p>"{{ item.summary | capitalize}}"</p>
            <p class="carousel-card-footer"><a href="/communities.html#{{ item.name | slugify }}">read more</a></p>
        </div>
{% endfor %}
    </div>
    <div aria-hidden class="carousel-group">
{% for item in site.communities %}
        <div class="carousel-card">
            <h2>{{ item.name }}</h2>
            <p>"{{ item.summary | capitalize}}"</p>
            <p class="carousel-card-footer"><a href="/communities.html#{{ item.name | slugify }}">read more</a></p>
     </div>
{% endfor %}
    </div>
</div>

<div style="text-align: center">
<a href="/tools.html" class="bluebutton">Discover all MOLGENIS communities</a>
</div>

# Driven by partnerships

MOLGENIS is created and maintained through partnerships who invest in and share MOLGENIS developments as free and open source.

{% assign sorted_partners = site.partners | sort: "name" %}
<a id="top"/>
<div class="partner-grid">{% for item in sorted_partners %}
<div class="partner-block">
  <a href="/partners.html#{{ item.name | slugify }}"><img src="{{ item.logo }}">
    {{ item.name }}</a>
</div>
{% endfor %}</div>

<div style="text-align: center">
<a href="/partners.html" class="bluebutton">Discover all MOLGENIS partners</a>
</div>

# Get involved

- Contact: <a href="mailto:support@molgenis.org">support@molgenis.org</a>
- Github: <a href="https://github.com/molgenis">https://github.com/molgenis</a>
- LinkedIn: <a href="https://www.linkedin.com/company/molgenis">https://www.linkedin.com/company/molgenis</a>
