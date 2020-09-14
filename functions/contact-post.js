const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'inp.prod@gmail.com',
        pass: '************'
    }
});

exports.sendEmail = functions.firestore
    .document('orders/{orderId}')
    .onCreate((snap, context) => {

});

const mailOptions = {
    from: `softauthor1@gmail.com`,
    to: snap.data().email,
    subject: 'contact form message',
    html: `<h1>Order Confirmation</h1>
     <p> <b>Email: </b>${snap.data().email} </p>`
};


// === Contact form ===
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/contact-post', function(req, res) {
    console.log('You sent the name "' + req.body.name + '".');
});

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '********@gmail.com',
        pass: '************'
    }
});

exports.sendEmail = functions.firestore
    .document('orders/{orderId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `***********`,
            to: snap.data().email,
            subject: 'contact form message',
            html: `<h1>Order Confirmation</h1>
                                <p>
                                   <b>Email: </b>${snap.data().email}<br>
                                </p>`
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });