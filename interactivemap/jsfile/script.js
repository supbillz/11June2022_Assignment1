async function main() {


    let map = boilerMap();

    let findResultLayer = L.layerGroup();
    findResultLayer.addTo(map);

    window.addEventListener("DOMContentLoaded", function () {

        document.querySelector("#btnSearch").addEventListener('click', async function () {
            let query = document.querySelector("#inputQuery").value;
            let center = map.getBounds().getCenter();
            let data = await find(center.lat, center.lng, query);

            for (let result of data.results) {
                let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude]
                let resultMarker = L.marker(latlng);
                resultMarker.addTo(findResultLayer);
            }
        })
    })

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
        //let quitData = (response.data.features);
        let quitMarkerCluster = L.markerClusterGroup();

        let quitCenterLayer = L.geoJson(response.data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.Description);
            }
        })
    

        return quitCenterLayer;
    }
  

    document.querySelector('#btnQuitCenter').addEventListener('click', async function () {
         let quitClusterResponse = await axios.get('geojson/quit-center.geojson');
         let quitData = (quitClusterResponse.data.features);
         let quitMarkerCluster = L.markerClusterGroup();
 
         for (data of quitData) {
             let lat = data.geometry.coordinates[1];
             let lng = data.geometry.coordinates[0];
             L.marker([lat, lng]).addTo(quitMarkerCluster)
 }
 quitMarkerCluster.addTo(map)
 })




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
    /*let overLayers = {
        'Quit Ceners': quitCenterLayer,
        'Pharmacy Stores': pharmaLayer,
        'Breast Centers': breastLayer,
        'Cervical Centers': cervicalLayer
    };*/
    L.control.layers({
        'Quit Ceners': quitCenterLayer,
        'Pharmacy Stores': pharmaLayer,
        'Breast Centers': breastLayer,
        'Cervical Centers': cervicalLayer
    }).addTo(map)
    L.control.layers(layers, {}).addTo(map);
}

main();


