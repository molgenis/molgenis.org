---
title: Partners
intro: "MOLGENIS tools and services are driven by the valuable input and investments of many partners. Find examples of our partnerships below."
layout: blue
---
{% assign sorted_partners = site.partners | sort: "name" %}
<p style="text-align: center;">{% for item in sorted_partners %}
  <a href="#{{ item.name | slugify }}">{{ item.name }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}</p>

{% assign sorted_by_end = site.partners | sort: "end"  %}
{% assign sorted_by_end_and_start = sorted_by_end | sort: "start" | reverse %}

{% for item in sorted_by_end_and_start %}
  <h1 id="{{ item.name | slugify }}">{{ item.name }} 
    <small><small>{{ item.start }} - {{ item.end }}</small></small> 
    <img class="partner-logo" src="{{ item.logo }}">
  </h1>
  <p>{{ item.content | markdownify }}</p>
{% if item.tags %}
<p>MOLGENIS tools used:
{% for tag in item.tags %}
<a href="/tools/#{{ tag }}">{{ tag }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}
</p>
{% endif %}
{% endfor %}
