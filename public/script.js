function matchingStreet(streetMatch, data) {
    return data.filter((item) => {
        const reg = new RegExp(streetMatch, 'gi');
        return item.street_address.match(reg) || item.latitude.match(reg) || item.longitude.match(reg);
    });
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.9897, lng: 76.9378 }
  });
  return map;
}

async function mainthread() {
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/izam-a38m.json')
    const json = await data.json();
    const input = document.querySelector('input[type="text"]');
    input.addEventListener('input', (i) => {
        const makematch = intMap(i, json);
        const target = document.querySelector('.mapContainer');
        target.innerHTML = makematch;
    });
}

window.onload = mainThread;