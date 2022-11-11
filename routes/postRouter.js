const express = require("express");
const postRouter = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;
const Post = require("../models/Post");
const {addpostRules,validation} =require("../middleware/validator");



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
// comments
postRouter.patch("/comment-post/:id", async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {


   
    return await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          Comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            note: req.body.note,
            timestamp: new Date(),
          },
        },
      },
      { new: true }
    )
      .then((result) => res.send({ Posts: result }))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
});
//delete comment
postRouter.patch("/delete-comment-post/:id", async (req, res) => {
  console.log(req.body.Id_comment)
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return await Post.findByIdAndUpdate(
      req.params.id,
      {
        $pull: {
          Comments: {
            _id: req.body.Id_comment,
          },
        },
      },
      { new: true }
    )
      .then((result) => res.send({posts:result,msg:"comment supprimee"}))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = postRouter;