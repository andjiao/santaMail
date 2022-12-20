import express from "express";
const app = express();

//authentication: erkender dig selv
//authensentatation: vurderer hvilken rolle man er of hvor meget adgang man har til ressourcer

import bodyParser from "body-parser"

import {createPage} from "./util/renderPage.js";


app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const frontPage = createPage("contact.html",{
    cssLink: `<link rel="stylesheet" href="/pages/test.css">`
});


app.get("/", (req, res) => {
    res.send(frontPage)
})

import { sendMail } from "./util/mailer.js"
app.post('/send',(req,res)=>{
  let mailOptions = {
    from: req.body.email, // sender address
    to: 'adrian.ullrich@ethereal.email', // list of receivers
    subject: 'Contact form', // Subject line
    text: req.body.wishes, // plain text body
};
    sendMail(mailOptions)
    res.send("you mail will asap")
})

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error.message);
    }
    console.log("Server is running on port", server.address().port);
});
