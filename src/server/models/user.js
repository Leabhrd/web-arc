const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  accessToken: String,
  refreshToken: String,
})

userSchema.pre('save', ()=>{
  const user = this;
})

module.exports = mongoose.model('User', userSchema);