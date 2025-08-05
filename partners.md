---
title: Partners
intro: "MOLGENIS tools and services are driven by the valuable input and investments of many partners and their user communities. Find examples of our 
partnerships below."
layout: blue
---
{% assign sorted_partners = site.partners | sort: "name" %}
<a id="top"/>
<div class="partner-grid">{% for item in sorted_partners %}
<div class="partner-block">
  <a href="#{{ item.name | slugify }}"><img src="{{ item.logo }}">
    {{ item.name }}</a>
</div>
{% endfor %}</div>

{% assign sorted_by_start = site.partners | sort: "start" | reverse %}
{% assign sorted_by_end_and_start = sorted_by_start | sort: "end" | reverse %}

{% for item in sorted_by_end_and_start %}
  <h1 id="{{ item.name | slugify }}">{{ item.name }} 
    <small><small>{{ item.start }} - {{ item.end }}</small></small> 
    <img class="partner-logo" src="{{ item.logo }}">
  </h1>
  
  <p>{{ item.content | markdownify }}</p>
{% if item.tools %}
<p>MOLGENIS tools used:
{% for tool in item.tools %}
<a href="/tools/#{{ tool }}">{{ tool }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}
</p>
{% endif %}
<p style="text-align: right;">
  <a href="#top">Back to top ↑</a>
</p>
{% endfor %}
