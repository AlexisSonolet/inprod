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
});

// Handle Error 404
app.use(function(req, res) {
    res.status(400);
    res.sendFile(__dirname + '/public/404.html');
});

// Handle Error 500
app.use(function(error, req, res, next) {
    res.status(500);
    res.send('500: Internal Server Error', 500);
    // 500.jade :
    // extends layout
    // block content
    // h1= title
    // p #{title}
    // p #{error}
    //
    // res.render('500.jade', {title:'500: Internal Server Error', error: error});
});

exports.app = functions.https.onRequest(app);