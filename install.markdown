---
layout: default
title: Installation
---

## App Engine

There are several prototypes in development, but the most useful one currently is the data gathering module, which sits on [Google App Engine](http://code.google.com/appengine).  It can receive uploads from your laptop and phone, and can also periodically poll cloud services (e.g. Mobile Me) for your location information.

Follow these steps to get it up and running:

* Set up a Google App Engine instance, by going to <http://appengine.google.com> and following the instructions. If this is your first VM, you will need to provide your mobile phone number as an extra step for Google.
* Clone the Python code from <http://github.com/avsm/perscon> to your local development machine.
* Switch to the `appengine` directory, where there are several files with `.in` extensions:

	* `app.yaml.in`: change the `@APP_NAME@` variable to the name you assigned your App Engine VM.
	* `cron.yaml.in`: this controls periodic polling, so set it to the resolution you want.  Beware that the iPhone/MobileMe plugin will drain your phone's battery life if you use it too often.
	* `passwd.py.in`: you need to fill in passwords for [MobileMe](http://me.com) (for iPhone tracking), and generate a [Flickr](http://flickr.com) API key (details [here](http://www.flickr.com/services/api/misc.api_keys.html)) and a Google Maps key (details [here](http://code.google.com/apis/maps/signup.html)).   This isn't particularly secure, and the passwords would be better done using OAuth or similar if the remote service supports it.

* Run the VM in SDK mode (read the [SDK instructions](http://code.google.com/appengine/downloads.html)).  This is easiest done using the Python GUI launcher.

* Manually navigate to the local URL to trigger the iPhone poll, e.g. at <http://localhost:8080/tasks/fmi> which should cause the perscon to retrieve your phone location via FindMyIPhone.

* Look at the local DataStore to ensure the data has been saved via the admin interface, probably at <http://localhost:8080/_ah/admin>

* Upload the VM to Google and access it at <https://your-app-id.appspot.com>.  It should show you a webmail-style user interface, and click on the Settings/Plugins panel to authenticate to Twitter and get some messages in the system.

<span><a href="images/perscon-extjs.png"><img src="images/perscon-extjs-thumb.png" /></a></span>

## Plugins

There are a number of bundled plugins to put information up into a live personal container, such as phone calls, Twitters, SMS messages, and so on.

### MacOS X

* Change to the `support` directory and run `build.sh`. It should complete without errors on MacOS X 10.6.
* Copy `Perscon_config.py.in` to `Perscon_config.py` and fill in the variables.
* In the `plugins` directory, you can now run:

	* *Adium*: via `python sync.py`, uploads your instant messaging
	* *MacOS-SyncServices*: via `python sync.py`, uploads your contacts database using SyncServices
	* *iPhone*: via `./sync.sh`, extracts call history and SMS messages and uploads them
	* *Twitter*: via `python sync.py`, uploads Tweets (this needs to be changed to run directly on the AppEngine version via OAuth).
	* *iPhoto*, via `python sync.py`, uploads iPhoto face, thumbnails and GPS traces

There are also other plugins in the directory which are under development, for Google Docs, Skype, Photo files, Picasa, etc.

### Android

An [Android](http://www.android.com/) mobile phone application to upload your location is available in the `perscon/android` directory.
Installation instructions tbd.

### UNIX server

A server for UNIX-like operating systems, written in OCaml, is in the `perscon/server` directory, but is still under development to reach parity with the AppEngine API.

