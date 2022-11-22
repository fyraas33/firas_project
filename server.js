const express = require("express");
const cors = require("cors");
const connectDB = require("./config/DBconnect");
const app = express();
const multer = require("multer");

app.use(cors());
require("dotenv").config();

connectDB();

//routes
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/post", require("./routes/postRouter"));



const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log(`server is running on http://localhost:${PORT}`)
);
