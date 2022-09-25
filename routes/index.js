const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/user')
const session = require('express-session');
const passport = require('passport')

app.use(session({
    secret: 'little secret',
    resave: false,
    saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())


passport.serializeUser(function(user, done) {
    done(null, user.id);
  })

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
  })
})

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
    User.register({username:req.body.username, DNI: req.body.DNI, residencia: req.body.residencia, telefono_propio: req.body.telefono_propio, telefono_de_un_familiar: req.body.telefono_de_un_familiar  }, req.body.password, (err, user) => {
        if (err) {
            console.log(err)
            res.redirect('/register')
        }else{
            passport.authenticate('local')(req,res, () => {
                res.redirect('/')
            })
        }
    })
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
  })

module.exports = router