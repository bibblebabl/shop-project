const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
  name: String,
  price: Number,
  category: String,
  desc: String
})

module.exports = mongoose.model('Product', Product)
