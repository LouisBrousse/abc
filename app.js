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
let sessionida = ''
let sessionidb = ''
let sessionidc = ''
let message = ''


// Home page
app.get('/', (req, res) => {
    res.render('choixporte')
 })

 // portea page
 app.get('/portea', (req, res) => {
    res.render('portea')
 })

  // porteb page
  app.get('/porteb', (req, res) => {
    res.render('porteb')
 })

  // portec page
  app.get('/portec', (req, res) => {
    res.render('portec')
 })

 app.get('/validateSessiona', function(request, response){
    if (sessionid === sessionida){
        message = 'Accès déjà accordé à A'
        response.render('ina', {message})
    }else{
        response.redirect('/portea')
    } 
})

app.get('/validateSessionb', function(request, response){
    if (sessionid === sessionidb){
        message = 'Accès déjà accordé à B'
        response.render('inb', {message})
    }else{
        response.redirect('/porteb')
    } 
})

app.get('/validateSessionc', function(request, response){
    if (sessionid === sessionidc){
        message = 'Accès déjà accordé à C'
        response.render('inc', {message})
    }else{
        response.redirect('/portec')
    } 
})


app.post('/validatePassworda', function(request, response){
    // Récupérer la valeur du champ de saisie du mot de passe
    password = request.body.passworda;
    //récupérer l'ID de Session
    sessionid = request?.session.id
    // contrôle du password
    if (password === 'aaa') {
        // si ok?
        sessionida = sessionid
        message = 'Accès accordé à A'
        response.render('ina', {message});
    } else {
        response.send('mot de passe incorrect. Veuillez réessayer!')
    }
})

app.post('/validatePasswordb', function(request, response){
    // Récupérer la valeur du champ de saisie du mot de passe
    password = request.body.passwordb;
    //récupérer l'ID de Session
    sessionid = request?.session.id
    // contrôle du password
    if (password === 'bbb') {
        // si ok?
        sessionidb = sessionid
        message = 'Accès accordé à B'
        response.render('inb', {message});
    } else {
        response.send('mot de passe incorrect. Veuillez réessayer!')
    }
})

app.post('/validatePasswordc', function(request, response){
    // Récupérer la valeur du champ de saisie du mot de passe
    password = request.body.passwordc;
    //récupérer l'ID de Session
    sessionid = request?.session.id
    // contrôle du password
    if (password === 'ccc') {
        // si ok?
        sessionidc = sessionid
        message = 'Accès accordé à C'
        response.render('inc', {message});
    } else {
        response.send('mot de passe incorrect. Veuillez réessayer!')
    }
})



 // portea page
 app.get('/ina', (req, res) => {
    res.render('ina')
 })

 // porteb page
 app.get('/inb', (req, res) => {
    res.render('inb')
 })

  // portec page
  app.get('/inc', (req, res) => {
    res.render('inc')
 })
                    
app.listen(3000, function() {
    console.log('listening to port 3000')
 })