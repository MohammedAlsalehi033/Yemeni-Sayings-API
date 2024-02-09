const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Saying = require('./models/sayings');
var count;

app.use(express.json())

app.get('/', async(req,res) =>{
    const saying = await Saying.find()
    res.send(saying)
})



app.get('/random', async (req, res) => {
    try {
      
      const randomIndex = Math.floor(Math.random() * count);
      const randomSaying = await Saying.findOne().skip(randomIndex);
      
      res.json(randomSaying);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });







mongoose.connect('mongodb+srv://alsalhe03:LxRbRP4L13a6LaJO@testforrestapi.qwgpm7l.mongodb.net/NodeAPI?retryWrites=true&w=majority')
  .then(async () => {
    console.log('Connected!')
    count = await Saying.countDocuments()
    app.listen(process.env.PORT ||3000 , ()=> {
        console.log("Running ")
    })
});

