const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const handlebars = require('express-handlebars');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

const app = express();

// Static folder
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    defaultLayout: 'home-layout',
    partialsDir: path.join(__dirname, '/views/partials/')
}));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


// === SERVER ===

// PAGE PRINCIPALE
app.get('/', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('main', {layout: false});
});

// PAGE VIDEO
app.get('/Video', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('Video', {layout: false});
});

// PAGE PHOTO
app.get('/Photo', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('Photo', {layout: false});
});

// PAGE  CONTACT
app.get('/Contact', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('Contact', {layout: false});
});
// Contact form
app.post('/contact-post', function(req, res) {
    const output = `
        <h1>Nouveau email à partir du site internet</h1>
        <h3>Informations de contact : </h3>
        <ul>
            <li>Nom : ${req.body.name}</li>
            <li>Email : ${req.body.mail}</li>
        </ul>
        <h3>Contenu du message :</h3>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // type: 'OAuth2',
            // user: 'user@example.com',
            // clientId: '000000000000-xxx0.apps.googleusercontent.com',
            // clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
            // refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
            // accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
        }
    });

    // send mail with defined transport object
    let mailOptions = {
        from: `"INProd Site Web" <email.adress@domain.com>`, // sender address
        to: "alexis.sonolet@gmail.com", // list of receivers
        subject: `Nouveau mail de ${req.body.name} sur votre site web`, // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        // Rendre à nouveau la page
        res.render('Contact', {layout: false, msg: 'Votre email a été envoyé'});
    });
});

// PAGE PRESTATIONS
app.get('/Prestations', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('Prestations', {layout: false});
});

// PAGE ASSOCIATION
app.get('/Association', (req, res) => {
    //Using the index.hbs file instead of planB
    res.render('Association', {layout: false});
});



// === ERRORS ===
// Handle Error 404
app.use(function(req, res) {
    res.status(400);
    res.render('404', {layout: false});
});

// Handle Error 500
app.use(function(error, req, res, next) {
    res.status(500).send('500: Internal Server Error<br />please contact : alexis.sonolet@gmail.com');
});


exports.app = functions.https.onRequest(app);
// app.listen(5000);