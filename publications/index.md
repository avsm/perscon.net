---
title: Publications
layout: default
section: publications
---



Papers & Talks
==============

<ul id="publications">
  <li class="paper">
    <span class="authors">D. McAuley, R. Mortier, J. Goulding</span>
    <span class="title">
      <a href="http://dx.doi.org/10.1109/COMSNETS.2011.5716491">
        The Dataware Manifesto</a></span>
    <span class="venue">Proceedings of the 3rd IEEE International
      Conference on Communication Systems and Networks
      (COMSNETS)</span>
    <span class="address">Bangalore, India</span>
    <span class="date">January 2011</span>
    <span class="note">Invited paper</span>
  </li>
  
  <li class="talk">
    <span class="authors">R. Mortier</span>
    <span class="title">
      <a href="http://www.cl.cam.ac.uk/research/srg/netos/socialnets/slides/Richard_Motier.pdf">
        Horizon&mdash; Becoming Dataware</a></span>
    <span class="venue">
      <a href="http://www.cl.cam.ac.uk/research/srg/netos/socialnets/">
        SocialNets Workshop</a></span>
    <span class="video">
      <a href="http://www.cl.cam.ac.uk/research/srg/netos/socialnets/videos/10.mp4">video</a></span>
    <span class="address">Cambridge, UK</span>
    <span class="date">November 2009</span>
  </li>
  
  <li class="paper">
    <span class="authors">D. McAuley</span>  
    <span class="title">
      <a href="http://edition.pagesuite-professional.co.uk/launch.aspx?referral=other&pnum=192&refresh=q04PLg1590Xk&EID=4ba92dfe-08ee-438f-a709-7e96ca441567&skip=">
        Free the data to build the digital economy</a></span>
    <span class="venue">Public Service Review: Central Government, issue 21</span>
    <span class="date">2010</span>
  </li>
  
  <li class="paper">
    <span class="authors">R. Mortier, C. Greenhalgh, D. McAuley,
      A. Spence, A. Madhavapeddy, J. Crowcroft, S. Hand</span>
    <span class="title">
      <a href="https://www.horizon.ac.uk/images/stories/f76-Mortier.pdf">
        Personal Containers or, Your Life in Bits</a></span> 
    <span class="venue">
      <a href="https://www.horizon.ac.uk/news/digitalfutures/">
        Digital Futures workshop</a></span>
    <span class="address">Nottingham, UK</span>
    <span class="date">October 2010</span>
    <span class="note">Extended abstract</span>
  </li>
  
  <li class="paper">
    <span class="authors">J. Crowcroft, A. Madhavapeddy, M. Schwarzkopf,
      T. Hong, R. Mortier</span>
    <span class="title">
      <a href="http://anil.recoil.org/papers/2011-icdcn-droplets.pdf">
        Unclouded Vision</a></span>
    <span class="venue">Proceedings of 12th International Conference on
      Distributed Computing and Networking (ICDCN)</span>
    <span class="address">Bangalore, India</span>
    <span class="date">January 2011</span>
    <span class="note">Invited paper</span>
  </li>  
</ul>

<!--

Design Notes
============

Your Personal Container stores your personal data; your _digital footprint_, a simple statement that entails several components!  The overall idea is below:

<a href="/images/nomads-diagram.png"><img src="/images/nomads-diagram-450.png"></a>

The source repository contains several pieces in various stages of development:

* The [App Engine Collector](http://github.com/avsm/perscon/tree/master/appengine/) is designed to run on the free Google [App Engine](http://appengine.google.com) infrastructure to collect short-term data continuously, such as Find My iPhone, Twitter, Foursquare, etc.
* [UNIX Server](http://github.com/avsm/perscon/tree/master/server/) is a standalone, small, fast server written in [OCaml](http://caml.inria.fr) that uses the same HTTP API as the App Engine collector to synchronise your data to a normal OS. This could run in the cloud, or on small low-power [plug computers](http://plugcomputer.org/) at home on your broadband.
* [Android](http://github.com/avsm/perscon/tree/master/android/) is a mobile handset client that collects your GPS and other information and regularly uploads it to one of the fixed servers.
* [Plugins](http://github.com/avsm/perscon/tree/master/plugins/) contain several plugins for local desktop computers such as iPhone, iPhoto, Skype or Sync Services and upload it to a fixed server.

We'll have more information and documentation on the HTTP API as it settles down.  Right now, the biggest outstanding challenge is finalising the storage schema across these components.

Papers and Talks
----------------

We've written some position papers about early versions of the personal containers:

* **Yurts for Digital Nomads** on the overall architecture and problem, [draft pdf](/papers/digital-yurts-draft1.pdf) or [blog post](/2010/04/29/yurts-for-digital-nomads.html)
* **Multiscale not Multicore: Efficient Heterogenous Cloud Computing**: for the BCS Visions 2010 conference, see [pdf](http://www.bcs.org/server.php?show=conMediaFile.15105) or the [talk](http://prezi.com/xkmdmfjokxqg/multi-scale-not-multicore/)

Marketplace
-----------

One important aspect of Personal Containers is **how to provide access
to third parties to liberate value from your personal data**.  Simply
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
**Marketplace**.  A **very** early stage prototype of this is
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
   to the callback URL of the application.  If the application is
   unauthorized, then the default mask is applied first (which may, of
   course, completely redact the item).  Completely redacted items are
   not passed on.

Some pretty pictures (plus other notes) that try to illustrate this
are available in [this slide deck][slides].  There are clearly many
problems to solve in implementing this for real, but it's one possible
route.  Let us know what you think!

[slides]: http://github.com/horizon-institute/notes/raw/master/datamodelling-theme_infoarch.pdf

-->
