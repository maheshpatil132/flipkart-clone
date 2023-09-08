

// not used in this project anywhere
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { verifyemail } = require("../public/emailverification");



exports.sendEmail = async(username) => {
   console.log(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'nitinpatilkg@gmail.com',
        from: 'maheshpatilkg132@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: verifyemail(username),
      };
    
      sgMail.send(msg).then(() => {}, error => {
        console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });

}