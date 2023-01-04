const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env' });

require('./db/conn');
const User = require('./models/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT =  process.env.PORT;

mongoose.set("strictQuery", true);



app.get('/login',(req,res) => {
    //res.cookie("Token",'sash')
    res.send('login page');
});

app.get('/signup',(req,res) => {
    res.send('signup page');
});

app.get('/about',(req,res) => {
    res.send('about page');
});
 

app.listen(PORT,() => {
    console.log('server is running ');
    
})