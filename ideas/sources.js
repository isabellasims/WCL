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

    // const PCBfillLayer = {
    //     'id': 'PCB-fill',
    //     'type': 'fill',
    //     'source': 'wardLayer',
    //     'paint': {
    //         "fill-color": {
    //             "property": "count",
    //             "stops": [ // ordinal filling methodology
    //                 [districtExtent[0], "yellow"],
    //                 [districtExtent[1], "red"]
    //                 // ADDS COL BREWER
    //                 // [districtExtent[0], '#ffeda0'], // using color brewer
    //                 // [districtExtent[1]*0.5, '#feb24c'],
    //                 // [districtExtent[1], '#f03b20']
    //             ]
    //         },
    //         'fill-opacity': 0.4
    //     }
    // };



    map.addLayer(wardLayer);


}
