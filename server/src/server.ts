import express  from "express";
import { routes } from './routes';

const app = express();

app.use(express.json())

app.use(routes)



app.listen(3666, () => {
  console.log('HTTP está rodando')
})