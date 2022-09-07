import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8c5f3027144420",
    pass: "012f06351f8b84"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <murilomuller@protonmail.com>',
      to: 'Murilo Muller <murilo.murilomuller07@outlook.com',
      subject,
      html: body,
    })
  
  };
}