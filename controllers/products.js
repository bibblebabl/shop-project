const products = require('../data/products.json')


module.exports = {
  showAllProducts(req, res) {
    res.send(products)
  },


}