function searchResponse(map, result, findResultLayer) {
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
        map.flyTo(latlng, 13);
        resultMarker.openPopup();

    })
    document.querySelector('#search-dropdown').appendChild(dropdownResEl);
}