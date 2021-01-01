 const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    service: { type: String, required: true },
    phone: { type: Number, required: true },
    hourly: { type: Number, required: true },
    distance: { type: Number, required: true },
    houseNumber: { type: Number, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    userTitle: { type: String},
    bio: {type: String},
    twitter: {type: String}
    
});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;