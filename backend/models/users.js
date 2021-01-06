const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  /* More info for user should be used here */
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
