const { product: Product } = require('../models')

module.exports = {
  //GET /cart
  showCart(req, res, next) {
    Product.find({
      _id: {
        $in: req.session.cart
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

  //POST /cart
  addProduct(req, res) {
    console.log('Session cart:', req.session.cart)
    req.session.cart = req.session.cart || []
    req.session.cart.push(req.body.productId)
    res.redirect('back')
  },

  // GET /cart/remove?productId=value
  removeProduct(req, res) {
    if (req.session.cart) {
      req.session.cart = req.session.cart.filter(productid => productid !== req.query.productId)
    }
    //req.flash('success', 'Товар удален') 
    res.redirect('back')
  }
}
