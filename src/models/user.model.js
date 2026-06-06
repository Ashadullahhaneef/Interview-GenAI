const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already taken"],
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: [true, "Account already exists with this email address"],
    required: true,
  },
  password:{
    type:String,
    required:true,

  }
});

const userModel = mongoose.model("users",userSchema);
//mongoose ke andar ek method hota hai jise model kahte hai wo userSchema model ko db ke users naam ke collection store kar deta hai.
module.exports = userModel;
