/*async function main() {


    let map = boilerMap();

  //  let findResultLayer = L.layerGroup();
   // findResultLayer.addTo(map);

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

    let quiteReq = loadQuitGeo();
    let pstoreReq = loadPstoreJson();
    let bcenterReq = loadBcenterJson();
    let ccenterReq = loadCcenterJson();

    let quitCenterLayer = await quiteReq;
    let pharmaLayer = await pstoreReq;
    let breastLayer = await bcenterReq;
    let cervicalLayer = await ccenterReq;

let quitCenDataCon;
    let pharmaDataCon;
    let cervicalCenDataCon;
    let breastCenDataCon;

    let quitCenShowLayer;
    let pharmaShowLayer;
    let cervCenShowLayer;
    let breaCenShowLayer;

    async function loadQcenterJson() {

        //let markers = L.markerClusterGroup()
        let response = await axios.get('geojson/quit-center.geojson');
        let quitCenterLayer = L.geoJson(response.data, {
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.Description);
            }
            
        })

        return quitCenterLayer;
    }
 
let myIcon = L.Icon({
    iconUrl: 'images/medical-logo.jpg',
    iconSize: [32,32]
})
   
  async function loadQuitGeo() {
        let response = await axios.get('geojson/quit-center.geojson');
        let lat = data.geometry.coordinates[1];
        let lng = data.geometry.coordinates[0];
         quitCenterLayer = L.geoJson(response.data) {
   
            poinToLayer: function (feature, lat, lng{
                return L.marker(lat, lng));
             
         }
      }
      return quitCenterLayer;


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
    let overLayers = {
        'Quit Ceners': quitCenterLayer,
        'Pharmacy Stores': pharmaLayer,
        'Breast Centers': breastLayer,
        'Cervical Centers': cervicalLayer
    };


    L.control.layers({
        'Quit Ceners': quitCenterLayer,
        'Pharmacy Stores': pharmaLayer,
        'Breast Centers': breastLayer,
        'Cervical Centers': cervicalLayer
    }).addTo(map)

    L.control.layers(layers, {}).addTo(map);
   
}

main();


document.querySelector('#btnhome').addEventListener('click', function(){
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    let page1 = document.querySelector('#page-1');
    page1.classList.add('show');
    page1.classList.remove('hidedn');
})


document.querySelector('#btnmap').addEventListener('click', function(){
    let allPages = document.querySelectorAll('.page');
    for (let page of allPages){
        page.classList.add('hidden');
        page.classList.remove('show');
    }

    let page2 = document.querySelector('#page-2');
    page2.classList.add('show');
    page2.classList.remove('hidden');
})


dump 2

async function formLayer (filename){
    let layer = L.layerGroup();
    let response = await axios.get(filename);
    for (item of response.data){
        let latlng = [features.geometry.coordinates[1], features.geometry.coordinates[0]].addTo(layer);
        latlng.bindPopup(`<h1>${features.properties.Description}</h1>`);
        
    }
    return layer;

}

let quiteReq = loadQuitGeo();
let pstoreReq = loadPstoreJson();
let bcenterReq = loadBcenterJson();
let ccenterReq = loadCcenterJson();

quitCenterLayer = await quiteReq;
pharmaLayer = await pstoreReq;
breastLayer = await bcenterReq;
cervicalLayer = await ccenterReq;

async function main() {


    let map = boilerMap();

    //search-find result layer
    let findResultLayer = L.layerGroup();
    findResultLayer.addTo(map);

    window.addEventListener("DOMContentLoaded", function () {

        // search button event listener
        document.querySelector("#btnSearch").addEventListener('click', async function () {
            let query = document.querySelector("#inputQuery").value;
            let center = map.getBounds().getCenter();
            let data = await find(center.lat, center.lng, query);

            for (let result of data.results) {
                searchResponse(map, result, findResultLayer);
            }

        })
    })

    let myIcon = L.icon({
        iconUrl: 'medical-logo.jpg',
        iconSize: [32, 32]

    });





    async function loadCcenterJson() {
        let markers = L.markerClusterGroup();
        let cervicalResponse = await axios.get('geojson/cervical-center.geojson');
        let cervicalLayer = L.geoJson(cervicalResponse.data, {
            pointToLayer: function (feature, latlng) {
                return markers.addLayer(L.circleMarker(latlng))
                // icon: myIcon
            }
        }).addTo(map);
        //onEachFeature: function (feature, layer) {

        // layer.bindPopup(feature.properties.Description);
        // }
    }
   return cervicalLayer;






async function loadQuitGeo() {

    let response = await axios.get('geojson/quit-center.geojson');
    let quitCenterLayer = L.geoJson(response.data, {
        onEachFeature: function (feature, layer) {

            layer.bindPopup(feature.properties.Description);
        },
        pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {
                // icon: myIcon
            });
        }

    })
    return quitCenterLayer;

}


async function loadPstoreJson() {

    let pharmaResponse = await axios.get('geojson/pharma-store.geojson');
    let pharmaLayer = L.geoJson(pharmaResponse.data, {
        pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {
                //icon: myIcon
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





let baselayers = {
    'Quit Centers': quitCenterLayer,
    'Pharmacy Stores': pharmaLayer,
    'Breast Centers': breastLayer,
    'Cervical Centers': cervicalLayer
}

L.control.layers(baselayers, {}).addTo(map)


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






    DUMP 3
     let quitCenResponse = await axios.get('geojson/quit-center.geojson');
        let pharmaResponse = await axios.get('geojson/pharma-store.geojson');
        let breastResponse = await axios.get('geojson/breast-center.geojson');
        let cervicalResponse = await axios.get('geojson/cervical-center.geojson');

        quitCenDataCon = quitCenResponse.data;
        pharmaDataCon = pharmaResponse.data;
        breastCenDataCon = breastResponse.data;
        cervicalCenDataCon = cervicalResponse.data;

        quitCenShowLayer = geoMapLoader(quitCenDataCon)
        pharmaShowLayer = geoMapLoader(pharmaDataCon)
        cervCenShowLayer = geoMapLoader(breastCenDataCon)
        breaCenShowLayer = geoMapLoader(cervicalCenDataCon)


         async function geoMapLoader(){
            let clusterQuitCenter = L.markerClusterGroup();
            L.geoJson(data, {
                onEachFeature: function (feature, layer) {
                    let airDiv = document.createElement('div');
                    airDiv.innerHTML = feature.properties.Description;
                    let columns = airDiv.querySelectorAll('td');
                    let name = columns[0].innerHTML;
                    let add = columns[1].innerHTML;
                    //let img = columns[2].innerHTML;
                    let loadInfo = `
                <p><span>${name}</span></p>
                <p>${add}</p>`;
                    marker.bindPopup(loadInfo)
                },
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng)
                }
            }).addTo(map);
        
            return clusterQuitCenter;
        
        }





        DUMP 4
        async function main() {


    let map = boilerTempMap();



    //search-find result layer
    let findResultLayer = L.layerGroup();
    findResultLayer.addTo(map);



    

    window.addEventListener("DOMContentLoaded", async function () {
        // search button event listener
        document.querySelector("#btnSearch").addEventListener('click', async function () {
            let query = document.querySelector("#inputQuery").value;
            let center = map.getBounds().getCenter();
            let data = await find(center.lat, center.lng, query);

            for (let result of data.results) {
                searchResponse(map, result, findResultLayer);
            }

        })


       


        async function quitCenShowLayer() {
            let quitCenterLayer = L.layerGroup()
            let quitCenResponse = await axios.get('geojson/quit-center.geojson');
            let quitCenDataCon = L.geoJson(quitCenResponse.data, {
                onEachFeature: function (feature, layer) {
    
                    layer.bindPopup(feature.properties.Description);
                }
            }).addTo(quitCenterLayer);
           // return quitCenDataCon;
           quitCenterLayer.addTo(map);
        }

        async function pharmaShowLayer() {
            let pharmaLayer = L.layerGroup()
            let pharmaResponse = await axios.get('geojson/pharma-store.geojson');
            let pharmaDataCon = L.geoJson(pharmaResponse.data, {
                onEachFeature: function (feature, layer) {
    
                    layer.bindPopup(feature.properties.Description);
                }
            }).addTo(pharmaLayer);
          //  return pharmaDataCon;
          pharmaLayer.addTo(map);
          
        }

        async function cervCenShowLayer() {
            let breastLayer = L.layerGroup()
            let breastResponse = await axios.get('geojson/breast-center.geojson');
            let breastCenDataCon = L.geoJson(breastResponse.data, {
                onEachFeature: function (feature, layer) {
    
                    layer.bindPopup(feature.properties.Description);
                }
            }).addTo(breastLayer);
//return breastCenDataCon;
breastLayer.addTo(map);
        }

        async function breaCenShowLayer() {
            let cervicalLayer = L.layerGroup()
            let cervicalResponse = await axios.get('geojson/cervical-center.geojson');
            let cervicalCenDataCon = L.geoJson(cervicalResponse.data, {
                onEachFeature: function (feature, layer) {
    
                    layer.bindPopup(feature.properties.Description);
                }
            }).addTo(cervicalLayer);
           // return cervicalCenDataCon;
           cervicalLayer.addTo(map);
        }
    



        
       


        let baselayers = {
           'Quit Centers': quitCenterLayer,
            'Pharmacy Stores': pharmaLayer,
            'Breast Centers': breastLayer,
            'Cervical Centers': cervicalLayer
        }.addTo(baselayers);
        baselayers.addTo(map);

        L.control.layers(baselayers, {}).addTo(map);
    });





    //let myIcon = L.icon({
    //  iconUrl: 'images/medical-log.jpeg',
    //iconSize: [32, 32]
    // });






}

main();









})*/