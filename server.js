const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Saying = require('./models/sayings');


app.use(express.json())

app.get('/', async(req,res) =>{
    const saying = await Saying.find()
    res.send(saying)
})











mongoose.connect('mongodb+srv://alsalhe03:LxRbRP4L13a6LaJO@testforrestapi.qwgpm7l.mongodb.net/NodeAPI?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected!')
    app.listen(process.env.PORT ||3000 , ()=> {
        console.log("Running ")
    })
});

