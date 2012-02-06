<!-- ---
layout: post
title: Privacy, Naming and Signposts
author: Amir Chaudhry
excerpt: Summary here
--- -->

# Connected devices, web services and Signpost

## Interest in connected devices

The number of internet-enabled devices is increasing and mobile phones only represent one category.  Other types of net-enabled devices can be made quite cheaply, contain a multitude of sensors and be situated almost anywhere.  For example, there are a couple of projects on Kickstarter that promise small boxes with a variety of sensors and even actuators, that can be used for a variety of purposes (see [Twine][Twine Kickstarter] and [Ninja Blocks][Ninja Blocks]).  The fact that these projects surpassed their funding goals so quickly and spectacularly indicates how excited people are about the possibilities of smart sensors and connected devices.  Commercial products also exist, such as the [Nest thermostat][Nest], which communicates with a cloud-based service to regulate the temperature in the home.

You can easily imagine many uses for such linked-sensor networks.  One example might be a security and access system for your home.  For example, imagine that you have a camera attached to your doorbell, which can send a video-feed directly to your smart-phone at work.  You could then talk to the postman who's trying to deliver a parcel and make sure he leaves it with No.3 or No.10 (people you actually know), and definitely *not* at No.1 (who you've never got on with).  Perhaps you could also control the lock and let a trusted friend in if they've arrived while you're still on your way home.  The possibilities are only limited by the sensors and actuators available.

The key point about these types of devices is that they're *'connected'*, which usually means *'connected-to-the-internet'*.  The implicit message is that they're linked to some kind of centralised service but most people don't delve into what that actually means.

[Twine Kickstarter]: http://www.kickstarter.com/projects/supermechanical/twine-listen-to-your-world-talk-to-the-internet
[Ninja Blocks]: http://ninjablocks.com/
[Nest]: http://www.nest.com


## Devices connected to ... third-party services?

Something common to all the rhetoric about connected devices are references to cloud-based services (phones included).  In fact, there's a surprising *lack* of discussion about this aspect.  It's almost taken for granted that such devices need to 'dial home' for configuration and to do anything useful with them.  'Home' is typically a third-party service to which users are granted access (possibly as a subscription).  It's a little lax to talk about the 'internet-of-things' without also mentioning the centralised services that may underlie it.  

Nikesh Arora of Google recently mentioned that ["Consumers want a divergence of devices but a convergence of services"][Arora Gplus].  It's fairly safe to assume that Google would like to be a point of 'convergence' and have begun to position themselves in this way\*. Arora, like many others, makes the implicit assumption that cloud services will provide the connectivity between devices.  A perfectly reasonable assumption since it's how things have progressed so far and Google has a vested interest in it.  Essentially, web-based services would act to host, co-ordinate and sync data from whichever devices are authenticated with them.  

[Arora Gplus]: https://plus.google.com/104376123433741873548/posts/4RcwiHbS7ME

In all the excitement, what *isn't* really discussed is the increasing amount of personal data that would have to be shared with such centralised services (of course, they would all claim that data security is paramount for them).  Another aspect of this centralisation is whether the organisations even *need* to hold such information at all.  For some companies, there may be a clear, strategic desire to collate and analyse user data (e.g Google is adept at monetising what it learns from users).  However, in some cases, the back-end service may only exist to solve a problem of connectivity.  Put bluntly, it's difficult to get all your devices to talk to each other but a lot easier to get them talking to a centralised service on the internet.  If a mechanism existed to allow devices to quickly and efficiently connect to each-other, then perhaps many of the services could focus on the value-added parts of their products, instead of how to get information from device A (my doorbell camera) to device B (my smart-phone screen).

[Signpost][] addresses one of the difficult yet <strong>fundamental</strong> problems for enabling the 'internet-of-things'.  That of creating robust, ad-hoc, private connections between devices.


## Signpost enables truly connected devices

Why Signpost is teh Awesomesauce!!!11!!

Signposts is timely in that allows all devices to connect to each other
Post on why we need Signpost. Include info on the following:

- end-to-end connections and how the internet breaks them
- how signpost nams different things places
- why this matters and what it enables
- how it might change the way devices communicate and connect


[Signpost]: http://perscon.net/overview/signpost.html

\* For example, Google has recently merged its privacy policies to allow all their services to share data between them.  

--------------


Some obvious mechanisms might be a systems of cameras that form part of your home security system.  When your landlord's plumber rings your doorbell, the camera directs the sound/image to your phone so you can verify him.  Actuators may allow you to open the door and allow him access.  Cameras inside the flat could be useful in directing him to the stop-valve so he can get on with fixing the boiler while you're out at the shops (of course, you have to trust that he's not not also interested in your underwear or the big-screen TV).  


There have been a number of fairly high profile conferences recently where the internet, and how it might look in the future, were discussed.  One of the recurring themes is related to the proliferation of mobile devices and how to provide services over them.


Indeed, you can imagine that Google stands to benefit a great deal if they can position themselves as the go-between for all your data online.  Provided a user opts into all their services, then they should reasonably expect to be able to co-ordinate/authenticate all their devices with one Google ID.  They'd get access to Picasa, Gmail, Latitude and host of other Google products all from frome ach of their devices.  You can see how this is quite a tempting offer, but it's also possible to imagine that all the services will be exactly what each user needs.  

The second issue that the aggregate data of all your Google usage, is owned by them.  This has benefits to the user, in that G can quickly offer new services and products, based on user behaviour, but it also means that your personal information is effectively owned by a corporation.  Of course, there are people who don't see this as a problem, and that's fine, but we should not allow ourselves to enter a world where there are effectively two tiers of online.  Those who are happy to share most details of their lives under any kind of ToS agreement and others who are inadvertently forced off, simply because the are unwilling to give up so much access to their personal lives.  

--------
