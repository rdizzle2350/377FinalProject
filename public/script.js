



function matchingStreetCrime(streetMatch, data) {
    return data.filter((item) => {
        const reg = new RegExp(streetMatch, 'gi');
        return item.street_address.match(reg);
    });
}

// fucntion getPoliceLongandLat(data) {

// }

// function calldata(getdata) {
//     return getdata
// }

function showCrimeMatches(i, info) {
    console.log(i.target.value);
    const matching = matchingStreet(i.target.value, info);
    let placeInfoHTML = matching.map((service) => `
        <li>
            <span class="name"><b>${service.station_name}</b></span><br>
            <span class="telephone"><b>${service.telephone}</b></span><br>
        </li>
    `);
    if (i.target.value.length == 0) {
        placeInfoHTML = [];
    }
    return placeInfoHTML;
}


// function filterchoice(i, info) {


// }


// Map functions
const ourmap = L.map('map').setView([38.8780, -76.8317], 10);

const murl = 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GaO7GYJ3WBq7xKVynSqM'
const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'

L.tileLayer(murl,{attribution}).addTo(ourmap);

const marker = L.marker([38.8780, -76.8317]).addTo(ourmap);

  
