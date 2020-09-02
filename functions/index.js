const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
const bodyParser = require('body-parser');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
// var server = require('http').createServer(app);


// === SERVER ===
// Chargement de la page index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


// === Contact form ===
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/contact-post', function(req, res) {
    console.log('You sent the name "' + req.body.name + '".');
});


// === ERRORS ===
// Handle Error 404
app.use(function(req, res) {
    res.status(400);
    res.sendFile(__dirname + '/public/404.html');
});

// Handle Error 500
app.use(function(error, req, res, next) {
    res.status(500);
    res.send('500: Internal Server Error', 500);
});

exports.app = functions.https.onRequest(app);