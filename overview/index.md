---
title: Overview
layout: default
section: overview
---

<div class="overview_bar">
<a href="#nodes"><img src="/graffle/stage1.png"></img></a>
<a href="#connectivity"><img src="/graffle/stage2.png"></img></a>
<a href="#compute"><img src="/graffle/stage3.png"></img></a>
<div class="overview_text" id="overview1">1. Secure Nodes</div>
<div class="overview_text" id="overview2">2. Easy Connectivity</div>
<div class="overview_text" id="overview3">3. Private Computation</div>
</div>

Personal Containers is a research program solving the impediments towards gaining control of our own personal data. We divide the problem into three stages: 

1. how the individual can <i>privately</i> manage their own <a href="#nodes">information</a> without giving them up to 3rd parties.
2. connect into a <a href="#connectivity">personal cloud</a> that works across modern impediments such as NATs and VPNs.
3. use Internet infrastructure to socialise and monetise their own data via <a href="#compute">privacy-sensitive computation</a>.

<a name="nodes"><img class="project_icon" src="/graffle/stage1-sm.png"></img></a>
<span class="project_stage">1. Secure Nodes</span>

While individuals have a strong incentive to move away from using cloud services (privacy, long-term archiving, latency), there are a number of practical difficulties with doing so.

In the home, the primary issue is management. Cloud services employ professional administrators to keep their systems running, but this luxury does not exist in the home network. We have several initiatives to improve the ease-of-use (the <a href="#homework">Homework</a> project), robustness (the <a href="#amara">Amara</a> self-healing operating system) and security (the <a href="#mirage">Mirage</a> secure programming platform) of our home infrastructure.

<a name="homework"><img src="/icons/home-48.png" class="project_icon"></img></a>
<span class="project_title">Homework</span>

By studying the use of computer networks in the home, the Homework project is creating the next generation of domestic infrastructure that combines empirical understanding of use with a fundamental re-invention of the protocols, models and architectures of the domestic setting.

The challenge is to develop techniques and tools that inform users of the implications of network changes in terms that they readily understand, aiming to develop an infrastructure that can configure and repair itself.

A motivating application is a parent that only wants to permit kids access to Facebook after their homework has been completed. Our experimental tangible interface permits a parent to insert a physical USB "policy device" into the home router to easily activate this policy, rather than requiring any software configuration. More information at the <a href="http://www.homenetworks.ac.uk">project homepage</a>.

<a name="amara"><img src="/icons/refresh-48.png" class="project_icon"></img></a>
<span class="project_title">Amara</span>

Cloud providers have the luxury of hiring professional system administrators to ensure their systems are patched and operational. In the edge network (e.g. in a home router), the end user usually has no such skills, and errors can be frustrating to diagnose and fix. This becomes particularly important if we are building a personal cloud that is more complex than just a single device.

The Amara distribution is an experimental Linux distro that version controls everything, from package management (using <a href="http://nixos.org/nixos/">NixOS</a>) to the data files (using <a href="http://git-scm.com/">Git</a>). Having full provenance information means that updates (especially security-related) can be speculatively applied and rolled back safely without fear of bringing the system down.

<a name="mirage"><img src="/icons/security-48.png" class="project_icon"></img></a>
<span class="project_title">Mirage</span>

The current software stack we store personal data in has been developed over decades, and is very general-purpsoe.  We are also investigating how to *specialise* this infrastructure for much greater levels of security and reliability than is currently possible.

Mirage is an exokernel for constructing secure, high-performance network applications across a variety of cloud computing and mobile platforms. Code can be developed on a normal OS such as Linux or MacOS X, and then compiled into a fully-standalone, specialised microkernel that runs under the Xen hypervisor. Since Xen powers most public cloud computing infrastructure such as Amazon EC2, this lets your servers run more cheaply, securely and finer control than with a full software stack.

Mirage is based around the <a href="http://caml.inria.fr/">OCaml</a> language, with syntax extensions and libraries which provide networking, storage and concurrency support that are easy to use during development, and map directly into operating system constructs when being compiled for production deployment. You can find more information at the homepage at <a href="http://www.openmirage.org/">OpenMirage.org</a>.

<a name="connectivity"><img class="project_icon" src="/graffle/stage2-sm.png"></img></a>
<span class="project_stage">2. Easy Connectivity</span>

The cloud is a (mostly) always available service that can be seen by all devices. Without this, it is difficult for individual devices to find each other.
 The <a href="#signpost">Cloud Signpost</a> project is building "personal cloud" infrastructure to let your devices all see each other without requiring complex configuration.

Big players such as Google and Facebook control online identity, while users have to do ad-hoc management of their home devices. Recent standards such as <a href="http://openid.net/">OpenID</a> have not taken off. Our <tt><a href="#identity">dns.me</a></tt> project is building a one-stop identity server that emphasises ease-of-use and device integration, but without depending on third-party infrastructure.

<a name="signpost"><img src="/icons/map-48.png" class="project_icon"></img></a>
<span class="project_title">Cloud Signpost</span>

Peer-to-peer services are notoriously hard to use due to the prevalance of firewalls and NAT middleboxes that prevent all of our devices from seeing each other. Consider how difficult it is to obtain a display from work into your home PC, or vice versa. 

Many cloud services have sprung up to assist with this, such as <a href="http://gotomypc.com">GoToMyPC</a>, but they all require you to give access to your home infrastructure to an external third-party. Why is it so difficult for our devices to be networked without these services?

The Cloud Signpost addresses the problem by probing connectivity and using DNS updates to provide a constant "pointer" to your devices. In addition, it also understands the *internal* structure of networks (e.g. the home) and can directly redirect devices that are on the same network to each other without going via the Internet.

Stay tuned for an alpha release of this project towards the end of the 2011 summer.

<a name="identity"><img src="/icons/id_card-48.png" class="project_icon"></img></a>
<span class="project_title">dns.me</span>

Users have to deal with a bewildering array of credentials at many levels: 3rd party web-sites, local machines and phones, network connections and VPNs, smartcards. This project asks how we can unify this into a single personal identity server that can re-export the information using Internet standards such as DNSSEC, OpenID, and also provide secure updates.

The result will enable the user to host their own identity on the cloud without relying on third-party services such as Google or Facebook, which currently have the power to arbitrarily snoop or deny access to users.

Of course, having all this information locked up securely with no way to socialise is of little use. The other half of the personal containers project is investigating how to securely (and crucially, *easily*) communication with other users without the huge loss of privacy that we must currently endure. The first project in this space is the <a href="#appstore">Personal App Store</a>, which is building an eco-system of data processors, sources and users who can all sell and consume services without sacrificing privacy.

<a name="compute"><img class="project_icon" src="/graffle/stage3-sm.png"></img></a>
<span class="project_stage">3. Private Computation</span>

One of the great drivers behind social networking has been the ecosystem of data processors who aggregate and provide services such as recommendations, location searches, or messaging.  The big *drawback* to these is that users have to divulge more of their personal data to the third-party than is necessary, because of the difficulty of distinguishing what is needed.

The Personal App Store approaches this problem from another angle: all user data is treated as immovable (in their possession), and the third-party applications are instead run inside the users network. Only aggregated results are sent back to the service company instead of the raw data.
Creating this infrastructure and maintaining the same ease-of-use as centralised services currently provide is a big challenge, but we are leveraging existing standards such as <a href="http://xmpp.org/">XMPP</a> and emerging technology such as <a href="http://incubator.apache.org/wave/">Apache Wave</a>.

