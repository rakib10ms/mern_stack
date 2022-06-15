
import Connection from './database/db.js'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import Routes from './routes/route.js'


const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Server Running!')
})


app.use(bodyParser.json({extended:true}));
app.use(cors());
app.use('/', Routes);
dotenv.config();
const uername = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(uername, password);
app.listen(port, () => {
  console.log(`Example app listening  ${port}`)
})

