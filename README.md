angular-template-requirejs
==========================
# About

This is a template implementation of [Angular Seed](https://github.com/angular/angular-seed) with bootstrap and a few examples (I'm still working on more examples). 

* AngularJS 1.3.3
* RequireJS 2.1.15


# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains AngularJS libraries, test libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball), start up
our (or yours) webserver and you are ready to develop and test your application.

The seed app doesn't do much, just shows how to wire two controllers and views together. You can
check it out by opening app/index.html in your browser (might not work file `file://` scheme in
certain browsers, see note below).

_Note: While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend hosting the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`._


## How to use angular-seed

Clone the angular-seed repository and start hacking...


### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `node scripts/web-server.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.



## Directory Layout

    app/                --> all of the files to be used in production
    
      dist/				 --> Bootstrap files (js and css)
      
      css/              --> css files
        app.css         --> default stylesheet
        
      img/              --> image files
      
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        factories.js    --> application factories to call resources
        filters.js      --> custom angular filters
        routes.js       -->  routes for the app
        services.js     --> custom angular services
      
      partials/         --> angular view partials (partial html templates)
        partial1.html
        partial2.html
        json_service.html


## Contact

For more information on AngularJS please check out http://angularjs.org/


This is just an example of a basic implementation of the [Angular Seed](https://github.com/angular/angular-seed), so you'd probably checking their page directly, but if you wished to contact me:

**bernardo.pineda [at] gmail [dot] com**

**[@bpineda](twitter.com/bpineda)** on Twitter (disclosure, it's mostrly in Spanish)
