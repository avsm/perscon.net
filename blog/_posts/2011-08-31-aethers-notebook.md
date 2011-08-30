---
layout: post
title: Aether's Notebook
author: Richard Mortier
excerpt: Aether's Notebook, a generic logging framework for Android.
---

[Aether's Notebook][source] has been developed by
[Dominic Price][dominic] as part of the
[Horizon Infrastructure][horizon] project.  For more details see the
[source][] or visit its [wiki][]. 

It is a generic client-server logging framework for Android devices.
The cient component consists of _loggers_ which generate log messages,
_appenders_ which consume them, and a _core_ which bridges messages
between loggers and appenders, replicating them as required.  The core
can also be made responsible for starting/stopping selected _managed_
loggers and appenders.  Log messages contain, in addition to the
messages, three pieces of metadata: timestamp including timezone;
location as given by the best available source, and a UID and version
number for the logger.  Location logging can be turned on and off. 

There are several built-in loggers: cell location, connection
state, signal strength, and position; and two built-in appenders, one
to a local (on-device) file and the other which will take local log
files and HTTP `POST` them to an external server.

Aether's Notebook is now available in the Android Marketplace.  To
download the [AGPLv3][] licensed source, visit [source][].  For more
detailed, live documentation visit the [wiki][]. 

[source]: https://github.com/dominicjprice/Aether-s-Notebook-Azure-Server
[wiki]: https://github.com/dominicjprice/Aether-s-Notebook-Android-Client/wiki
[agplv3]: http://www.gnu.org/licenses/agpl-3.0.txt
[dominic]: https://github.com/dominicjprice
[horizon]: http://www.horizon.ac.uk/
