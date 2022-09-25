const mongoose = require('mongoose')
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    username:String,
    DNI: String,
    password:String,
    residencia: String,
    telefono_propio:String,
    telefono_de_un_familiar:String
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)