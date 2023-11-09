import express from 'express';
import cors from 'cors';
import Connection from './Database/db.js';
import routes from './routes/route.js';

const app = express();

app.use(cors());
// app.use(express.urlencoded());
app.use(express.json());
app.use('/user', routes);

app.get('/',(req,res)=>{
    res.send('hello world')
  })
const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));