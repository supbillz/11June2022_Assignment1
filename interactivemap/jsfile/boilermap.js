
// - initialize default center point and zoom level of the map
let centerPoint = [1.3521, 103.8198]
let zoomLevel = 11
let query = '';
let map = '';

function initMap() {
    map = L.map('map').setView(centerPoint, zoomLevel);

    // set up the tile layers
    let tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    })

    tileLayer.addTo(map);

    return map;
}

function getGeoData(geoUrl, callback){
    axios.get(geoUrl).then(function(response){
        callback(response.data) 
    })
}

function displayGeoMarkers(geodata) {
    // - marker cluster
  let  markers = L.markerClusterGroup();
    
    // - loope through markers data list
    for (let n of geodata.features) {

        // - get marker description
        let desc = n.properties.Description
        pName = $(desc).children().children().children().children().eq(22).text()

        // - custom marker variable
        let customMarker = L.icon({
            iconUrl: 'images/marker.png',
            shadowUrl: 'images/marker.png',
            iconSize:     [32, 32], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        // - init marker 
        let marker = L.marker([
            n.geometry.coordinates[1], 
            n.geometry.coordinates[0],
            { icon: customMarker }
        ])
        .bindPopup('<i class="fas fa-seedling pr-2"></i> ' + pName);
        markers.addLayer(marker); 

        // $(marker).click(function(){
        //     map.flyTo([n.geometry.coordinates[1], n.geometry.coordinates[0]],16)

        // })
    }
    
    // - add markers to map
    markers.addTo(map)
    // map.setView(centerPoint,12)
}