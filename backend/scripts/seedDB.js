const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Services"
);

const servicesSeed = [
  {
    name: "Paul The Computer Guy",
    email: "Paul@computers.net",
    service: "Computer Repair",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 22161,
    street: "",
    city: "Portland",
    state: "Oregon",
    zip: 97212,
    "geometry": {
              "coordinates": [
                -122.771086,
                45.430953
              ],
              "type": "Point"
            }
  },
  {
    name: "Sam Smith",
    email: "sam@iphone.net",
    service: "iPhone help",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 2211,
    street: "",
    city: "Portland",
    state: "Oregon",
    zip: 97212,
    "geometry": {
              "coordinates": [
                -122.64422,
                45.538049
              ],
              "type": "Point"
            }
  },
  {
    name: "Sarah Jenkins",
    email: "sarah@zoom.net",
    service: "Zoom & Skype",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 123,
    street: "",
    city: "Portland",
    state: "Oregon",
    zip: 97212,
    "geometry": {
              "coordinates": [
                -122.65579,
                45.510202
              ],
              "type": "Point"
            }
  },
  {
    name: "Gavin 'Tablet' Hope",
    email: "gavin@tablets.net",
    service: "Tablet help & repair",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 5611,
    street: "",
    city: "Portland",
    state: "Oregon",
    zip: 97212,
    "geometry": {
              "coordinates": [
                -122.537426,
              45.503925
              ],
              "type": "Point"
            }
  },
  {
    name: "Katie Black",
    email: "katie@comcast.net",
    service: "wifi + Internet (but I don't really help)",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 611,
    street: "",
    city: "Portland",
    state: "Oregon",
    zip: 97212,
    "geometry": {
              "coordinates": [
                -122.709149,
              45.537858
              ],
              "type": "Point"
            }
  },
  {
    name: "Alisha Benson",
    email: "alisha@printers.net",
    service: "I'll print your pictures and docs",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 5611,
    street: "",
    city: "Portland",
    state: "Oregon",
    zip: 97212,
    "geometry": {
              "coordinates": [
                -122.658104,
                45.521075
              ],
              "type": "Point"
            }
  },
];


db.Services
  .remove({})
  .then(() => db.Services.collection.insertMany(servicesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });