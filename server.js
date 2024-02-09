const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/users')

app.use(express.json())

app.get('/', async(req,res) =>{
    const product = await Product.find()
    res.send(product)
})

app.get('/2', (req,res) =>{
    res.send("bye lando bye lando, makera shackera fuckera l l lando")
})

app.post("/testLando" , async (req, res)=>{
    
    const product = await Product.create(req.body)
    res.send(req.body)

})






mongoose.connect('mongodb+srv://alsalhe03:LxRbRP4L13a6LaJO@testforrestapi.qwgpm7l.mongodb.net/NodeAPI?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected!')
    app.listen(3000 , ()=> {
        console.log("Running ")
    })
});
  
