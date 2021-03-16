import * as nodemailer from 'nodemailer';
export declare class Mailer {
    private readonly transporter;
    constructor();
    sendMail(options: nodemailer.SendMailOptions): Promise<any>;
}
