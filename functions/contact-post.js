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