---
title: Tools
intro: "MOLGENIS promotes best practice tools and services to implement Open Science and FAIR principles:"
layout: blue
excerpt: "MOLGENIS tools: data catalogue, patient registry, federated analysis, variant interpretation pipeline, and HPC."
---

<a id="top"/>
<p>
{% for item in site.tools  %}
  <a href="#{{ item.name | strip | slugify }}">
    {{ item.name }}</a> {% unless forloop.last %}- {% endunless %}
{% endfor %}
</p>

{% for item in site.tools %}
  <h2 id="{{ item.name | strip | slugify }}">{{ item.name }}</h2>
  <p>{{ item.content | markdownify }}</p>
{% assign filtered_posts = site.posts | where_exp: "post", "post.tools contains item.name" %}
{% if filtered_posts.size > 0 %}
News:
<ul>
  {% for post in filtered_posts %}
    <li><a href="/news.html#{{post.title | slugify}}">{% if post.citation %}publication: {{post.citation}} {% else %}{{ post.title }}{% endif %}</a></li>
  {% endfor %}
</ul>
{% endif %}
{% endfor %}
