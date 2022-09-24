const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:String,
    DNI: String,
    password:String,
    residencia: String,
    telefono_propio:String,
    telefono_de_un_familiar:String
})

module.exports = mongoose.model('User', userSchema)