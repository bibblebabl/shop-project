const products = []

module.exports = (req, res, next) => {
  req.cart = {
    addProduct: function(product) {
      products.push(product)
      console.log(products)

      if (req.session && req.session.cart) {
        req.session.cart.products = products
      }
    },

    getProducts: function() {
      return products
    }
  }

  next()
}


