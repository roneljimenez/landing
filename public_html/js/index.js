const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.listen(3000, () => console.log('server started...'));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: '', //insertar correo
           pass: '' //insertar password
       }
   });

   app.post("/sendform", function(req, res){
       const ouput = `
       <h2>Tienes una nueva solicitud de Contacto</h2>
       <p>Nombre: ${req.body.nombre}</p>
       <p>Email: ${req.body.email}</p>
       <p>Telefono: ${req.body.telefono}</p>
       <p>Asunto: ${req.body.asunto}</p>
       <p>Comentario: ${req.body.comentario}</p>
       `
       var mailOptions = {
        from: 'rjespinoza1190@gmail.com', // sender address
        to: 'ronel_jimenez@hotmail.com', // list of receivers
        subject: 'Contacto Bowish', // Subject line
        html: ouput
       };

       transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
     res.redirect("http://127.0.0.1/index.html");
   });


