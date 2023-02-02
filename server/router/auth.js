const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

require('../db/conn');
const User=require("../model/userSchema")
router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

// --------------------------------USING PROMISES----------------------------------------------
// router.post('/register', (req, res) => {
//     const{name,email,phone,work,password,cpassword}=req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"plz fill all the data"});
//     }
//     // console.log(name);
//     // console.log(email);
//     // res.json({ message: req.body });
//     // res.send("mera register page");

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"User Exists"});
//         }
//         const user=new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successfully"});
//         }).catch((err)=>res.status(500).json({error:"failed to save"}))
//     }).catch(err=>{console.log(err);});
// });


router.post('/register', async (req, res) => {
    const{name,phone,mail,message}=req.body;

    if(!name || !phone || !mail || !message){
        return res.status(422).json({error:"plz fill all the data"});
        
    }


    try{
    const userExist=await User.findOne({mail:mail})

    if(userExist){
        return res.status(422).json({error:"User Exists"});
    }
    // // else if(password != cpassword){
    // //     return res.status(422).json({error:"password not matching"});
    // // }
    else{
        const user=new User({name,phone,mail,message});  
        await user.save();
      res.status(201).json({message:"user registered successfully"});
    }
   
    
    }catch(err){
        console.log(err);
    }

  
});     

// -----------------login route-----------------
// router.post('/signin',async (req,res)=>{
//     //  console.log(req.body);
//     //  res.json({message:"awesome"});
//     try{
        
//         const{email,password}=req.body;
//         if(!email || !password){
//             return res.status(400).json({error:"Fill all the data"})
//         }

//         const userLogin=await User.findOne({email:email});
//         if(userLogin){
//             // console.log(userLogin);
//             const isMatch=await bcrypt.compare(password,userLogin.password)
            

//             // Generation of token
//             const token=await userLogin.generateAuthToken();
//             console.log(token);
            
//             res.cookie("jwtoken",token,{
//                 expires:new Date(Date.now()+25892000000),
//                 httpOnly:true
//             });

//             if(!isMatch){
//                 res.status(400).json({message:"Invalid Credentials"});
//             }else{
//                 res.json({message:"user login successfully"});
//             }
//         }else{
//             res.status(400).json({message:"Invalid Credentials"});
//         }

        
       
        
//     }catch(err){
//         console.log(err);
//     }
// })


module.exports = router;