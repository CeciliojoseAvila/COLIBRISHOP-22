const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ceciliojose2@hotmail.com",
        pass: "rzudzfakgqkbfhqs"
      }
    });
    const mensaje={
        from: "Colibrishop Store <tuCorreoMicrosoft>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;