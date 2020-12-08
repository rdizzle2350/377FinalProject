// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// import express from 'express';
// import dotenv from 'dotenv';
// import fetch from 'node-fetch';


// dotenv.config();

// const dataStore = [];

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

// async function getData() {
//   const crimeData = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
//   const policeData2 = await fetch('https://data.princegeorgescountymd.gov/resource/qkn8-5mhu.json');
//   const hospData3 = await fetch('https://data.princegeorgescountymd.gov/resource/9r2z-mnpp.json');

//   const data = crimeData.concat(policeData2, hospData3);
//   console.log(data)
//   return data
// }

// app.route('/api')
//   .get((req, res) => {
//     const reply = data.dataStore.filter(f => {f.crime === true})
//       res.json({crime : reply})
//   });

// app.route('/api')

//   .post(async (req, res) => { 
//     console.log('POST request detected');
//     console.log('Form data in req.body', req.body);

//     const crimeData = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
//     const json = await crimeData.json;
//     console.log('data from fetch', json);
//     res.json(json);
//   });

// app.listen(port, async () => {
//   console.log(`Example app listening on port ${port}!`);
//   // dataStore = await getData().catch(err => console.error(err));
//   console.log('data retrieved', data);
// });


// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// filters the api and gets the crime data we want. to veiw do npm start and tpye in chrome localhost:3000/"api name"
function getCrimeData(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";


  fetch(baseURL)
    .then(data => data.json())
    // console.log(data)
    .then((data) => {
      const crimefiltered = data.map((i) => ({
        date: i.date,
        lat: i.latitude,
        lon: i.longitude,
        crime: i.clearance_code_inc_type,
        street: i.street_address
      }));
      return crimefiltered;
    })
    .then((data) => {
      res.send( data ); 
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/error");
    });
}

app.get("/crime", (req, res) => {
  getCrimeData(req, res);
});

// filters the api and gets the police data we want
function getPoliceData(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/qkn8-5mhu.json";


  fetch(baseURL)
    .then(data => data.json())
    // console.log(data)
    .then(data => {
      const filtered = data.map((i) => ({
        name: i.station_name,
        lat: i.station_address.latitude,
        lon: i.station_address.longitude,
        phone: i.telephone
      }));
      return filtered;
    })

    .then(data => {
      res.send(data); // return data to the front end
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/error");
    });
}

app.get("/police", (req, res) => {
  getPoliceData(req, res);
});

// filters the api and gets the hospital data we want
function getHospitalData(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/9r2z-mnpp.json";


  fetch(baseURL)
    .then((data) => data.json())
    // console.log(data)
    .then((data) => {
      const filtered = data.map((i) => ({
        name: i.facility_name,
        lat: i.address.latitude,
        lon: i.address.longitude,
        phone: i.telephone
      }));
      return filtered;
    })

    .then((data) => {
      res.send({ data: data }); // returns data to the front end
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/error");
    });
}

app.get("/hospital", (req, res) => {
  getHospitalData(req, res);
});

// filters the api and gets the hospital data we want
function getFireData(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/bzf2-94qx.json";


  fetch(baseURL)
    .then((data) => data.json())
    // console.log(data)
    .then((data) => {
      const filtered = data.map((i) => ({
        name: i.station_name,
        lat: i.location_1.latitude,
        lon: i.location_1.longitude
      }));
      return filtered;
    })

    .then((data) => {
      res.send({ data: data }); // returns data to the front end
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/error");
    });
}

app.get("/fire", (req, res) => {
  getFireData(req, res);
});

app.route('/api')
  // .get(async (req, res) => {
  //   console.log('GET request detected');
  //   console.log('fetch request data', json);
  // })
  .post(async (req, res) => {
    console.log('POST request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    res.json(json);
    // console.log('Form data in res.body', req.body);
    // res.json(countries);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
