---
title: A test page!
description: Welcome to my Eleventy starter template. If you enjoy please star the project on Github.
layout: layouts/base.njk
---

## {{ title }}

{{ description }}

<div class="meta">
  <h1>Meta</h1>
  <p>{{ meta.author }}</p>
  <p>{{ meta.title }}</p>
  <p>{{ meta.description }}</p>
  <p>{{ meta.url }}</p>
</div>

<div class="services">
  <h1>Services</h1>
  <p>{{ services.name }}</p>
  <p>{{ services.price }}</p>
</div>

<div class="projects">
  <h1>projects</h1>
  <div class="project">
    <div class="heading">
      <a href="{{projects.res[0].fields.website}}"><h3>{{projects.res[0].fields.client}}'s {{projects.res[0].fields.name}}</h3></a>
      <p>{{projects.res[0].fields.year}}</p>
    </div>
    <img  src="{{projects.res[0].fields.media[0].thumbnails.large.url}}" alt="{{projects.res[0].fields.client}}'s {{${projects.res[0].fields.name}}" />
{% for tool in projects.res[0].fields.tools %}
<span class="tool-tag">{{tool}}</span>
{% endfor %}
  </div>
</div>
