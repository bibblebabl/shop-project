module.exports = {

  //GET /cart
  showCart(req, res, next) {
    res.render('cart', {
      id: 'cart',
      title: 'Корзина',
      cart: req.session.cart
    })

    next()
  },

  //POST /cart
  addProduct(req, res, next) {
    console.log('Session cart:', req.session.cart)
    req.session.cart = req.session.cart || [] 
    req.session.cart.push(req.body.productId)
    res.redirect('back')
    next()
  }
}
