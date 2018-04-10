const { product: Product } = require('../models')

module.exports = {
  //GET /cart
  showCart(req, res, next) {
    Product.find({
      _id: {
        $in: req.cart.products
      }
    })
      .then(products => {
        console.log(products)
        res.render('cart', {
          id: 'cart',
          title: 'Корзина',
          products
        })
      })
      .catch(next)
  },

  addProduct(req, res) {
    req.cart.addProduct(req.body.productId)
    req.flash('success', 'Товар добавлен')

    res.redirect('back')
  },

  // GET /cart/remove?productId=value
  removeProduct(req, res) {
    req.cart.removeProduct(req.query.productId)
    req.flash('success', 'Товар удален')

    res.redirect('back')
  }
}
