

/* async function geoQuitCenter() {
   //let clusterQuitCenter = L.markerClusterGroup();
    let response = await axios.get('geojson/quit-center.geojson')
    let quitCenterLayer = L.geoJson(response.data, {
        onEachFeature: function (feature, layer) {
            let airDiv = document.createElement('div');
            airDiv.innerHTML = feature.properties.Description;
            let columns = airDiv.querySelectorAll('td');
            let name = columns[0].innerHTML;
            let add = columns[1].innerHTML;
            let img = columns[2].innerHTML;
            let loadInfo = `
            <p><span>${name}</span></p>
            <p>${add}</p>
            <img src="${img}" width="70%" display:block/>`;
            layer.bindPopup(loadInfo)
        },
     //  pointToLayer: function (feature, latlng) {
           // return L.marker(latlng)
//}
    }).addTo(clusterQuitCenter);
    
    return quitCenterLayer;
}*/

let quitCenDataCon;
let pharmaDataCon;
let cervicalCenDataCon;
let breastCenDataCon;

let quitCenShowLayer;
let pharmaShowLayer;
let cervCenShowLayer;
let breaCenShowLayer;

window.addEventListener("DOMContentLoaded", async function () {
    let quitCenResponse = await axios.get('geojson/quit-center.geojson');
    let pharmaResponse = await axios.get('geojson/pharma-store.geojson');
    let breastResponse = await axios.get('geojson/breast-center.geojson');
    let cervicalResponse = await axios.get('geojson/cervical-center.geojson');

     quitCenDataCon = quitCenResponse.data;
     pharmaDataCon = pharmaResponse.data;
     breastCenDataCon = breastResponse.data;
     cervicalCenDataCon = cervicalResponse.data;

     quitCenShowLayer = geoMapLoader(map, data, columns).addTo(map);
     pharmaShowLayer = geoMapLoader(map, data, columns);
     cervCenShowLayer = geoMapLoader(map, data, columns);
     breaCenShowLayer = geoMapLoader(map, data, columns);
});