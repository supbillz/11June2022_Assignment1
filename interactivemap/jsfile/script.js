/*const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3d8HsaUFx6m1QmbJGDLHwSmEK4DMnknQuUWYfjP/8CdI=";
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}


 let map = boilerMap();
async function main() {
    let map = boilerMap();

    let response = await axios.get('qcentres.geojson');
    let quitCentres = L.layerGroup();
    for (let info of response.data) {
        let marker = L.marker(features.geometry.coordinates).addTo(quitCentres);
        marker.bindPopup(${info.features.propeties.Description})
    }
    quitCentres.addTo(map);
}
main()*/
async function main (){

    let map = L.map('map');
    let centerPoint = [1.3521, 103.8198]  // the map variable will store an object referring to the Leaflet map
    map.setView(centerPoint, 13);  // setView takes one array as the argument
    // it is the lat lng of the center point of the map
    // second argument is the zoom level (how zoomed in we want the map be)

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


async function loadQcenterJson() {

    let response = await axios.get('geojson/quit-center.geojson');
    let quitCenterLayer = L.geoJson(response.data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Description);
        }
    })
    return quitCenterLayer;
}

let quiteReq = loadQcenterJson();
let pstoreReq = loadPstoreJson();
let bcenterReq = loadBcenterJson();
let ccenterReq = loadCcenterJson();

let quitCenterLayer = await quiteReq;
let pharmaLayer = await pstoreReq;
let breastLayer = await bcenterReq;
let cervicalLayer = await ccenterReq;

async function loadPstoreJson() {
  
    let pharmaResponse = await axios.get('geojson/pharma-store.geojson');
    let pharmaLayer = L.geoJson(pharmaResponse.data, {
        onEachFeature: function (feature, layer) {

            layer.bindPopup(feature.properties.Description);
        }
    })
    return pharmaLayer;
}

async function loadBcenterJson() {
  
    let breastResponse = await axios.get('geojson/breast-center.geojson');
    let breastLayer = L.geoJson(breastResponse.data, {
        onEachFeature: function (feature, layer) {

            layer.bindPopup(feature.properties.Description);
        }
    })
    return breastLayer;
}

async function loadCcenterJson() {
  
    let cervicalResponse = await axios.get('geojson/cervical-center.geojson');
    let cervicalLayer = L.geoJson(cervicalResponse.data, {
        onEachFeature: function (feature, layer) {

            layer.bindPopup(feature.properties.Description);
        }
    })
    return cervicalLayer;
}



//quitCenterLayer.addTo(map);

L.control.layers({
    'Quit Ceners': quitCenterLayer,
    'Pharmacy Stores': pharmaLayer,
    'Breast Centers': breastLayer,
    'Cervical Centers': cervicalLayer
}).addTo(map)

}
main();

