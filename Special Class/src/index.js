import app from "./app.js"

const port = 3000

//const mongoose = require('mongoose');
import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/test');
(async ()=>{
    try {
        //db connection
        await mongoose.connect('dbstring')
        console.log("DB connected successfully");
        app.on("Error",(err)=>{
            console.log("error:",err)
            throw err
        })
        const onListening =()=>{
            console.log(`Listening on port ${port}`)
        }
        app.listen(port,onListening)
    }
    
    
    catch(error)
    {
        console.error("ERROR:",err)
        throw err 
    }
})()

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })