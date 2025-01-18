
navigator.geolocation.getCurrentPosition(function(position) {
    let latitude =  position.coords.latitude;//широта
    let longitude = position.coords.longitude;//долгота
   let map = new ol.Map({
    target: "map",
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([longitude,latitude]),
        zoom: 10
    })
   })   
});