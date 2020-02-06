---
title: Portoflio and Blog!
welcome: Welcome to my portfolio webiste.
description: Welcome to my Eleventy starter template. If you enjoy please star the project on Github.
layout: layouts/base.njk
---

## {{site.title}}: {{ title }}

{{ welcome}}

{{ description }}

<div class="meta">
  <h1>Meta</h1>
  <p>{{ site.author }}</p>
  <p>{{ site.description }}</p>
  <p>{{ site.logo }}</p>
  <p>{{ site.mailto }}</p>
  <p>{{ site.repo }}</p>
  <p>{{ site.title }}</p>
  <p>{{ site.url }}</p>

  <p>{{ site.meta.application-name }}</p>
  <p>{{ site.meta.author }}</p>
  <p>{{ site.meta.character-set }}</p>
  <p>{{ site.meta.content-type }}</p>
  <p>{{ site.meta.description }}</p>
  <p>{{ site.meta.keyword }}</p>
  <p>{{ site.meta.viewport }}</p>
</div>
