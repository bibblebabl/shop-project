const router = require('express').Router()
const {
  cart: {
    showCart,
    addProduct,
    removeProduct
  }
} = require('../controllers')

router.get('/', showCart)
router.post('/', addProduct)
router.get('/remove', removeProduct)

module.exports = router
