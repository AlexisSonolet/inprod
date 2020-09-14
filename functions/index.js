// const functions = require('firebase-functions');
// const firebase = require('firebase-admin');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const handlebars = require('express-handlebars');

// const firebaseApp = firebase.initializeApp(
//     functions.config().firebase
// );

const app = express();


app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));
// var server = require('http').createServer(app);


app.use(express.static('public'));


// === SERVER ===
// Chargement de la page index.html
app.get('/', function(req, res) {
    res.render('main', {layout : 'index'});
});


// === Contact form ===
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.post('/contact-post', function(req, res) {
//     console.log('You sent the name "' + req.body.name + '".');
// });


// === ERRORS ===
// Handle Error 404
// app.use(function(req, res) {
//     res.status(400);
//     res.sendFile(__dirname + '/public/404.html');
// });

// Handle Error 500
// app.use(function(error, req, res, next) {
//     res.status(500);
//     res.send('500: Internal Server Error<br />please contact : alexis.sonolet@gmail.com', 500);
// });


// exports.app = functions.https.onRequest(app);
app.listen(5000);