async function main() {


    let map = boilerMap();

    // search-find result layer
    let findResultLayer = L.layerGroup();
    findResultLayer.addTo(map);

    window.addEventListener("DOMContentLoaded", function () {

        // search button event listener
        document.querySelector("#btnSearch").addEventListener('click', async function () {
            let query = document.querySelector("#inputQuery").value;
            let center = map.getBounds().getCenter();
            let data = await find(center.lat, center.lng, query);



            for (let result of data.results) {
                let latlng = [result.geocodes.main.latitude, result.geocodes.main.longitude]
                let resultMarker = L.marker(latlng);
                resultMarker.bindPopup(`
                <h1>${result.name}</h1>
                <h1>${result.location.formatted_address}</h1>
                `)
                resultMarker.addTo(findResultLayer);

                // search dropdown
                let dropdownResEl = document.createElement('div');
                dropdownResEl.className = 'search-dropdown';
                dropdownResEl.innerHTML = result.name;
                dropdownResEl.addEventListener('click', function () {
                    map.flyTo(latlng, 15);
                    resultMarker.openPopup();

                })
                document.querySelector('#search-dropdown').appendChild(dropdownResEl);
            }

        })
    })

    /*let myIcon = L.icon({
        iconUrl: 'medical-logo.jpg',
        iconSize: [32, 32]
    });*/

    async function loadCcenterJson() {

        let cervicalResponse = await axios.get('geojson/cervical-center.geojson');
       let cervicalLayer = L.geoJson(cervicalResponse.data, {
            pointToLayer: function (geoJsonPoint, latlng) {
                return L.marker(latlng, {
                   // icon: myIcon
                });
            },
            onEachFeature: function (feature, layer) {

                layer.bindPopup(feature.properties.Description);
            }
        })
        return cervicalLayer;
    }
  

    async function loadQuitGeo() {

        let response = await axios.get('geojson/quit-center.geojson');
       let quitCenterLayer = L.geoJson(response.data, {
            pointToLayer: function (geoJsonPoint, latlng) {
                return L.marker(latlng, {
                   // icon: myIcon
                });
            },
            onEachFeature: function (feature, layer) {

                layer.bindPopup(feature.properties.Description);
            }
    
        })
        return quitCenterLayer;
    }
    

    async function loadPstoreJson() {

        let pharmaResponse = await axios.get('geojson/pharma-store.geojson');
       let pharmaLayer = L.geoJson(pharmaResponse.data, {
            pointToLayer: function (geoJsonPoint, latlng) {
                return L.marker(latlng, {
                   // icon: myIcon
                });
            },
            onEachFeature: function (feature, layer) {

                layer.bindPopup(feature.properties.Description);
            }
    
        })
        return pharmaLayer;
    }

    async function loadBcenterJson() {

        let breastResponse = await axios.get('geojson/breast-center.geojson');
        let breastLayer = L.geoJson(breastResponse.data, {
            pointToLayer: function (geoJsonPoint, latlng) {
                return L.marker(latlng, {
                   // icon: myIcon
                });
            },
            onEachFeature: function (feature, layer) {

                layer.bindPopup(feature.properties.Description);
            }
    
        })
        return breastLayer;
    }

    let quiteReq = loadQuitGeo();
    let pstoreReq = loadPstoreJson();
    let bcenterReq = loadBcenterJson();
    let ccenterReq = loadCcenterJson();

    quitCenterLayer = await quiteReq;
     pharmaLayer = await pstoreReq;
     breastLayer = await bcenterReq;
     cervicalLayer = await ccenterReq;
   

    L.control.layers({
        'Quit Ceners': quitCenterLayer,
        'Pharmacy Stores': pharmaLayer,
        'Breast Centers': breastLayer,
        'Cervical Centers': cervicalLayer
    }).addTo(map)

    L.control.layers(layers, {}).addTo(map);


}

main();



document.querySelector('#btnhome').addEventListener('click', function () {
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages) {
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    let page1 = document.querySelector('#page-1');
    page1.classList.add('show');
    page1.classList.remove('hidedn');
})


document.querySelector('#btnmap').addEventListener('click', function () {
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages) {
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    let page2 = document.querySelector('#page-2');
    page2.classList.add('show');
    page2.classList.remove('hidden');
})