const mongoose = require("mongoose");
const schema = mongoose.Schema

const PostSchema = new schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

postName: {
    type: String,
    unique: true,
    require: true
},
logo: {
    type: String,
    default:'../photo/logodef.png',
    
},
description: {
    type: String,
    require:false
},
pic:{
    type: String,
    require: false
},
localisationMap: {
    lat: {
        type: String,
        required: false
    },
    lng: {
        type: String,
        required: false
    }
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