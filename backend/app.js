const express = require("express");
const mongoose = require("mongoose")
const app = express();
const router = require("./routes/book-routes")
const cors = require('cors')

app.use(cors())
//Mdsiddlewares 
app.use(express.json())
app.use("/books",router);//localhost:5000/boooks


mongoose.connect(
    "mongodb+srv://zenith:Zenith1997@cluster0.gte9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

).then(()=>console.log("Database connected"))
.then(()=>{
    app.listen(5000)
}).catch((err)=>{console.log(err)}) 