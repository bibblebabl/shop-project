const router = require('express').Router()
const {
  cart: {
    showCart,
    addProduct
  }
} = require('../controllers')

router.get('/', showCart)
router.post('/', addProduct)

module.exports = router
