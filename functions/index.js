const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
// var server = require('http').createServer(app);

// Chargement de la page index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
    // res.setHeader('Content-Type', 'text/plain');
    // res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

// app.get('/timestamp', function(req, res) {
//     // TODO
// });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.app = functions.https.onRequest(app);