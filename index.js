const express = require('express');
const cors = require('cors');


const userRouter= require('./routes/route.js')

const app = express();

app.use(cors());

app.use(express.json());
app.use('/user',userRouter);

app.get('/',(req,res)=>{
    res.send('hello world')
  })
const PORT = 8000;

// Connection();
// connectToDatabase();
const {connectMongoDB}=require("./connection")
// connectMongoDB('mongodb://localhost:27017/tax').then(()=> console.log("mongodb connected")).catch(err => console.log("mongodb error",err));
connectMongoDB('mongodb+srv://pangajk3:TNIl9NBVhymCC9u7@cluster0.pl4tppa.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log("mongodb connected")).catch(err => console.log("mongodb error",err));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));