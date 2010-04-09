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

One important aspect of Personal Containers is *how to provide access
to third parties to liberate value from your personal data*.  Simply
archiving your digital footprint is a personally valuable consequence
of having a personal container, but not the only one.  Accurately
targeted services, such as advertising, are also valuable to you (the
owner) and others (third parties).  Similarly, third-party services
might make use of data from your Personal Container gathered from a
wide range of sources that would not otherwise be available to them,
e.g., an application that automatically extracted your ride-sharing
preferences when trying to match you to a ride-offer.

Enabling this means allowing you to giving third parties access to
your data.  This requires mechanisms for them to negotiate with you
for that access, for them to extract data from your Personal
Container, and for you to be able to control and audit their access.
We're calling the environment in which this happens the
*Marketplace*.  A **very** early stage prototype of this is
[available][perscon-gae].  It is not yet integrated with the data
gathering Personal Container, and relies on all personal data being
stored centrally in the cloud, so don't use it in anger yet!

[perscon-gae]: http://github.com/horizon-institute/equip-gae/tree/master/perscon/

What we're trying to do with it is explore one possible method for
allowing third-party access to your personal data.  The workflow is
expected to be something like: 

1. Third party registers an application with the marketplace, which
   installs a `context function` -- a code fragment that will compute
   a mask to apply to data before it is given to the third party --
   and some `callbacks` -- pairs of constraint sets and callback URLs.
2. A user authorizes the application to access their data.
3. When the user stores data, a default mask is stored with each item.
4. If the data item matches a constraint set for an authorized
   application, the mask computed by the application's context
   function is computed and applied to the item before it is passed on
   to the application.  If the application is unauthorized, then the
   default mask is applied first (which may, of course, completely
   redact the item).  Completely redacted items are not passed on.

Some pretty pictures (plus other notes) that try to illustrate this
are available in [this slide deck][slides].  There are clearly many
problems to solve in implementing this for real, but it's one possible
route.  Let us know what you think!

[slides]: http://github.com/horizon-institute/notes/raw/master/datamodelling-theme_infoarch.pdf
