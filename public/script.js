// const el = document.getElementById("outside");
// el.addEventListener("click", dumbpolice(), false);

//----------------------------Crime-------------------------------------------

// // ---Trial 1
// Getting Crime Data to the map
// fetch("/crime")
//   .then((response) => response.json())
//   // .then(data => console.log(data));
//   .then((data) => dumb(data));

// //   function dumbone(data) {
// //     const holder = data;
// //   }

// function dumb(data) {
//   const holder = data;
// //   console.log(holder);

// // Putting markers on Map
//   for (var i = 0; i < holder.length; ++i) {
//     //   console.log(holder[i].lat);
//     const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
//     mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup(); //Add description of marker, Crime type.
//   }
// }

// // ---Trial 2--
// document.addEventListener('click', async (e) => {
//     e.preventDefault();
//     fetch("/crime")
//   .then((response) => response.json())
//   // .then(data => console.log(data));
//   .then((data) => dumb(data));

// //   function dumbone(data) {
// //     const holder = data;
// //   }

// function dumb(data) {
//   const holder = data;
// //   console.log(holder);

// // Putting markers on Map
//   for (var i = 0; i < holder.length; ++i) {
//     //   console.log(holder[i].lat);
//     const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
//     mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup(); //Add description of marker, Crime type.
//   }
// }
// })
function crimeData() {
  fetch("/crime")
    .then((response) => response.json())
    // .then(data => console.log(data));
    .then((data) => dumb(data));

  //   function dumbone(data) {
  //     const holder = data;
  //   }

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
}

document
  .querySelector("input[name=Crime]")
  .addEventListener("change", function () {
    if (this.checked) {
      mapLayer.addLayer(crimeData());
    } else {
      mapLayer.removeLayer(crimeData());
    }
  }); //Adding/ removing(attempt) the layer from map with check box click or not.

//--------------------------End Crime--------------------------------

//------------------------------Police--------------------------------------------

//Maybe add code for Police Stations below. Tried this but overwrites crime data...
// //Trial 1:
// document.addEventListener('click', async (e) => {
//     e.preventDefault();
//     fetch ("/police")
//   .then((responseP) => responseP.json())
//   .then((pol) => dumbpolice(pol));
// function dumbpolice(police) {
//   const holderpolice = police;
//     // console.log(holderpolice);

// // Putting Police on Map
//   for (var i = 0; i < holderpolice.length; ++i) {
//     //   console.log(holder[i].lat);
//     const polIcon = L.icon({   //added a icon to identify Police Stations.
//         iconUrl: 'Police-icon.png',
//         iconSize: [30, 14],
//         iconAnchor: [15, 12],
//         popupAnchor: [15, 12],
//     });

//     const markPol = L.marker([holderpolice[i].lat, holderpolice[i].lon],{icon: polIcon}).addTo(ourmap);
//     markPol.bindPopup(holderpolice[i].name + " Police Station").openPopup(); //Add description of Police.
//   }
// }
// })

//------------------------------End of Police---------------------------

//-----------------------------Hospital----------------------------------

// document.addEventListener('click', async (e) => {
//     e.preventDefault();
//     fetch ("/hospital")
//   .then((responseP) => responseP.json())
//   .then((hos) => dumbhospital(hos));
// function dumbhospital(hospital) {
//   const holderhospital = hospital;
//     // console.log(holderpolice);

// // Putting Hospital on Map
//   for (var i = 0; i < holderhospital.length; ++i) {
//     //   console.log(holder[i].lat);
//     const hosIcon = L.icon({   //added a icon to identify Hospital.
//         iconUrl: 'hospital-icon.png',
//         iconSize: [30, 14],
//         iconAnchor: [15, 12],
//         popupAnchor: [15, 12],
//     });

//     const markhos = L.marker([holderhospital[i].lat, holderhospital[i].lon],{icon: hosIcon}).addTo(ourmap);
//     markhos.bindPopup(holderhospital[i].name + " Hospital").openPopup(); //Add description of Police.
//   }
// }
// })

// -----------------------------------End of Hospital-----------------

const mapLayer = L.layerGroup([]); //Trial pf adding layer

function poilceData() {
  fetch("/police")
    .then((responseP) => responseP.json())
    .then((pol) => dumbpolice(pol));
  function dumbpolice(police) {
    const holderpolice = police;
    // console.log(holderpolice);
    // Putting Police on Map
    for (var i = 0; i < holderpolice.length; ++i) {
      //   console.log(holder[i].lat);
      const polIcon = L.icon({
        //added a icon to identify Police Stations.
        iconUrl: "Police-icon.png",
        iconSize: [30, 14],
        iconAnchor: [15, 12],
        popupAnchor: [15, 12],
      });

      const markPol = L.marker([holderpolice[i].lat, holderpolice[i].lon], {
        icon: polIcon,
      }).addTo(ourmap);
      markPol.bindPopup(holderpolice[i].name + " Police Station").openPopup(); //Add description of Police.
    }
  }
}

function hospitalData() {
  fetch("/hospital")
    .then((responseP) => responseP.json())
    .then((hos) => dumbhospital(hos));
  function dumbhospital(hospital) {
    const holderhospital = hospital;
    // console.log(holderpolice);

    // Putting Hospital on Map
    for (var i = 0; i < holderhospital.length; ++i) {
      //   console.log(holder[i].lat);
      const hosIcon = L.icon({
        //added a icon to identify Hospital.
        iconUrl: "hospital-icon.png",
        iconSize: [30, 14],
        iconAnchor: [15, 12],
        popupAnchor: [15, 12],
      });

      const markhos = L.marker([holderhospital[i].lat, holderhospital[i].lon], {
        icon: hosIcon,
      }).addTo(ourmap);
      markhos.bindPopup(holderhospital[i].name + " Hospital").openPopup(); //Add description of Police.
    }
  }
}

document
  .querySelector("input[name=police]")
  .addEventListener("change", function () {
    if (this.checked) {
      mapLayer.addLayer(poilceData());
    } else {
      mapLayer.removeLayer(poilceData());
    }
  }); //Adding/ removing(attempt) the layer from map with check box click or not.

document
  .querySelector("input[name=hospital]")
  .addEventListener("change", function () {
    if (this.checked) mapLayer.addLayer(hospitalData());
    else mapLayer.removeLayer(hospitalData());
  }); //A

//-----------------------------Map--------------------
// Making the Map
const ourmap = L.map("map").setView([38.878, -76.8317], 10);
const murl =
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GaO7GYJ3WBq7xKVynSqM";
const attribution =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

L.tileLayer(murl, { attribution }).addTo(ourmap);
// mapLayer.addTo(ourmap) // does not quite work.

//-------------------------end of map-----------------

// Maybe add some filter codes below.

// SCRAPP CODE!!!!!!!! LOOK OVER BEFORE DELETION!!!!!!!

// function matchingStreets() {
//     return dumbone().filter() => {
//       const re = new RegExp(wordToMatch, 'gi');
//       return piece.name.match(re) || piece.category.match(re) || piece.zip.match(re);
//     };
//   }

// function matchingstreetcrime() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('textinput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("searchWrapper");
//     li = ul.getElementsByTagName(dumb());

//     for(i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.
//     }
// }

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
