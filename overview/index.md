---
title: Overview
layout: default
section: overview
---

<img src="/graffle/arch.png" align="right" style="float:right" />

Personal Containers is a research program solving the impediments towards gaining control of our own personal data. We divide the problem into two halves: firstly how the individual can <i>privately</i> manage their digital data without giving it up to a third-party, and then how they can use the <i>public</i> Internet infrastructure to socialise and monetise it.

While individuals have a strong incentive to move away from using cloud services (privacy, long-term archiving, latency), there are a number of difficulties with doing so:

* **Connectivity**: The cloud is a (mostly) always available service that can be seen by all devices. Without this, it is difficult for devices to find each other. The <a href="#signpost">Cloud Signpost</a> project is building "personal cloud" infrastructure to let your devices all see each other without requiring complex configuration.
* **Identity**: Big players such as Google and Facebook control online identity, while users have to do ad-hoc management of their home devices. Recent standards such as <a href="http://openid.net/">OpenID</a> have not taken off. Our <tt><a href="#identity">dns.me</a></tt> project is building a one-stop identity server that emphasises ease-of-use and device integration, but without depending on third-party infrastructure.
* **Management**: Cloud services employ professional administrators to keep their systems running, but this luxury does not exist in the home network. We have several initiatives to improve the ease-of-use (the <a href="#homework">Homework</a> project) and robustness (the <a href="#amara">Amara</a> self-healing operating system) of our infrastructure.

### Cloud Signpost
<a name="signpost" />

foo


### dns.me

Users have to deal with a bewildering array of credentials at many levels: 3rd party web-sites, local machines and phones, network connections and VPNs, smartcards. This project asks how we can unify this into a single personal identity server that can re-export the information using Internet standards such as DNSSEC, OpenID, and also provide secure updates. The result will enable the user to host their own identity on the cloud without relying on third-party services such as Google or Facebook, which currently have the power to arbitrarily snoop or deny access to users.

### Self-Healing Systems

Provenance and NixOS

### Configuration

Homework
