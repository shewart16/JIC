const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/login', (req,res) => {
    res.render('Authentication/login')
})

router.get('/register', (req,res) => {
    res.render('Authentification/register')
})

router.post('/register', (req,res) => {
    const username = req.body.username
    res.send(username)
})

module.exports = router