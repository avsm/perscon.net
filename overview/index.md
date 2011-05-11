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

Of course, having all this information locked up securely with no way to socialise is of little use. The other half of the personal containers project is investigating how to securely (and crucially, *easily*) communication with other users without the huge loss of privacy that we must currently endure. The first project in this space is the <a href="#appstore">Personal App Store</a>, which is building an eco-system of data processors, sources and users who can all sell and consume services without sacrificing privacy.

## Cloud Signpost
<a name="signpost" ></a>

Peer-to-peer services are notoriously hard to use due to the prevalance of firewalls and NAT middleboxes that prevent all of our devices from seeing each other. Consider how difficult it is to obtain a display from work into your home PC, or vice versa. 

Many cloud services have sprung up to assist with this, such as <a href="http://gotomypc.com">GoToMyPC</a>, but they all require you to give access to your home infrastructure to an external third-party. Why is it so difficult for our devices to be networked without these services?

The Cloud Signpost addresses the problem by probing connectivity and using DNS updates to provide a constant "pointer" to your devices. In addition, it also understands the *internal* structure of networks (e.g. the home) and can directly redirect devices that are on the same network to each other without going via the Internet.

Stay tuned for an alpha release of this project towards the end of the 2011 summer.

## dns.me

<a name="identity"> </a>

Users have to deal with a bewildering array of credentials at many levels: 3rd party web-sites, local machines and phones, network connections and VPNs, smartcards. This project asks how we can unify this into a single personal identity server that can re-export the information using Internet standards such as DNSSEC, OpenID, and also provide secure updates.

The result will enable the user to host their own identity on the cloud without relying on third-party services such as Google or Facebook, which currently have the power to arbitrarily snoop or deny access to users.

## Homework

<a name="homework"> </a>

By studying the use of computer networks in the home, the Homework project is creating the next generation of domestic infrastructure that combines empirical understanding of use with a fundamental re-invention of the protocols, models and architectures of the domestic setting.

The challenge is to develop techniques and tools that inform users of the implications of network changes in terms that they readily understand, aiming to develop an infrastructure that can configure and repair itself.

A motivating application is a parent that only wants to permit kids access to Facebook after their homework has been completed. Our experimental tangible interface permits a parent to insert a physical USB "policy device" into the home router to easily activate this policy, rather than requiring any software configuration. More information at the <a href="http://www.homenetworks.ac.uk">project homepage</a>.

## Personal App Store

One of the great drivers behind social networking has been the ecosystem of data processors who aggregate and provide services such as recommendations, location searches, or messaging.  The big *drawback* to these is that users have to divulge more of their personal data to the third-party than is necessary, because of the difficulty of distinguishing what is needed.

The Personal App Store approaches this problem from another angle: all user data is treated as immovable (in their possession), and the third-party applications are instead run inside the users network. Only aggregated results are sent back to the service company instead of the raw data.
Creating this infrastructure and maintaining the same ease-of-use as centralised services currently provide is a big challenge, but we are leveraging existing standards such as <a href="http://xmpp.org/">XMPP</a> and emerging technology such as <a href="http://incubator.apache.org/wave/">Apache Wave</a>.


## Operating Systems

### Self-Healing Distributions

<a name="amara"> </a>

Cloud providers have the luxury of hiring professional system administrators to ensure their systems are patched and operational. In the edge network (e.g. in a home router), the end user usually has no such skills, and errors can be frustrating to diagnose and fix. This becomes particularly important if we are building a personal cloud that is more complex than just a single device.

The Amara distribution is an experimental Linux distro that version controls everything, from package management (using <a href="http://nixos.org/nixos/">NixOS</a>) to the data files (using <a href="http://git-scm.com/">Git</a>). Having full provenance information means that updates (especially security-related) can be speculatively applied and rolled back safely without fear of bringing the system down.

### Specialised and Secure Exokernels

The current software stack we store personal data in has been developed over decades, and is very general-purpsoe.  We are also investigating how to *specialise* this infrastructure for much greater levels of security and reliability than is currently possible.

Mirage is an exokernel for constructing secure, high-performance network applications across a variety of cloud computing and mobile platforms. Code can be developed on a normal OS such as Linux or MacOS X, and then compiled into a fully-standalone, specialised microkernel that runs under the Xen hypervisor. Since Xen powers most public cloud computing infrastructure such as Amazon EC2, this lets your servers run more cheaply, securely and finer control than with a full software stack.

Mirage is based around the OCaml language, with syntax extensions and libraries which provide networking, storage and concurrency support that are easy to use during development, and map directly into operating system constructs when being compiled for production deployment. You can find more information at the homepage at <a href="http://www.openmirage.org/">OpenMirage.org</a>.
