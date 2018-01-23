const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, minlength: 3, trim: true },
  price: { type: Number },
  category: { type: String, trim: true },
  desc: { type: String, trim: true }
},{
  timestamps: true 
})

Product.virtual('image').get(function () {
  return '/img/products/200.jpg'
})

module.exports = mongoose.model('Product', Product)
