const router = require('express').Router()

const { product: {
  findProduct,
  showAllProducts,
  showNewProducts,
  showPopularProducts,
  showProduct
} } = require('../controllers')

router.param('product', findProduct)

router.get('/', showAllProducts)
router.get('/new', showNewProducts)
router.get('/popular', showPopularProducts)
router.get('/:id', showProduct)


module.exports = router
