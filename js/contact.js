function openWeatherMap(){
  const map_element = document.querySelector('#map');
  map_element.innerHTML = '';
  
  var map = new ol.Map({ // a map object is created
    target: 'map', // the id of the div in html to contain the map
    layers: [ // list of layers available in the map
      new ol.layer.Tile({ // first and only layer is the OpenStreetMap tiled layer 
        source: new ol.source.OSM() 
      }) 
    ], 
    view: new ol.View({ // view allows to specify center, resolution, rotation of the map 
      center: ol.proj.fromLonLat([parseFloat('33.627252'), parseFloat('34.916085')]), // center of the map 
      zoom: 18 // zoom level (0 = zoomed out) 
    }) 
  });
  
  map.updateSize();
  
  const key = '827d415a23ae0317063994543d264e7c';
  var layer_temp = new ol.layer.Tile({ 
    source: new ol.source.XYZ({ 
      url: 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid='+key, 
    }) 
  }); 
  map.addLayer(layer_temp); // a temp layer on map
  
  layer_temp = new ol.layer.Tile({ 
    source: new ol.source.XYZ({ 
      url: 'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid='+key, 
    }) 
  }); 
  map.addLayer(layer_temp); // a temp layer on map
}

$(document).ready(function() {
    openWeatherMap();
})
