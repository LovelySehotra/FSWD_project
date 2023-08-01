const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT =3000;
app.use(bodyParser.json());
// Quetion 2 Counter Web App
let counter =0;
app.get('/',(req,res)=>{
    res.json({counter:counter});
});
app.post('/increment',(req,res)=>{
    counter++
    res.json({counter:counter});
});
app.post('/decrement',(req,res)=>{
    counter--;
    res.json({counter:counter});
});
//Q.3_Create a Basic Server with Different Routes using Expresl
app.get('/',(req,res)=>{
    res.json({message:"I am homepage"});
});
app.get('/about',(req,res)=>{
    res.json({message:"I am aboutpage"});
});
app.get('/contact',(req,res)=>{
    res.json({email:"support@pwskill.com"});
});
//Q.4 Build a Server that Generate! Random Number U!ing Epre!
app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * (100 - 1 + 100)) + 1;
  res.json({ random_number: randomNumber });
});

app.listen(PORT,()=>{
    console.log(`Server is listen on PORT NUMBER ${PORT}`);
});
module.exports = app;