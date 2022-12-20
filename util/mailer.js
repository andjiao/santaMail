import nodemailer from"nodemailer";

function getTransporter(){
    return nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'adrian.ullrich@ethereal.email',
            pass: 'MUJRBy4ygmxtxcbxvp'
        },tls:{
            // it will reject bc we are doing from localhost and not domain, using this code prevent error, so we can run code on localhost
            rejectUnauthorized:false
        }
    })
}


// send mail with defined transport object
export function sendMail(mailOptions) {
    let transporter
    if (!transporter) {
        transporter = getTransporter()
    }
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error.message);
    }
    console.log('Message sent: %s', info.messageId);   
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    //res.render('contact', {msg:'Email has been sent'});
    });
}