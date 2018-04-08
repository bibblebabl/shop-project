const router = require('express').Router()

const { product: {
  findProduct,
  showAllProducts,
  showSearchResults,
  showProduct
} } = require('../controllers')

router.param('product', findProduct)

router.get('/', showAllProducts)
router.get('/search', showSearchResults)
router.get('/:product', showProduct)


module.exports = router
