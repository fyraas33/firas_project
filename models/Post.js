const mongoose = require("mongoose");
const schema = mongoose.Schema

const PostSchema = new schema({
postName: {
    type: String,
    unique: true,
    require: true
},
logo: {
    type: String,
    default:'../photo/logodef.png',
    require: false
},
description: {
    type: String,
    require:false
},
pic:{
    type: String,
    require: true
},
location: {
    type: String,
    require: false
},
phoneNumber:{
    type: Number,
    require: true
},

facebook: { type: String, 
    require: false 
},
instagram: { type: String, 
    require: false 
},
category : {
    type: String,
    require: true

}



});





module.exports=mongoose.model("post",PostSchema);