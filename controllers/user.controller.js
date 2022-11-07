const ObjectID = require("mongoose").Types.ObjectId;
const User = require("../models/user");


// get all user
module.exports.getAllUsers = async (req, res) => {
  try {
       
    const result= await User.find();
    res.send({users:result,msg:" all users"}) 

} catch (error) {
    console.log(error);
}
  };
  
  //get user by id
  module.exports.userInfo = async(req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
   try {
    const result= await User.findById(req.params.id);
    res.status(200).send({user: result,msg:"user trouve"})

    
   } catch (error) {
    console.log(error);
    
   }
  };
  // update user 
  module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
     const result =await User.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            ...req.body
          }, 
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
       
      );
      res.send({user:result,msg:"user updated successfully"})
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };


  //delete user
  
  module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await User.remove({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };
