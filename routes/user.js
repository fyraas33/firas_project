const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User= require("../models/User");
const jwt= require("jsonwebtoken");
const {loginRules,registerRules,validation} =require("../middleware/validator");
const isAuth = require("../middleware/passport");

// router.get("/",(req,res)=>{
//     res.send("helooooooo");
// });

//register
router.post("/register",registerRules(),validation, async (req,res)=>{
    const {username,email,password} = req.body;
    try {
        const newUser= new User({username,email,password});

        //check if email exist
        const searchedUser = await User.findOne({ email });
        if (searchedUser){
            return res.status(400).send({ msg: "email already exist"});
        }
        //check if username exist
        
        const searchedUsername = await User.findOne({ username });
        if (searchedUsername){
            return res.status(400).send({ msg: "user name already exist"});
        }

        //hash password
        const salt = 10;
        const genSalt = await  bcrypt.genSalt(salt);
        const hashedPassword =await  bcrypt.hash(password,genSalt);
        console.log(hashedPassword);
        newUser.password=hashedPassword;
       
        //generate a token
        

        //save the user
        const newUserToken= await newUser.save();
        const payload={
            _id: newUserToken._id,
            name: newUserToken.name,
        };
        const token = await jwt.sign(payload, process.env.secretOrKey,{
            expiresIn:3600,
        });

        res.status(200).send({newUser, msg : "user is saved", token:`Bearer ${token}`});
    } catch (error) {
        res.send(error)
    res.status(500).send("can not save the user");    
    }
});

// login
router.post("/login",loginRules(),validation, async(req,res)=>{
    const {email,password}=req.body
 try {
    //find if the user exist
    const searchedUser = await User.findOne({email});
    //if the email not exist
    if(!searchedUser){
        return res.status(400).send({msg : "bad Credential"});
    }
    //password are equals 
    const match= await bcrypt.compare(password,searchedUser.password);
    if(!match){
        return res.status(400).send({msg : "bad Credential"}) ;
    }
    //create token
    const payload={
        _id : searchedUser._id,
    };
    const token = await jwt.sign(payload, process.env.secretOrKey,{
        expiresIn:1000*3600*24,
    });
console.log(token);
    //send the user 
    res.status(200).send({user:searchedUser,msg : "success",token:`Bearer ${token}`});
 } catch (error) {
    res.send(error)
    res.status(500).send({msg : "can not get the user"});
    console.log(error)
 }
   });

router.get("/current",isAuth(),(req,res)=>{
  console.log("waaaaaaaaaaaaa")
     res.status(200).send({user:req.user})
   });
// GET :  RETURN ALL users "http://localhost:5000/user/"

router.get("/", async (req, res) => {
    try {
      const result = await User.find();
      res.send({user:result,msg:"get all user success"});
    } catch (error) {
      console.log("can't find the user");
    }
  });

  //get user by id
  router.get("/:id",async(req,res)=>{
    try {
        const id=req.params;
        let result=await User.findOne({_id : req.params.id});
        res.send({user:result,msg: "user"});
    } catch (error) {
        console.log(error);
    }
});


// PUT : EDIT A user BY ID
  
  router.put("/update/:id", async (req, res) => {
    try {
      const result = await User.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
      res.send({User:result, msg:"users updated"});
    } catch (error) {
      console.log("can't update users");
    }
  });

   //  DELETE : REMOVE A user BY ID "http://localhost:5000/user/delete/"
  
  router.delete("/delete/:id", async (req, res) => {
    try {
      const result = await User.findByIdAndRemove({_id: req.params.id});
      res.send({User:result, msg:"users deleted"});
    } catch (error) {
      console.log("can't delete users");
    }
  });
   

module.exports = router;