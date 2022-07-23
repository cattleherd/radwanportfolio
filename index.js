const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

const port = process.env.PORT || 8080

//middleware -- serve static files
app.use(express.static('public'))

//middleware parse json in body
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req,res)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.user,
            pass: process.env.pass
        }
    })
    const mailOptions = {
        from: req.body.email,
        to: process.env.email,
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('email sent')
            res.send('success')
        }
    })
})

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})
    