const mongoose = require("mongoose");


const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("DB is conncected")
    } catch (error) {
        console.log("DB is not connected");
        
    }
};


module.exports=connectDB;