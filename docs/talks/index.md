---
title: Talks
layout: blog
---

Talks
=====

{% for post in site.categories.talks %}
<article class="pub {{ post.layout | xml_escape }}">
  <span class="title"><a href="{{ post.url }}">{{ post.title | xml_escape }}</a></span>
  {% if post.uri %}
  <span class="uri">[<a href="{{ post.uri }}">link</a>]</span>
  {% endif %}

  {% if post.pdf %}
  <span class="pdf">[<a href="{{ post.pdf }}">pdf</a>]</span>
  {% endif %}

  {% if post.slides %}
  <span class="slides">[<a href="{{ post.slides }}">slides</a>]</span>
  {% endif %}

  {% if post.video %}
  <span class="video">[<a href="{{ post.video }}">video</a>]</span>
  {% endif %}

  <br />
  <span class="authors">{{ post.authors | xml_escape }}</span>
  <span class="venue">{{ post.venue | xml_escape }}</span>
  <span class="date">{{ post.date | date_to_long_string }}</span>

  <br />
  [<a href="{{ post.url }}#disqus_thread"
      data-disqus-identifier="{{ post.id }}">View comments</a>]

</article>
{% endfor %}

<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'perscon'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] 
         || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
</script>
