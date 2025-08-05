---
title: Tools
intro: "MOLGENIS promotes best practice tools and services to implement Open Science and FAIR principles:"
layout: blue
---

MOLGENIS was created in 2002 as an open source software that was configurable to be quickly adapted to new research needs (i.e. [microarray experiments](https://pubmed.ncbi.nlm.nih.gov/15059831/)). It therefore was craeted with a blueprint system, so users can quickly configure what they need, and then 
MOLGENIS quickly generates tools to manage and query those data (e.g. [Nature Reviews Genetics](https://pubmed.ncbi.nlm.nih.gov/17297480/)). Now, 
MOLGENIS has become an infrastructure of tools, services, expertise and their partner communities, sustaining the whole ecosystem for over two decades.


<a id="top"/>
<p>
Tools: 
{% for item in site.tools  %}
  <a href="#{{ item.name | slugify }}">
    {{ item.name }}</a> {% unless forloop.last %}- {% endunless %}
{% endfor %}
</p>

{% for item in site.tools %}
<div class="feature_box">
{% assign remainder = forloop.index | modulo: 2 %}
{% if remainder == 0 %}
<div class="feature_image_box"><img src="{{item.logo}}"/></div>
{% endif %}
<div class="feature_content_box">
  <h1 id="{{ item.name | slugify }}">{{ item.name }}</h1>
  <p>{{ item.content | markdownify }}</p>
{% assign filtered_posts = site.posts | where_exp: "post", "post.tools contains item.name" %}
{% if filtered_posts.size > 0 %}
News:
<ul>
  {% for post in filtered_posts %}
    <li><a href="/news.html#{{post.name | slugify}}">{% if post.citation %}publication: {{post.citation}} {% else %}{{ post.title }}{% endif %}</a></li>
  {% endfor %}
</ul>
{% endif %}
</div>

{% if remainder == 1 %}
<div class="feature_image_box"><img src="{{item.logo}}"/></div>
{% endif %}
</div>
{% endfor %}
