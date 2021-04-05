// globalize variables so they can be accessed in other JS files
const dc = [-77.0090, 38.8898];
let wards;
let ward1;
let ward2;
let ward3;
let ward4;
let ward5;
let ward6;
let ward7;
let ward8;


mapboxgl.accessToken = 'pk.eyJ1IjoiamFnb2R3aW4iLCJhIjoiY2lnOGQxaDhiMDZzMXZkbHYzZmN4ZzdsYiJ9.Uwh_L37P-qUoeC-MBSDteA';

const map = new mapboxgl.Map({
    container: 'map',
    center: dc,
    maxZoom: 13,
    minZoom: 10,
    zoom: 11,
    style: 'mapbox://styles/mapbox/light-v10'
});

const wardGeoJsonUrl = "https://opendata.arcgis.com/datasets/0ef47379cbae44e88267c01eaec2ff6e_31.geojson";


map.on('load', function(){
    console.log('about to load data');

    Promise.all([
        d3.json(wardGeoJsonUrl),
    ]).then(ready);
});

function ready(data){
    wards = data;
    wards = wards[0]; // just removing un needed attrs

    console.log(data);
    addSources();
    addLayers();




}

