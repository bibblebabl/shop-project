const router = require('express').Router()
const { cart } = require('../controllers')

router.get('/', cart.showCart)

router.get('/:product', cart.addProduct, (req, res, next) => {
  console.log(req.cart, req.cart.getProducts())
  res.redirect('/cart')
})



module.exports = router
