const express = require("express");
const connectDB = require("./config/DBconnect");
const app = express();
require('dotenv').config();



connectDB();

//routes
app.use(express.json());
app.use("/user",require("./routes/user"));






const PORT=process.env.PORT;
app.listen(PORT,(err)=>
err ? console.log(err):console.log(`server is running on http://localhost:${PORT}`)
);