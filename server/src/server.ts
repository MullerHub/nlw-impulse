import { prisma } from "./prisma";
import express  from "express";

const app = express();

app.use(express.json())

app.post('/users', (req, res) => {
  const {type, comment, screenshot} = req.body


  prisma.feedback.create({
    data: {
       type,
       comment,
       screenshot,
    }
  })

  return res.send('Hello world!')
})

app.listen(3666, () => {
  console.log('HTTP está rodando')
})