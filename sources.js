function addSources() {
    map.addSource('wardData', {
        'type': 'geojson',
        'data': wards
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
