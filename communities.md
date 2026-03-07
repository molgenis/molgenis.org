---
title: Communities
intro: "MOLGENIS helps to create long-term research collaborations via continuous partnerships:"
layout: blue
excerpt: "MOLGENIS research communities in biobanking, cancer, exposome, genetics, rare disease and more."
---

<a id="top"/>
<div class="community-nav">
<p>
{% for item in site.communities  %}
  <a href="#{{ item.name | strip | slugify }}">{{ item.name }}</a> {% unless forloop.last %}- {% endunless %}
{% endfor %}
</p>
</div>

{% for item in site.communities %}
<div>
  <h2 id="{{ item.name | strip | slugify }}">{{ item.name }}</h2>
  <div class="community-detail">
<div class="community-content">{{ item.content | markdownify }}</div>
<div>
{% if item.partners %}
Partnerships:
<ul>
{% for partner in item.partners %}
{% assign partner_item = site.partners | where: "slug", partner | first %}
{% if partner_item %}
<li><a href="/partners.html#{{partner_item.name | strip | slugify}}">{{partner_item.name | strip}}</a></li>
{% else %}
<li><span style="color:red" title="No partner file '_partners/{{partner}}.md' found">{{partner}} (missing)</span></li>
{% endif %}
{% endfor %}
</ul>
{% endif %}
</div>
</div>
{% endfor %}
