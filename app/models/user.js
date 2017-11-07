const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  name: String,
  email: String,
  number: String,
  password:String,
  address:String
});

// middleware -----

// create the model
const userModel = mongoose.model('User', userSchema);

// export the model
module.exports = userModel;


