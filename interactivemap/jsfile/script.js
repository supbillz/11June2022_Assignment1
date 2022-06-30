async function main() {


    let map = boilerTempMap();



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





    //let myIcon = L.icon({
      //  iconUrl: 'images/medical-log.jpeg',
//iconSize: [32, 32]
   // });


  async  function geoMapLoader(map, data, columns) {
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
        }).addTo(clusterQuitCenter);

        return clusterQuitCenter;

    }



    L.control.layers({
        'Quit Ceners': quitCenDataCon,
        'Pharmacy Stores': pharmaDataCon

    });

    L.control.layers(layers, {}).addTo(map);



}

main();
geoMapLoader(map, data, columns);










// Single Page Application
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