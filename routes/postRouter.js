const express = require("express");
const postRouter = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;
const Post = require("../models/Post");
const {addpostRules,validation} =require("../middleware/validator");

const multer = require("multer");


//get all post
postRouter.get("/", async (req, res) => {
  try {
    let result = await Post.find();
    res.send({ Posts: result, msg: "get all Post" });
  } catch (error) {
    res.status(400).send({ msg: "error getting Post" });
    console.log(error);
  }
});
//get post by id
postRouter.get("/:id", async (req, res) => {
  try {
    let result = await Post.findById(req.params.id);
    res.send({ Posts: result, msg: "get all Post" });
  } catch (error) {
    res.status(400).send({ msg: "error getting Post" });
    console.log(error);
  }
});
//get post by category
postRouter.get("/posts/:category", async (req, res) => {
  try {
    let result = await Post.find({ category: req.params.category });
    res.send({ Posts: result, msg: "get all Post by category" });
  } catch (error) {
    res.status(400).send({ msg: "error getting Post by category" });
    console.log(error);
  }
});

//add post
postRouter.post("/add",addpostRules(),validation, async (req,res)=>{
  // const {postName,logo,description,pic,location,phoneNumber,category,facebook,instagram} = req.body;{postName,logo,description,pic,location,phoneNumber,category,facebook,instagram}
  try {
    let newPost = new Post(req.body);
    let result = await newPost.save();
    res.send({ Posts: result, msg: "add new Post" });
  } catch (error) {
    res.status(400).send({ msg: "error saving Post" });
    console.log(error);
  }
});
// PUT : EDIT A post BY ID
  
postRouter.put("/editPost/:id", async (req, res) => {
  try {
    const result = await Post.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
    res.send({Post:result, msg:"post updated"});
  } catch (error) {
    console.log("can't update post");
  }
});

//delete post
postRouter.delete("/delete/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.send({ msg: "successfully    deleted" });
  } catch (error) {
    res.status(400).send({ msg: "error deleting Post" });
    console.log(error);
  }
});
// Get all feedback
// http://localhost:5000/post/allfeeds
postRouter.get("/allfeeds", async (req, res) => {
  try {
    let result = await ServiceFiles.find()
      .populate("id_project", ["projectName", "id_user"])
      .populate("services", "serviceType");
    res.send({ allfeeds: result, msg: "done" });
  } catch (error) {
    console.log(error);
  }
});
// add feedback to file
postRouter.put("/feedback/:id", async (req, res) => {
  try {
    let newFeed = req.body;
    console.log(newFeed);
    var result = await ServiceFiles.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $push: { feedback: newFeed } },
      { new: true }
    );

    res.send({ result: result, msg: "feedback added" });
  } catch (error) {
    res.send(error);
    console.log(error);
  }
});



// //upload img
// const Storage = multer.diskStorage({
//   destination: "upload",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({
//   storage: Storage,
// }).single("testImage");

// postRouter.put("/upload/:id", (req, res) => {
//   upload(req, res, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//       Post.findByIdAndUpdate(req.params.id,
//     {
//       $set: {
//         image: {
//             data: req.file.filename,
//             contentType: "image/jpg",
//         },
//       },
//     },
//     { new: true }
//     ).then((result) => res.send({msg:"success upload",post:result}))
//     .catch((err) => console.log(err));
//   }});
//   postRouter.get('/gett/:id',async (req,res)=>{
//     const allData = await Post.find()
//     res.json(allData)
//   })


 
  // upload(req, res, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     const newImage = new ImageModel({
  //       name: req.body.name,
  //       image: {
  //         data: req.file.filename,
  //         contentType: "image/png",
  //       },
  //     });
  //     newImage
  //       .save()
  //       .then(() => res.send("success upload"))
  //       .catch((err) => console.log(err));
  //   }
  // });


module.exports = postRouter;