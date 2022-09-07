import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from "./prisma";

export const routes = express.Router()


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8c5f3027144420",
    pass: "012f06351f8b84"
  }
});


routes.post('/users', async (req, res) => {
  const {type, comment, screenshot} = req.body


  const feedback = 

  await transport.sendMail({
    from: 'Equipe Feedget <murilomuller@protonmail.com>',
    to: 'Murilo Muller <murilo.murilomuller07@outlook.com',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n')
  })

  return res.status(201).json({data: feedback})
})