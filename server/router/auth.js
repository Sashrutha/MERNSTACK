const jwt = require('jsonwebtoken'); 
const express =  require('express');
const router =  express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");




require('../db/conn');
const User = require("../models/userSchema");

router.get('/',(req,res)=> {
    res.send('Hello world from the server router js');
});

router.post('/register',async (req,res) =>{

    const {name,email,password,cpassword} = req.body;
    
    
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"please fill the field properly"});
    }
   
     try{
        const userExist = await User.findOne({email:email});
        
        if(userExist){
            return res.status(422).json({ error:"Email already exists"});
        }else if(password != cpassword){
            return res.status(422).json({error:"passwords are not matching"});
        } else{
            const user = new User({name,email,password,cpassword});
        
        


            await user.save();
            res.status(201).json({message:"Successfully Registered"});
        }
       
        
 
        
        
    

     } catch(err){
        console.log(err);
     }
});

//login

router.post('/signin',async (req,res) =>
{
    try{
        let token;
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please Fill all the fields"});
        }
        
        const userLogin = await User.findOne({email:email});

        //console.log(userLogin);

        if (userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
            token= await userLogin.generateAuthToken();
            console.log(token);
           
         res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httponly:true
         });


            if(!isMatch){
                res.status(400).json({ error:"Invalid credentials"});
            }else{
            res.json({message:"User Signin Successful"});
            }
        }else{
            res.status(400).json({ error:"Invalid credentials"});

        }

        

    }catch(err){
 console.log(err);
    }
});


router.post('/about',async (req,res) =>{

    const {age,gender,dob,mobile} = req.body;
    
    
    if(!age || !gender || !dob || !mobile){
        return res.status(422).json({error:"please fill the field properly"});
    }
   
     try{

        const user = new User({age,gender,dob,mobile});

            await user.save();
            res.status(201).json({message:"Successfully Updated"});
        }
       
        
 
 catch(err){
        console.log(err);
     }
});


    router.get('/profile',authenticate,(req,res) => {
        console.log("Hello");
        res.send("Hello from server");
    });
    
module.exports = router;
