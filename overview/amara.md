---
title: Amara
layout: default
section: overview
---

# Amara

<img class="alignright picture" src="/icons/refresh.png" />

Cloud services provide many benefits to individuals but they come with
many risks: privacy, long-term archiving, latency.  In practise, once
you've signed up with a cloud service it can be difficult to extract
all your data and leave.  

An alternative would be to use the copious amounts of digital storage
now common in homes to address the problems above: keep truly private
data under your own control, archive data from cloud services, and
ensure low-latency access at all times.  Unfortunately, the major
issue with this solution is management: cloud services employ
professional administrators to keep their systems running, a luxury
that does not exist in the home.  In a home, those skills do not
usually exist, and errors can be difficult or impossible to diagnose
and even fix.  This problem only becomes more serious when we are
building a personal cloud, more complex than just a single device.

The __Amara__ distribution is an experimental Linux distribution that
version controls _everything_ from package management to datafiles
using technologies such as [NixOS](http://nixos.org/nixos) and
[Git](http://git-scm.com/).  Having full provenance information means
that updates, particularly security updates, can be speculatively
applied and rolled back safely without fear of bringing the system
down.
