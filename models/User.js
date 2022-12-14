const mongoose = require("mongoose");
const schema = mongoose.Schema

const UserSchema = new schema({
username: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique:true
},
password: {
    type: String,
    required: true,
},
avatar: {
    type: String,
    default:'/logodef.png',
},
phone:{
    type: Number,
    require: false
},
status:{
    type:String,
    default:"user"
},
adress:{
    type:String,
    required:false
},
aboutme:{
    type:String,
    require:false
},

});



module.exports=mongoose.model("user",UserSchema);