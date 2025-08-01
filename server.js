const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose');
require('dotenv').config();




app.use(express.json())
app.get('/posts',function (req,res) {
    res.send("list of Ports")
})

app.listen(PORT,function () {
    console.log(`Server Running on PORT ${PORT}`);
    
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(function () {
    console.log("✅ Connected to MongoDB Atlas");
})
.catch(function (err) {
    console.log("❌ Error connecting to MongoDB:", err.message);
});