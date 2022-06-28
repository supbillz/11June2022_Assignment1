

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


