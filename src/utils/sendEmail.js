import nodemailer from 'nodemailer';

export const sendEmail = (to_email, subject, html) => {

    // Create a transporter object using the Gmail service and the app password
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });
  
    // Define email options
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to_email,
        subject: subject,
        text: 'Hello world!',
        html: html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
}
