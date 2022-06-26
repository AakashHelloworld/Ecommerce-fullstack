const mongoose = require('mongoose');


const productschema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'a tour must have a name'],
        unique: true,
        trim: true,
    },
    price:{
        type: Number,
        required: [true, 'a tour must have a name']
    },
    description:{
        type: String,
        trim: true
    }
})

const Product = mongoose.model('Product', productschema)
// console.log(Product);
module.exports = Product;