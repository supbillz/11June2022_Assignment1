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
                dropdownResEl.addEventListener('click', function(){
                    map.flyTo(latlng, 15);
                    resultMarker.openPopup();
                  
                })
                document.querySelector('#search-dropdown').appendChild(dropdownResEl);
            }
            
        })
    })
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