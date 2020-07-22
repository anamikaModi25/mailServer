var nodemailer = require('nodemailer');

export default class MailUtils {
    public static async sendMails(recepent: any, subject: any, content: any) {
        let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
        debug: true,
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth:{
          user: "your email id",
          pass: 'your password'
        }
       })
       var mailOptions = {
        from: 'your email id',
        to: recepent,
        subject: subject,
        text: content,
      };
      
      await transporter.sendMail(mailOptions, function(error:any, info: any){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
}