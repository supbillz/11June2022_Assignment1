/*const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3d8HsaUFx6m1QmbJGDLHwSmEK4DMnknQuUWYfjP/8CdI=";
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}



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

async function appearQuitGeoJson(){
    let map = boilerMap();
let response = await axios.get('geojson/quitcentres.geojson');
let qcentreLayer = L.geoJson(response.data, {
    onEachFeature: function(feature, layer){
        console.log(feature);
        layer.bindPopup(feature.properties.Description);
    }
})
qcentreLayer.addTo(map);
}

async function appearPharmaGeoJson(){
    let map = boilerMap();
let pharmaResponse = await axios.get('geojson/pharmastores.geojson');
let pharmaLayer = L.geoJson(pharmaResponse.data, {
    onEachFeature: function(feature, layer){
        console.log(feature);
        layer.bindPopup(feature.properties.Description);
    }
})
pharmaLayer.addTo(map);
}

appearQuitGeoJson();
appearPharmaGeoJson()
