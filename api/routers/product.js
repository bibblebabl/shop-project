const router = require('express').Router()
const { product: productController } = require('../controllers')

router.param('id', productController.product.find)

router.route('/')
  .get(productController.products.getAllProducts)
  .post(productController.products.createProduct)

router.route('/:id')
  .get(productController.product.get)
  .put(productController.product.put)
  .delete(productController.product.delete)

router.route('/:id/likes')
  .put(productController.product.likes.put)


module.exports = router
