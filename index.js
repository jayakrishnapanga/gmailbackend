const express = require('express');
const cors = require('cors');
// const app = express();
// import cors from 'cors';
// import Connection from './Database/db.js';
// import routes from './routes/route.js';

const userRouter= require('./routes/route.js')
// const Connection= require('./Database/db.js')
const { connectToDatabase } = require('./Database/db.js')
const app = express();

app.use(cors());
// app.use(express.urlencoded());
app.use(express.json());
app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('hello world')
  })
const PORT = 8000;

// Connection();
connectToDatabase();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));