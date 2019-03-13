const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  state: {
    type: String
  },
  role: {
    type: String,
    default: 'User'
  }



});


module.exports = mongoose.model('User', User);
