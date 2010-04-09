---
layout: default
title: Design
---

Design Notes
============

Your Personal Container stores your personal data -- your _digital
footprint_, a simple statement that entails several components!  We'll
be documenting design aspects here as we progress.  Watch this space...


Marketplace
-----------

One important aspect of Personal Containers is _how to provide access
to third parties to liberate value from your personal data_.  Simply
archiving your digital footprint is a personally valuable consequence
of having a personal container, but not the only one.  Accurately
targetted services, such as advertising, are also valuable to you (the
owner) and others (third parties).  Similarly, third-party services
might make use of data from your Personal Container gathered from a
wide range of sources that would not otherwise be available to them,
e.g., an application that automatically extracted your ride-sharing
preferences when trying to match you to a ride-offer.

Enabling this means allowing you to giving third parties access to
your data.  This requires mechanisms for them to negotiate with you
for that access, for them to extract data from your Personal
Container, and for you to be able to control and audit their access.
We're calling the environment in which this happens the _Marketplace_.
A *very* early stage prototype of this is [available][perscon-gae].
It is not yet integrated with the data gathering Personal Container,
and relies on all personal data being stored centrally in the cloud,
so don't use it in anger yet!  

[perscon-gae]: http://github.com/horizon-institute/equip-gae/tree/master/perscon/


