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


app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    defaultLayout: 'home-layout',
    partialsDir: path.join(__dirname, '/views/partials/')
}));


// === SERVER ===
// Chargement de la page index.html
app.get('/', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('main', {layout: false});
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