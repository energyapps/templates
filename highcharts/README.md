Highcharts Documentation
========================

This is documentation for making a basic highcharts chart through the map content type in the energy.gov Drupal CMS.

The bulk of the documentation for highcharts can be found in their [expansive API docs](http://www.highcharts.com/).

You can find the basic look of the code in the `index.html` of this repo.

Setting up a highcharts visualization
-------------------------------------

Setting up a highcharts visualization is very easy in our setup. Follow these steps.

1.	Create a `map` content type in energy.gov's CMS
2.	Copy and paste your 
	* HTML in the "markup" section 
	* JS in the Js section and CSS in the CSS section (duh, why did I write that?)
3. Hit save.

That's it. Simple right? 

Couple things to note:
* 	Like the maps, the charts can optionally contain a responsive-activated invisible div that allows for greater easy of scolling through the page. This is a id called "scroll-area".
*	jQuery is automatically attached to every map page.
*	Highcharts is default responsive.
*	If you do not specify a width, it will default to 100% and therefore be responsive.
*	Don't forget to wrap your jquery elements in the following:
```(function ($) {
	$(document).ready(function() {
    });
}(jQuery));
```
*