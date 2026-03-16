---
title: Partners 
intro: "MOLGENIS tools and services are driven by many partners and their user communities:"
layout: blue
excerpt: "Overview of all MOLGENIS partner projects across biobanking, genomics, rare disease, and cohort research."
---
{% assign sorted_partners = site.partners | sort: "name" %}
<a id="top"/>
<div class="partner-grid">{% for item in sorted_partners %}
<div class="partner-block">
  <a href="#{{ item.name | strip | slugify }}"><img src="{{ item.logo }}" alt="{{ item.name }}">
    {{ item.name }}</a>
</div>
{% endfor %}</div>

{% assign sorted_partners_by_start = site.partners | sort: "start" | reverse %}

{% for item in sorted_partners_by_start %}
  <h2 id="{{ item.name | strip | slugify }}">{{ item.name }}
    <small><small>{{ item.start }} - {{ item.end }}</small></small>
    <img class="partner-logo" src="{{ item.logo }}" alt="{{ item.name }}">
  </h2>
  
  <p>{{ item.content | markdownify }}</p>
{% if item.tools %}
<p>MOLGENIS tools used:
{% for tool in item.tools %}
<a href="/tools.html#{{ tool }}">{{ tool }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}
</p>
{% endif %}
<p style="text-align: right;">
  <a href="#top">Back to top ↑</a>
</p>
{% endfor %}
