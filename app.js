require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes/index')
const mongoose = require('mongoose')

//
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

//
app.set('view engine', 'ejs')

//
const uri = 'mongodb+srv://pms:'+ process.env.MONGODB +''+ process.env.LINK

try {
    mongoose.connect(
        uri,
        () => console.log('Mongoose is connected')
    )
} catch (e) {
    console.log('could not connect');
}

//
app.use(router)

//
app.listen(3000, () => {
    console.log('Service running on port 3000');
})