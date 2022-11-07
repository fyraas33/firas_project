const {check, validationResult}=require("express-validator")



exports.registerRules=()=>
    [
    check("username","username is require").notEmpty(),
    check("email","email is require").notEmpty(),
    check("email","check email again").isEmail(),
    check("password","password is require").isLength({
        min:8,
        max:20,
    }),

];
    

exports.loginRules=()=>
    [
    
    check("email","email is require").notEmpty(),
    check("email","check email again").isEmail(),
    check("password","password must be between 8 and 20 character").isLength({
        min:8,
        max:20,
    }),

];
    


exports.validation =(req,res,next)=>{
  const  errors=validationResult(req);
   if (!errors.isEmpty()){
    return res.status(400).send({errors:errors.array().map((el)=>( {
        msg: el.msg,
    }))});
   } 
   next();
};



exports.addpostRules=()=>
    [
    check("postName","postName is require").notEmpty(),
    check("pic","pic is require").notEmpty(),
    check("phoneNumber","phoneNumber is require").notEmpty(),
    check("category","category is require").notEmpty(),
    

];