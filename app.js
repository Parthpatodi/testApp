const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000;

const adminRouter = require("./routes/admin.route");
const categoryRouter = require("./routes/category.routes");
0
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://parthpatodi:Parth123@mongo-test.ni0an.mongodb.net/test?retryWrites=true&w=majority").then((result) => {
    console.log("Successfully Connected");
}).catch((err) => { 
    console.log(err);
});

app.use("/",adminRouter);

app.use("/category",categoryRouter);
app.listen(port,()=>{
    console.log("Server Started");
})