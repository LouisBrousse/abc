// app.js
import express from 'express'

import cookieParser from 'cookie-parser'

import { sessionMiddleware } from './cookie-session-middleware.mjs'

const app = express()

// Set EJS as templating engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

// parse cookies
app.use(cookieParser())

// create or retrieve session from cookie 'sessionId'
app.use(sessionMiddleware)

let password = null
let sessionid = null
let sessionacces = null

let message = ''


// Home page
app.get('/', (req, res) => {
    console.log('je passe dans /')
    res.render('choixporte')
 })

 app.get('/validateSessiona', function(req, res){
    console.log('je passe dans /validateSessiona')
    //récupérer l'ID de Session
    sessionid = req?.session.id
    console.log('sessionid', sessionid)
    //récuoérer la liste d'acces
    sessionacces = req?.session.accesgranted
    if (sessionid !== null && sessionacces.includes('a')){
        message = 'Accès déjà accordé à A'
        res.render('ina', {message})
    }else {
        res.redirect('/portea')
    }
    })

app.get('/validateSessionb', function(req, res){
    console.log('je passe dans /validateSessionb')
    //récupérer l'ID de Session
    sessionid = req?.session.id
    console.log('sessionid', sessionid)
    //récuoérer la liste d'acces
    sessionacces = req?.session.accesgranted
    if (sessionid !== null && sessionacces.includes('b')){
        message = 'Accès déjà accordé à B'
        res.render('inb', {message})
    }else {
        res.redirect('/porteb')
    }
    })

app.get('/validateSessionc', function(req, res){
    console.log('je passe dans /validateSessionc')
    //récupérer l'ID de Session
    sessionid = req?.session.id
    console.log('sessionid', sessionid)
    //récuoérer la liste d'acces
    sessionacces = req?.session.accesgranted
    if (sessionid !== null && sessionacces.includes('c')){
        message = 'Accès déjà accordé à C'
        res.render('inc', {message})
    }else {
        res.redirect('/portec')
    }
    })



 // portea page
 app.get('/portea', (req, res) => {
    console.log('je passe dans /portea')
    res.render('portea')
 })

  // porteb page
  app.get('/porteb', (req, res) => {
    console.log('je passe dans /porteb')
    res.render('porteb')
 })

  // portec page
  app.get('/portec', (req, res) => {
    console.log('je passe dans /portec')
    res.render('portec')
 })

app.post('/validatePassworda', function(request, response){
    console.log('je passe dans /validatePassworda')
    // Récupérer la valeur du champ de saisie du mot de passe
    password = request.body.passworda;
    //récupérer l'ID de Session
    sessionid = request?.session.id
    console.log('sessionid', sessionid)
    //récuoérer la liste d'acces
    sessionacces = request?.session.accesgranted
    // contrôle du password
    if (password === 'aaa') {
        // si ok?
        sessionacces.push('a')
        message = ('Accès accordé à A', console.log(sessionacces))
        response.render('ina', {message});
    } else {
        response.send('mot de passe incorrect. Veuillez réessayer!')
    }
})

app.post('/validatePasswordb', function(request, response){
    console.log('je passe dans /validatePasswordb')
    // Récupérer la valeur du champ de saisie du mot de passe
    password = request.body.passwordb;
    //récupérer l'ID de Session
    sessionid = request?.session.id
    console.log('sessionid', sessionid)
    //récuoérer la liste d'acces
    sessionacces = request?.session.accesgranted
    // contrôle du password
    if (password === 'bbb') {
        // si ok?
        sessionacces.push('b')
        message = ('Accès accordé à B', console.log(sessionacces))
        response.render('inb', {message});
    } else {
        response.send('mot de passe incorrect. Veuillez réessayer!')
    }
})

app.post('/validatePasswordc', function(request, response){
    console.log('je passe dans /validatePasswordc')
    // Récupérer la valeur du champ de saisie du mot de passe
    password = request.body.passwordc;
    //récupérer l'ID de Session
    sessionid = request?.session.id
    console.log('sessionid', sessionid)
    //récuoérer la liste d'acces
    sessionacces = request?.session.accesgranted
    // contrôle du password
    if (password === 'ccc') {
        // si ok?
        sessionacces.push('c')
        message = ('Accès accordé à C', console.log(sessionacces))
        response.render('inc', {message});
    } else {
        response.send('mot de passe incorrect. Veuillez réessayer!')
    }
})



 // portea page
 app.get('/ina', (req, res) => {
    res.render('ina')
 })

 // portea page
 app.get('/inb', (req, res) => {
    res.render('inb')
 })

  // portea page
  app.get('/inc', (req, res) => {
    res.render('inc')
 })
          
app.listen(3005, function() {
    console.log('listening to port 3005')
 })