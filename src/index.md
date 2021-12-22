---
    title: The Roost · Coffee Shop Docs
    layout: header.njk
---

{% for post in collections.posts %}

1. [{{ post.data.title }}]({{ post.url }}){.list__link}

{% endfor %}{.list}
