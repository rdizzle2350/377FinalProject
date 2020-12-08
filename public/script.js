// Getting Crime Data to the map
fetch("/crime")
  .then((response) => response.json())
  // .then(data => console.log(data));
  .then((data) => dumb(data));

function dumb(data) {
  const holder = data;
//   console.log(holder);

// Putting markers on Map
  for (var i = 0; i < holder.length; ++i) {
    //   console.log(holder[i].lat);
    const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
    mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup(); //Add description of marker, Crime type.
  }
}

//Maybe add code for Police Stations below.



// Making the Map
const ourmap = L.map("map").setView([38.878, -76.8317], 10);
const murl =
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GaO7GYJ3WBq7xKVynSqM";
const attribution =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

L.tileLayer(murl, { attribution }).addTo(ourmap);

// Maybe add some filter codes below.





// SCRAPP CODE!!!!!!!! LOOK OVER BEFORE DELETION!!!!!!!

// function showCrimeMatches(i, info) {
//     console.log(i.target.value);
//     const matching = matchingStreet(i.target.value, info);
//     let placeInfoHTML = matching.map((service) => `
//         <li>
//             <span class="name"><b>${service.station_name}</b></span><br>
//             <span class="telephone"><b>${service.telephone}</b></span><br>
//         </li>
//     `);
//     if (i.target.value.length == 0) {
//         placeInfoHTML = [];
//     }
//     return placeInfoHTML;
// }


//MAP FUNCTIONS SCRAP!!
//const marker = L.marker([38.878, -76.8317]).addTo(ourmap);

// for (var i = 0; i < data.length; ++i) {
//   console.log(data[i].lat);
//   console.log(data[i].lon);
//   const mark = L.marker([data[i].lat, data[i].lon]).addTo(ourmap); // makes markers
//   mark.bindPopup("Crime Alert:").openPopup();// add marker description, crime type.
// }


// crimeD = getcrimeDa;
// for (var i=0; i < crimeD.length; ++i) {
//     L.marker([crimeD[i].lat, crimeD[i].lon]).addTo(ourmap)
// }

// array = JSON.parse(crimefiltered);

// console.log(array);

// document.querySelector(async (e) => {
//     e.preventDefault(); // this stops whatever the browser wanted to do itself.
//     const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
//     fetch('/api', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/crime'
//       },
//     })
//        // pulled 10 countires from the array and selected their names
//         for (var i=0; i < data.length; ++i) {
//             L.marker([data[i].lat, data[i].lon]).addTo(ourmap)
//         }
//         });
