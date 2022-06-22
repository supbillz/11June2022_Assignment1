async function main (){

function boiler(){
    let map = boilerMap();


    let quiteReq = loadQcenterJson();
    let pstoreReq = loadPstoreJson();
    let bcenterReq = loadBcenterJson();
    let ccenterReq = loadCcenterJson();
    
    let quitCenterLayer = await quiteReq;
    let pharmaLayer = await pstoreReq;
    let breastLayer = await bcenterReq;
    let cervicalLayer = await ccenterReq;
    

async function loadQcenterJson() {

    let response = await axios.get('geojson/quit-center.geojson');
    let quitCenterLayer = L.geoJson(response.data, {
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.Description);
        }
    })
    return quitCenterLayer;
}

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
let overLayers = {
    'Quit Ceners': quitCenterLayer,
    'Pharmacy Stores': pharmaLayer,
    'Breast Centers': breastLayer,
    'Cervical Centers': cervicalLayer
};
/*L.control.layers({
    'Quit Ceners': quitCenterLayer,
    'Pharmacy Stores': pharmaLayer,
    'Breast Centers': breastLayer,
    'Cervical Centers': cervicalLayer
}).addTo(map)*/
L.control.layers(null, overLayers).addTo(map);
}
boiler();
}



main();

 