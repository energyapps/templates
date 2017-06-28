Energy Maps and Charts Templates
================================

**NOTE** this is an old and unused repo

* [About this page](#about-this-page)
* [Assumptions](#assumptions)
* [Libraries](#libraries)
* [Best Practices](#best-practices)
* [Credits](#credits)

About this page
---------------

This page will provide templates, best practices, and code snippets for maps, charts, and timelines developed for energy.gov and all of its sub-sites. 

This page is currently under active development and is not yet meant to be used.

This codebase is licensed under the [MIT open source license](http://opensource.org/licenses/MIT) though it is intended to be used internally by employees of the Department of Energy and other cabinet level agencies.  See the ``LICENSE`` file for the complete license.


Assumptions
-----------
If you're building a map or chart for energy.gov

 * You can write css, javascript, html.
 * You have read and grasp the basics of whatever library you are using.
 * You have reviewed the Best Practices (below) and reviewed the map template (if applicable).

Libraries
---------
 * [Jquery](http://jquery.com/) for DOM manipulation (default on all Energy.gov page).
 * [Timeline JS](http://timeline.knightlab.com/) for timelines (soon to be integrated in Drupal).
 * [Leaflet JS](http://leafletjs.com/reference.html) for mapping
 * [Mapbox JS](https://www.mapbox.com/mapbox.js/) for mapping
 * [Highcharts JS](http://www.highcharts.com/) for charts and graphs
 * [D3 JS](http://d3js.org/) for SVG and canvas advanced charts
 * [Dragdealer JS](http://code.ovidiu.ch/dragdealer/) for dragable bars
 * [Underscore JS ](http://documentcloud.github.io/underscore/) for functional programming (where Underscore and jQuery overlap, i.e. each(), prefer Underscore).
 * [Enquire JS ](http://wicky.nillia.ms/enquire.js/) for responsive javascript.

DOE note: all libraries must be approved prior to use on energy.gov

Best Practices
--------------
Find a comprehensive best practices [here](https://github.com/energyapps/bestpractices).

The best practices page is cribbed from the [NPRApps Best Practices](https://github.com/nprapps/bestpractices/blob/master/README.md).


Credits
-------

This template is based off of quality work from the [NPRApps team](https://github.com/nprapps/app-template/blob/master/README.md).


	
