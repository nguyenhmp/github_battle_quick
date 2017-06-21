console.log('friends model');
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  login:String,
  avatar_url:String,
  public_repos:Number,
  followers: Number,
  id:Number,
  score:Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
// build your friend schema and add it to the mongoose.models