
$(function () {



    // to initialize the map
    initMap();

    let findResultLayer = L.layerGroup();
    findResultLayer.addTo(map);
    // to call geojson function and load layers
    getGeoData('geojson/breast-center.geojson', function (res) {
        displayGeoMarkers(res);
    });


    //SPA
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


    document.querySelector('#btnQuitCenter').addEventListener('click', function () {
        getGeoData('geojson/quit-center.geojson', function (res) {
            displayGeoMarkers(res);
        });
    })

    document.querySelector('#btnPharmaStore').addEventListener('click', function () {
        getGeoData('geojson/pharma-store.geojson', function (res) {
            displayGeoMarkers(res);
        });
    })

    document.querySelector('#btnCervicalCenter').addEventListener('click', function () {
        getGeoData('geojson/cervical-center.geojson', function (res) {
            displayGeoMarkers(res);
        });
    })

    // search button event listener
    /*/document.querySelector('#btnSearch').addEventListener('click',  async function (){
     let response = await axios.get(BASE_API_URL);
 ;        let query = document.querySelector("#inputQuery").value;
        // let center = map.getBounds().getCenter();
         let data = find(response.lat, response.lng, query);
 
         for (let result of Object.keys (data.result)) {
             searchResponse(map, result, findResultLayer);
         };
 
     })*/

})