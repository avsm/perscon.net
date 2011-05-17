---
title: Overview
layout: default
section: overview
---

<img class="alignright picture" src="/graffle/stage2.png" alt="Your many data sources" />
                                     
Personal Containers is a research program solving the impediments
towards gaining control of our personal data: data *about us*
and data *by us*.  

A complete solution will entail solving a wide range of challenges,
from social to economic to policy, in addition to the technical.  The
infrastructure we are currently building to allow us to meet these
challenges starts from a single very simple premise:

<h4>
  Individuals should be able to control access to and use of their data
</h4>

<img class="alignleft picture" src="/graffle/stage1.png" alt="Privacy is paramount" />

Different people will engage with this in different ways and to
different degrees.  By analogy with personal finances, some will
desire very detailed control, auditing and understanding of their data
while others will want only a basic monthly statement describing use.
                                      
Similarly, such *personal* data has stringent privacy requirements:
some will want to minimise exposure of their data by leaving it where
it is collected while others may want to extract and archive all their
data however it is generated.

<img class="alignright picture" src="/icons/wired.png" alt="Privacy is paramount" />

As a direct result, we support *federation of data sources*, both
local and cloud-hosted, and we provide *interfaces supporting
third-party access to personal data* that is controlled, auditable and
privacy-preserving.

For those interested in the technical details of how we are building
this infrastructure, here are some of the projects we're currently
working on:

<div class="bullet">
  <a href="dataware.html"><img src="/graffle/stage3-sm.png" /></a> 
  <p>
    <a href="dataware.html">Dataware</a> is ...
  </p>
</div>

<div class="bullet">
  <a href="amara.html"><img src="/icons/refresh-48.png" /></a>
  <p>
    <a href="amara.html">Amara</a> is ...
  </p>
</div>

<div class="bullet">
  <a href="cloud-signpost.html"><img src="/icons/map-48.png" /></a>
  <p>
    <a href="cloud-signpost.html">Cloud Signpost</a> is ...
  </p>
</div>

<div class="bullet">
  <a href="dns-me.html"><img src="/icons/id_card-48.png" /></a>
  <p>
    <a href="dns-me.html">dns.me</a> is ...
  </p>
</div>

{% comment %}

<div class="overview_bar">
<a href="#nodes"><img src="/graffle/stage1.png"></img></a>
<a href="#connectivity"></a>
<a href="#compute"><img src="/graffle/stage3.png"></img></a>
<div class="overview_text" id="overview1">1. Secure Nodes</div>
<div class="overview_text" id="overview2">2. Easy Connectivity</div>
<div class="overview_text" id="overview3">3. Private Computation</div>
</div>

. We divide the
problem into three stages:  

1. how individuals can <i>privately</i> manage their <a
   href="#nodes">own data</a> without giving them up to 3rd parties. 
2. connect into a <a href="#connectivity">personal cloud</a> that
   weaves through impediments such as NATs and VPNs. 
3. use the Internet to socialise and monetise their data via <a
   href="#compute">privacy-sensitive computation</a>. 

<a name="nodes"><img class="project_icon"
src="/graffle/stage1-sm.png"></img></a> 
<span class="project_stage">1. Secure Nodes</span> 

<a name="homework"><img src="/icons/home-48.png"
class="project_icon"></img></a> 
<span class="project_title">Homework</span>

By studying the use of computer networks in the home, the Homework
project is creating the next generation of domestic infrastructure
that combines empirical understanding of use with a fundamental
re-invention of the protocols, models and architectures of the
domestic setting. 

The challenge is to develop techniques and tools that inform users of
the implications of network changes in terms that they readily
understand, aiming to develop an infrastructure that can configure and
repair itself. 

A motivating application is a parent that only wants to permit kids
access to Facebook after their homework has been completed. Our
experimental tangible interface permits a parent to insert a physical
USB "policy device" into the home router to easily activate this
policy, rather than requiring any software configuration. More
information at the <a href="http://www.homenetworks.ac.uk">project
homepage</a>. 


<a name="mirage"><img src="/icons/security-48.png" class="project_icon"></img></a>
<span class="project_title">Mirage</span>

The current software stack we store personal data in has been
developed over decades, and is very general-purpsoe.  We are also
investigating how to *specialise* this infrastructure for much greater
levels of security and reliability than is currently possible. 

Mirage is an exokernel for constructing secure, high-performance
network applications across a variety of cloud computing and mobile
platforms. Code can be developed on a normal OS such as Linux or MacOS
X, and then compiled into a fully-standalone, specialised microkernel
that runs under the Xen hypervisor. Since Xen powers most public cloud
computing infrastructure such as Amazon EC2, this lets your servers
run more cheaply, securely and finer control than with a full software
stack. 

Mirage is based around the <a href="http://caml.inria.fr/">OCaml</a>
language, with syntax extensions and libraries which provide
networking, storage and concurrency support that are easy to use
during development, and map directly into operating system constructs
when being compiled for production deployment. You can find more
information at the homepage at <a
href="http://www.openmirage.org/">OpenMirage.org</a>. 

<a name="connectivity"><img class="project_icon" src="/graffle/stage2-sm.png"></img></a>
<span class="project_stage">2. Easy Connectivity</span>




{% endcomment %}
