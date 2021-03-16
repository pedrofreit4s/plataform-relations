import * as nodemailer from 'nodemailer';

export class Mailer {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  sendMail(options: nodemailer.SendMailOptions): Promise<any> {
    return this.transporter.sendMail(options);
  }
}
