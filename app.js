//Import the expres module
import express from 'express';

//Create an instance of an Express application
const app = express();

//define the port number where our server will listen
const PORT = 3000;

//define the root path ('/')
app.get('/',(req,res)=>{
    res.send('Hola,Mundo!');
});

//Start the server and tell it listen on the port
//specified above. Note the backticks!
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
