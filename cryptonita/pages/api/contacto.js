const contactoHandler = async (req, res) => {
  let nodemailer = require('nodemailer');

  //Obejto que almacena toda la información de cómo queremos enviar nuestros correos
  const transporter = nodemailer.createTransport({
    //Canal de comunicación que el correo usará
    port: 465,
    host: 'smtp.gmail.com',
    //De donde rayos estaremos enviando nuestros correos. Usando un dummy account
    auth: {
      user: 'cryptonitaulima@gmail.com',
      pass: 'bitcoin123',
    },
    secure: true,
  });
  console.log(req.body);

  const mailData = {
    from: 'cryptonitaulima@gmail.com',
    to: '20200498@aloe.ulima.edu.pe',
    subject: `Mensaje de ${req.body.name}`,
    text: req.body.mensaje + ' | Enviado desde: ' + req.body.correo,
    html: `<div>${req.body.mensaje}</div><p>Enviado desde:
    ${req.body.correo}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200);
};

export default contactoHandler;
