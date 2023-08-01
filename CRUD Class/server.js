const app = require('./app.js');
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server Listening on port http://localhost:${PORT}`)
})