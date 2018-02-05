module.exports = {
  showCart(req, res) {
    res.render('cart', {
      id: 'cart',
      cart: req.session.cart.getProducts()
    })
  },

  addProduct(req, res, next) {
    req.cart.addProduct(req.params.product)

    console.log(req.session.cart)

    next()
  }
}
