const dc = [-77.0090, 38.8898];
let wards;


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
    //Insert data loading code here
    Promise.all([  // loads data as an array, to be indexed & assigned in the ready callback
        d3.json(wardGeoJsonUrl),
    ]).then(ready);
});

function ready(data){
    wards = data;
    console.log(data);
    addSources();
    addLayers();
    // map.addSource('wardData', {
    //     'type': 'geojson',
    //     'data': wards[0],
    //
    //
    // });
    //
    // const wardLayer = {
    //     'id': 'wardLayer',
    //     'type': 'line',
    //     'source': 'wardData',
    //     'paint': {
    //         'line-color': 'rgb(0,0,0)'
    //     }
    // };
    // map.addLayer(wardLayer);
}





//
//
//
// //set style of ward layer
// function style(feature) {
//     return {
//         weight: 2,
//         opacity: 0.8,
//         color: 'blue',
//         fillOpacity: 0.0
//     };
// }
//
// //Add DC Ward geojson to map
// $.getJSON(wardGeoJsonUrl, function (data) {
//     var geojson = L.geoJson(data, {
//         style: style,
//         onEachFeature: function (feature, layer) {
//             //create popup for each ward polygon
//             layer.bindPopup(feature.properties.NAME + "<br>" + "Rep. " + feature.properties.REP_NAME + "," + "<br>" + feature.properties.REP_PHONE)
//         }
//     });
//
//     geojson.addTo(map);
//
// });
//
// //open About This panel
// function openAbout() {
//     $("#about").show();
//     return false;
// }
//
// //close About This panel
// function closeAbout() {
//     $("#about").hide();
//     return false;
// }
