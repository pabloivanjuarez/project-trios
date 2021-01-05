const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Services"
);

const servicesSeed = [
  {
    name: "Paul The Computer Guy",
    email: "user123@123.com",
    service: "Computer Repair",
    phone: 555-555-5555,
    hourly: 29,
    distance: 2.6,
    houseNumber: 2211,
    street: "Ne Tillamook",
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
    name: "Sam Smith",
    service: "iPhone Repair",
    phone: 456-111-5555,
    hourly: 20,
    distance: 5.6
  },
  {
    name: "Sarah Jenkins",
    service: "Microsoft Word",
    phone: 123-456-789,
    hourly: 19,
    distance: 0.5
  },
  {
    name: "Katie Black",
    service: "Facebook Help",
    phone: 541-123-4567,
    hourly: 35,
    distance: 7
  },
  {
    name: "Gavin Hope",
    service: "Cable Box Repair",
    phone: 503-678-9102,
    hourly: 45,
    distance: 1.6
  },
  {
    name: "Alisha Benson",
    service: "Printing & Fax",
    phone: 123-456-789,
    hourly: 29,
    distance: 2
  }
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