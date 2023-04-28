const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    dateOfBirth:{
        type:Date,
    },
    gender:{
        type:String,
    },
    country:{
        type:String,
    },
    state: {
        type:String,
    },
    town: {
        type:String,
    },
    zipcode: {
        type:String,
    },
    phone1: {
        type:Number,
    },
    phone2: {
        type:Number,
    },
    email: {
        type:String,
    },

})
userSchema.plugin(passportLocalMongoose,);
module.exports = mongoose.model("Register",userSchema)