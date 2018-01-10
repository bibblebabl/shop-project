const router = require('express').Router()

const { product: {
  findProduct,
  showAllProducts,
  showNewProducts,
  showPopularProducts,
  showProduct
} } = require('../controllers')


//const { category: { findCategories } } = require('../middleware')

//router.use(findCategories)

router.get('/', showAllProducts)
router.get('/new', showNewProducts)
router.get('/popular', showPopularProducts)
router.get('/:book', findProduct, showProduct)


module.exports = router
