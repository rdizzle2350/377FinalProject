//-----------------Crime Filters-----------------
window.onload = function crimeData() {
  fetch("/crime")
    .then((response) => response.json())
    // .then(data => console.log(data));
    .then((data) => dumb(data));
}


//this function returns the data does all of the work
function dumb(data) {
  const holder = data;
  
  document
  .querySelector("input[name=Crime]")
  .addEventListener("change", function () {
    if (this.checked) {
        for (var i=0; i < holder.length; i++){
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
        }
    }
  });
  
  // theft from auto markers
  document.getElementById('THEFT FROM AUTO')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'THEFT FROM AUTO') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // sex offense markers
  document.getElementById('SEX OFFENSE')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'SEX OFFENSE') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // AUTO, STOLEN & RECOVERED markers
  document.getElementById('AUTO, STOLEN & RECOVERED')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'AUTO, STOLEN & RECOVERED') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // ASSAULT, WEAPON markers
  document.getElementById('ASSAULT, WEAPON')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'ASSAULT, WEAPON') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // ROBBERY, OTHER markers
  document.getElementById('ROBBERY, OTHER')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'ROBBERY, OTHER') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // AUTO, STOLEN markers
  document.getElementById('AUTO, STOLEN')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'AUTO, STOLEN') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // VANDALISM markers
  document.getElementById('VANDALISM')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'VANDALISM') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // ASSAULT markers
  document.getElementById('ASSAULT')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'ASSAULT') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // THEFT markers
  document.getElementById('THEFT')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'THEFT') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // B & E, RESIDENTIAL markers
  document.getElementById('B & E, RESIDENTIAL')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'B & E, RESIDENTIAL') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });  

  // ASSAULT, SHOOTING markers
  document.getElementById('ASSAULT, SHOOTING')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'ASSAULT, SHOOTING') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });  

  // ROBBERY, VEHICLE markers
  document.getElementById('ROBBERY, VEHICLE')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'ROBBERY, VEHICLE') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // ROBBERY, RESIDENTIAL markers
  document.getElementById('ROBBERY, RESIDENTIAL')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'ROBBERY, RESIDENTIAL') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

  // HOMICIDE markers
  document.getElementById('HOMICIDE')
  .addEventListener("change", function () {
    if (this.checked) {
      console.log('test');
        for (var i=0; i < holder.length; i++){
            if (holder[i].crime == 'HOMICIDE') {
              
                const mark = L.marker([holder[i].lat, holder[i].lon]).addTo(ourmap);
                mark.bindPopup("Crime Alert: " + holder[i].crime).openPopup();
            }
        }
    }
  });

}

// ---------------------------End of Crime Filters-----------------------

//----------------------------Police Data ---------------
const mapLayer = L.layerGroup([]); //Trial pf adding layer

function poilceData() {
  fetch("/police")
    .then((responseP) => responseP.json())
    .then((pol) => dumbpolice(pol,markPol));
  const markPol = L.marker();
  function dumbpolice(police,markP) {
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

       markP = L.marker([holderpolice[i].lat, holderpolice[i].lon], {
        icon: polIcon,
      })
      markP.bindPopup(holderpolice[i].name + " Police Station").openPopup(); //Add description of Police.
      
    }
  }return markP;
}

//--------------End of Police Data----------------

//--------------------Hospital Data----------------

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


//-----------------------------Map--------------------
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


// Making the Map
const ourmap = L.map("map").setView([38.878, -76.8317], 10);
const murl =
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=GaO7GYJ3WBq7xKVynSqM";
const attribution =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

L.tileLayer(murl, { attribution }).addTo(ourmap);
 mapLayer.addTo(ourmap) // does not quite work.

//-------------------------end of map-----------------


