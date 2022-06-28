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





    //  let clusterQuitCenter = L.markerClusterGroup();
    //  clusterQuitCenter.addTo(map);


}

main();

async function geoQuitCenter() {
   // let clusterQuitCenter = L.markerClusterGroup();
     let response = await axios.get('geojson/quit-center.geojson')
     let quitCenterLayer = L.geoJson(response.data, {
         onEachFeature: function (feature, marker) {
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
             marker.bindPopup(loadInfo)
         },
       pointToLayer: function (feature, latlng) {
            return L.marker(latlng)
       }
     })
     
     quitCenterLayer.addTo(map);
    }

 
    geoQuitCenter();



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