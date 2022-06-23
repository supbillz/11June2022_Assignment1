const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3d8HsaUFx6m1QmbJGDLHwSmEK4DMnknQuUWYfjP/8CdI=";
const headers = {
    "Accept": 'application/json',
    "Authorization": API_KEY
}

async function find(lat, lng, query) {
    let ll = lat + "," + lng;
    let response = await axios.get(BASE_API_URL + "/places/search", {
        "headers": headers,
        "params": {
            'll': ll,
            'query': query
        }
    })
    return response.data
}