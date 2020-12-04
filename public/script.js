



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

function initMap() {
    // The location of college park
    const colpar = { lat: 38.9897, lng: -76.9378 };
    // The map, centered at college park
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: colpar,
    });
}

