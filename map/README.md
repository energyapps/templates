Commonly used code and tricks for maps
======================================

*Note: This is basically only useful if you're using our system, so you know, word to the wise.*

This is in active development. I've added to this somewhat piecemeal so all of your questions might not be answered here. Still to come are more complicated maps (maps that call geoJSON instead of just Tilemill). I'd refer to the [Mapbox JS examples](https://www.mapbox.com/mapbox.js/example/v1.0.0/) for more complete examples.

## Designing your map
For more complicated maps, you may have divs and other elements that float on top of the map, to provide context (legends, data boxes, charts, etc). While this is fine and encouraged, it is important to understand how those elements will appear across the energy.gov platform. Understanding these things may impact the design of your maps. 

There are two places that maps show up in energy.gov. They both share the same code, so we must write the CSS of our code specifically enough to degrade gracefully to all platforms, sizes, and locations. These two locations are in the [map](http://energy.gov/maps/wind-farms-through-years) pages and as an [article hero](http://energy.gov/articles/wind-farm-growth-through-years). While these both perform the same below 900px (i.e. on mobile and smaller screens), their differences above 900px are worth noting. 

* The map should be width: 100%;

### /map CSS
* The map is 1000px at full width.

### /article CSS
Take a look at how the map behaves when it is in the article view [here](http://energy.gov/articles/wind-farm-growth-through-years). From full width screen sizes until 900px width, the screen has a sidebar, rendering the map frame less than full width. After that point, the . In order to work around this, we see that the `body` of the article contains an id called `one-sidebar`, whereas the `body` of an entry in the map section has the id `no-sidebar`. Using this, we can target the css in your map using `body.one-sidebar` in media queries like the following:

```
@media (min-width: 900px) {
    body.one-sidebar #map { 
    }
}
```

### DOE Style guide
Still to come

## Libraries
* [Jquery](http://jquery.com/) for DOM manipulation (default on all Energy.gov page).
* [Leaflet JS](http://leafletjs.com/reference.html) for mapping
* [Mapbox JS](https://www.mapbox.com/mapbox.js/) for mapping
* [Highcharts JS](http://www.highcharts.com/) for charts and graphs used alongside maps

## Responsive
Some info about responsive programming with energy.gov maps.

### Responsive CSS
Take a look at [the CSS](https://github.com/energyapps/templates/blob/master/map/responsive.css) code in order to familarize yourself with what I'm doing there. Feel free to edit, add, or update what I have. I'm primarily doing 3 things:
* Adjusting map height so that, once you reach the map, it does not extend below the bottom of the screen. (Most important)
* Optional: Turn on the scroll-area on the right to allow to scroll through the map without it zooming (on a touch device, zooming is the default response to tap scrolling).
* Optional: Move the zoom buttons to the edge of the map (remove padding), remove legend and/or tooltips at hand held sizes. This is not a great solution, but occassionally necessary (particularly for legends that take up a lot of space).


### Retina Detection
If you are using mapbox tiles that are created using their web interface, you can use the following code to detect if the device has a retina display. At that point, they will force the tiles to increase in resolution and be super crisp on the screen. Find out more about that in the [Mapbox API](https://www.mapbox.com/mapbox.js/api/v1.5.2/#L.mapbox.tileLayer) and in the [example](https://www.mapbox.com/mapbox.js/example/v1.0.0/retina/).

The code looks like this: 
```
var map = L.map('map')
    .setView([40.908, -101.525], 4)
    .addLayer(L.mapbox.tileLayer('energy.your-tile-here',{
      detectRetina: true,  
    }));
```

### Responsive JS
Energy.gov uses Enquire JS to create media query style responsive javascript code. While this is something that we may at some point be interested in adding, at this point, noe of our maps utilize this specifically. 

Practical use cases for this would be the ability to turn on and off tap scrolling at smaller (mobile) screen sizes.  

## The CMS
We will be providing a CMS guide separately for adding your map into the system.

## Map Checklist
* Don't forget to attach an image thumbnail to map article.
* Make









Code review