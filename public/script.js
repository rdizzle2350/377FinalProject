function matchingStreet(streetMatch, data) {
    return data.filter((item) => {
        const reg = new RegExp(streetMatch, 'gi');
        return item.street_address.match(reg) || item.zip.match(reg);
    });
}

// fucntion getPoliceLongandLat(data) {

// }

function showMatches(i, info) {
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

function filterchoice(i, info) {


}

// async function main() {
//     const data = await Promise.all([
//         fetch('https://data.princegeorgescountymd.gov/resource/hnpv-i4z2.json'),
//         fetch('https://data.princegeorgescountymd.gov/resource/qkn8-5mhu.json'),
//         fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json')
//     ]);
//     console.log(data);
//     const json = await data.json();
//     const input = document.querySelector('input[type="text"]');
//     input.addEventListener('input', (i) => {
//         const showM = showMatches(i, json);
//         const target = document.querySelector('mapContainer');
//         target.innerHTML = showM;
//     });
// }
// window.onload = main;
// let map;



function dataret() {
    let firstCall = fetch('https://data.princegeorgescountymd.gov/resource/hnpv-i4z2.json');
    let secCall =  fetch('https://data.princegeorgescountymd.gov/resource/qkn8-5mhu.json');
    let thirdCall = fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');

    Promise.all([firstCall, secCall, thirdCall])
        .then(value => Promise.all(value.map(value.json())))
        .then(finalVal => {
            let firstCall = finalVal[0];
            let secCall = finalVal[1];
            let thirdCall = finalVal[2];
            const target = document.querySelector('.mapContainer');
            target.innerHTML = finalVal;
        });
}
window.onload = dataret;
