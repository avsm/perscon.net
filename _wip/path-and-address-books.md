<!--

layout: post
title: Path and address books
author: Amir Chaudhry
excerpt: 

-->

# Social networking and user's address books

In the last couple of weeks a news story flared-up, gathered some momentum and appears to have died down.

The story was about how Path, a social networking app for the iPhone, was silently copying users' address books to its servers.  *How* it was discovered probably added some fuel to the story, since it involved a developer running a proxy and noticing what kind of information was being sent back and forth.  The headline was that the entire address book was sent from the phone to Path's servers.  There was no indication in Path's privacy policy that they collected information in this way (whether anyone actually *reads* such policies is a topic for another time).  You can follow the unfolding events in the rough timeline below.

The justification for needing the address book data is so that suggestions can be made for new connections. For example, Alice joins Path and by accessing her address book, Path realises she has Bob's contact details.  Since Bob is already a member, Path can suggest that they connect.  This 'feature' is commonplace in almost every social networking application and Path's CEO even commented that it was "industry best practice".

It's this last comment that is concerning.  Mostly because it's true.

Path wasn't alone in quietly scraping users' data.  Although they didn't suffer the same backlash, sites like Instagram, Twitter, Foursquare and others were also taking copies of users' address books, without the users' explicit knowledge.  

It appears that in the race to create excellent, well-designed user experiences, the simple act of *informing users what you're doing* with their data is completely overlooked.  Perhaps it's one dialog box too far for the developers?  

The astounding thing that's come out of this isn't only that data-copying is so prevalent but the attitude that it's somehow Apple's responsibility.  Since Apple didn't lock-down address book access, it must be acceptable to do whatever you want with it.  This viewpoint also seems to be shared by two US Congressmen, who promptly sent a letter to Apple asking for clarification on data access.

In general, I find this view to be counter-productive.  Apple may be at fault for not providing clear guidelines, but it's still the app developers who wrote the code to copy data.  The result of transferring the blame to the platform means that developers don't have to hold themselves to higher standards and that platform providers will feel the need to become ever more restrictive. 

Each of these 'privacy-leak' stories seem to be short-lived but the growing frequency indicates that control over personal data and your 'digital footprint' is becoming a more visible topic.  As well it should be.


### Rough timeline of events

- \[8 Feb\] - Arun Thanmpi [writes about][thanmpi-post] the exact `POST` request which sends his entire address book to Path
- \[8 Feb\] - Path CEO responds to comments on Thanmpi's blog post, and mentions that this behaviour is ["Industry best practice"][path-ceo-comment], among other things
- \[8 Feb\] - Another developer [confirms][curtis-post] that such behaviour is commonplace, but believes Apple is to blame
- \[9 Feb\] - Path CEO [apologies on their blog][path-apology]
- \[12 Feb\] - [NY Times article][ny-times-article] about the sensitivity of address book data
- \[14 Feb\] - [Venture Beat article][venture-beat-article] mentioning other services that transmit address book data, including in plain-text
- \[15 Feb\] - [Congressmen write to Apple][letter-to-apple] with several questions about Apple policies. 
- \[15 Feb\] - Apple makes a statement that ["any app wishing to access contact data will require explicit user approval"][apple-response]



<!-- ### Links -->

[thanmpi-post]: http://mclov.in/2012/02/08/path-uploads-your-entire-address-book-to-their-servers.html

[path-ceo-comment]: http://mclov.in/2012/02/08/path-uploads-your-entire-address-book-to-their-servers.html#comment-432242293

[hn-post]: http://news.ycombinator.com/item?id=3563016

[curtis-post]: http://dcurt.is/stealing-your-address-book

[path-apology]: http://blog.path.com/post/17274932484/we-are-sorry

[ny-times-article]: http://bits.blogs.nytimes.com/2012/02/12/disruptions-so-many-apologies-so-much-data-mining/

[venture-beat-article]: http://venturebeat.com/2012/02/14/iphone-address-book/

[letter-to-apple]: http://thenextweb.com/apple/2012/02/15/congress-sends-letter-to-apple-questioning-the-path-debacle-developer-data-access/

[apple-response]: http://allthingsd.com/20120215/apple-app-access-to-contact-data-will-require-explicit-user-permission/