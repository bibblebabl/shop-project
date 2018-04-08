const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, minlength: 3, trim: true },
  price: { type: Number },
  category: { type: String, trim: true },
  desc: { type: String, trim: true },
  likes: { type: Number, default: 0 }
}, {
  toObject: { getters: false, virtuals: false }, //без этих настроек не работает сохранение API 2ч02м видео
  toJSON: { versionKey: false, getters: false }, //без этих настроек не работает сохранение API 2ч02м видео
  timestamps: true
})

Product.virtual('image').get(function () {
  return '/img/products/200.jpg'
})

module.exports = mongoose.model('Product', Product)
