const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    name: { type: String, required: true },
    service: { type: String, required: true },
    phone: { type: Number, required: true },
    hourly: { type: Number, required: true },
    distance: { type: Number, required: true },
});

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services;