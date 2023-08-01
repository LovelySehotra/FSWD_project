require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js')
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//init connection to db
connectToDb()

const userRoutes = require('./routes/userRoutes.js')
app.use('/',userRoutes);

module.exports= app;