// const emailjs = require('emailjs')

// const email = {

//     send(req, res, next) {
//         const { name, email, text } = req.body
//         const server = emailjs.server.connect({
//             user: 'myvfix@gmail.com',
//             password: '11598710',
//             host: 'smtp.gmail.com',
//             ssl: true
//         })
//         const message = `Email: ${email}\n\n${text}`
//         const from = `VFix Contact Form <${email}>`

//         server.send({
//             text: message,
//             from,
//             to: 'contact@myvfix.com',
//             cc: '',
//             subject: name
//         }, (err, message) => {
//             if(err) console.log(err)
//         })
//         res.end()
//     }

// }

// const { SMTPClient } = require('emailjs')

// const email = {

//     send(req, res, next) {
//         const { name, email, text } = req.body

//         const client = new SMTPClient({
//             user: 'myvfix@gmail.com',
//             password: '11598710',
//             host: 'smtp.gmail.com',
//             ssl: true
//         });

//         client.send(
//             {
//                 text: `Email: ${email}\n\n${text}`,
//                 from: `VFix Contact Form <${email}>`,
//                 to: 'contact@myvfix.com',
//                 cc: '',
//                 subject: name
//             },
//             (err, message) => {
//                 console.log(err || message);
//             }
//         );

//         res.end()
//     }

// }


var nodemailer = require("nodemailer");    

const email = {

    send(req, res, next) {
        const { name, email, text } = req.body

        var transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "myvfix@gmail.com",
                pass: "11598710"
            }
        });
        
        var mailOptions = {
            from: `VFix Contact Form <${email}>`,
            to: 'contact@myvfix.com',
            cc: '',
            subject: name,
            text: '',
            html: `<h3>Email: ${email}\n\n</h3><p>${text}</p>`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });

        res.end()
    }

}


module.exports = email
