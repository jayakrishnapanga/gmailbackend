// import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD; 
const mongoose=require("mongoose")
//  async function Connection ()  {
//     const DB_URI = "mongodb+srv://pangajk3:TNIl9NBVhymCC9u7@cluster0.pl4tppa.mongodb.net/?retryWrites=true&w=majority";
//     try {
//         await mongoose.connect(DB_URI, { useNewUrlParser: true });
//         mongoose.set('strictQuery', false);
//         console.log('Database connected sucessfully');
//     } catch (error) {
//         console.log('Error while connecting with the database ', error.message)
//     }
// }
// // export default Connection;
// module.exports={
//     Connection
// }

async function connectToDatabase() {
    const DB_URI = "mongodb+srv://pangajk3:TNIl9NBVhymCC9u7@cluster0.pl4tppa.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

module.exports = {
    connectToDatabase
}