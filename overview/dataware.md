---
title: Dataware
layout: default
section: overview
---

Dataware
========

<img class="alignright picture" src="/graffle/stage3.png" />

Simply locking up all our personal data, removing our ability to
socialise it, is of little use. Dataware is the infrastructure we are
building to support an ecosystem of data sources and processors,
selling services that process your data without sacrificing your
privacy.

One of the great drivers behind social networking has been the
ecosystem of data processors who aggregate and provide services such
as recommendations, location searches, or messaging.  The big
*drawback* to these is that users have to divulge more of their
personal data to the third-party than is necessary, because of the
difficulty of distinguishing what is needed. 

Dataware approaches this problem from another angle: user data is
treated as immovable by default, and the third-party applications are
instead granted [capabilities][cap] to run against the data wherever
it is stored.  Decisions are taken by the user, aided by software,
about which applications are acceptable based on what data they will
process, what results they will produce and where those results will
be sent.

Technology
----------

<img class="alignleft big picture" src="/images/dataware-components.png" />
<img class="alignright big picture" src="/images/dataware-implementation.png" />

Creating this infrastructure and maintaining the same ease-of-use as
centralised services currently provide is a challenge, but we are
leveraging existing standards such as [XMPP](http://xmpp.org/) and
emerging technology such as [Apache
Wave](http://incubator.apache.org/wave/). 

We identify three principals in the Dataware architecture: _sources_,
_processors_ and the user as represented by their _catalog_.  In
combination, a user's sources and catalog can be considered one
instantiation of their personal container.

__Sources__ are organizations that hold personal data, ranging from
banks to retailers to health professionals to your own computers and
smartphones.

__Processors__ are organizations that wish to process your personal
data to some end, whether via web services, downloadable 
applications, or some combination.

Your __catalog__ maintains metadata about your data sources and is
responsible for applying policies on your behalf concerning who can
access what data, to what end, and at what time.  It is the catalog
that is responsible for generating and managing
[capabilities][cap] delegating access to your personal data.

[cap]: http://en.wikipedia.org/wiki/CAP_computer
