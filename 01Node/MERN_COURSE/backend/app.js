const express = require('express');
const app = express();
require('dotenv/config')
const api = process.env.API_URL;
const morgan = require('morgan')
const mongoose = require('mongoose');


//Middleware
app.use(express.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, async (req,res) => {
    const productList = await Product.find();
    // const product = {
    //     id: 1,
    //     name: "hair dresser",
    //     Image: "some_url"
    // }
    res.send(productList)
})


app.post(`${api}/products`, async function  (req,res) {
//     const product = new Product({
//         name: req.body.name,
//         image: req.body.image,
//         countInStock: req.body.countInStock
//     })

//     product.save().then((createdProduct => {
//         res.status(201).json(createdProduct)
//     })).catch((err) => {
//         res.status(500).json({
//         error:err,
//         sucess:false
//     })
// })
let data= req.body

let savedData= await Product.create(data)
res.send({msg: savedData})
})

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number
})

const Product = mongoose.model('Product', productSchema);







mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //dbName: 'eshop-database'

})
.then(() => {
    console.log('MongoDB connected')
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log(api)
    console.log("express connected to 3000")
})

