const router = require('express').Router()
const { cart } = require('../controllers')

router.get('/', cart.showCart)

module.exports = router
