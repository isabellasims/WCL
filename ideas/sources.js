
function addSources() {
    map.addSource('wardData', {
        'type': 'geojson',
        'data': wards[0] // wards[0] just bc of how data is formatted
    });
}

function addLayers(){
    const wardLayer = {
        'id': 'wardLayer',
        'type': 'line',
        'source': 'wardData',
        'paint': {
            'line-color': 'rgb(0,0,0)'
        }
    };
    map.addLayer(wardLayer);


}
