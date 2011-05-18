---
section: publications
layout: pub

title: Mirage, A New Multi-Scale Operating System for Clouds and Crowds
authors: A. Madhavapeddy
uri: http://sna-projects.com/blog/2010/10/mirage/
video: http://vimeo.com/16189862
venue: LinkedIn SNA Tech Talk
address: Mountain View, CA, USA
date: 22 October 2010
---

Applications run on all kinds of environments these days: multicore
desktops, virtual cloud infrastructures, smart-phones, and web
browsers. These diverse environments make it worth rethinking the
long-term future of our software stacks; do we really want to continue
bundling gigabytes of general-purpose OS software with every single
cloud image? Is there any point holding onto decades-old interfaces
such as POSIX any more?

I will introduce Mirage, a new operating system built in the
statically type-safe OCaml functional language. Mirage compiles
high-level functional source code directly into a variety of targets
such as:

1. small microkernels that run directly on the "bare-metal" Xen hypervisor;
2. Javascript for web browsers; or
3. embedded ARM devices;
...and of course normal operating systems such as Linux.

Mirage provides a consistent, simple programming API across all of
these diverse backends, which makes it a powerful foundation for
constructing safe, complex distributed systems across a heterogeneous
set of modern compute resources such as mobile devices or cloud
computing infrastructure. Also, it’s just plain fun programming in
OCaml.

