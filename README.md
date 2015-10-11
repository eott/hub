# hub
A website generation framework based on Jekyll for my personal homepage. You are welcome to copy anything you like.
I have plans to make the framework more generic, so it's easier to adapt to other sites, but can't make promises.

### Coming soon(ish)
* Better default values
* Examples for content files
* Pagination

### Requirements
* Jekyll installed and configured
* PHP 5.3+ installed (for LESS compilation only)
* Webserver to host the generated page

### Installation
1. ```git clone https://github.com/eott/hub.git```
2. Copy ```config-default.yml``` to ```config.yml```
3. Configure ```config.yml``` to your liking
4. Copy ```build-default.bat``` to ```build.bat```
5. Open ```build.bat``` and make sure, that the build script will run in your environment. For example, the calls
to Jekyll or PHP might need be absolute paths, if they are not in your PATH variable. If you are using a *nix OS or other,
you might want to rename the script to ```build.sh``` and otherwise configure it for your OS' specific shell script env.
6. Run ```build.bat``` to check if generation was successful. The site should generate even without content.

### Usage
This sections is very incomplete. Check again later. Also, you will need to know how to use Jekyll for any of this
to make sense. Check their website for tutorials.

At the moment there are three main collections (Software, Imagery and Written Word) with several subcollections. All content
cards must belong to any of them or will not be listed otherwise. Blog posts work just like in vanilla Jekyll.

Images for content cards must always be named exactly like the slug. Thumbnails are expected to be 160px*160px. File extensions
must be lowercase.
