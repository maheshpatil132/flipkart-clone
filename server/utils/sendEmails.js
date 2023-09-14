const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.elasticemail.com',
  port: 2525, // Elastic Email SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SenderEmail,
    pass: process.env.ElasticEmail_key,
  },
});


// html content
const htmlContent = (username)=>{
  return ` <h1 style='text-align:center; font-style: bold;'>Verify Your Email Address</h1>
           <br/>
           <p style='text-align:center;'></p>
           <p>Dear ${username},</p>
           <p>Thank you for signing up with Flipkart Clone. To
           ensure the security of your account and to enjoy
           the full benefits of our services, please verify
           your email address by clicking the link below:
         </p>                                                             
  `
}


exports.sendEmail = async ( email , username )=>{
    
        // Email content
      const mailOptions = {
        from: 'maheshpatilhp132@gmail.com',
        to: 'maheshpatilkg132@gmail.com',
        subject: 'Please Verify your Email Address',
        html: htmlContent(username)
      };

      // Send the email
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error('Error sending email: ' + error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}
