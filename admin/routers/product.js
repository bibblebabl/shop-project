const router = require('express').Router()

const { product: controller } = require('../controllers')

router.param('product', controller.findProduct)

router.get('/', controller.showIndexPage)

router.route('/create')
  .get(controller.showCreatePage)
  .post(controller.createProduct)

router.route('/:product/update')
  .get(controller.showUpdatePage)
  .post(controller.updateProduct)

router.route('/:product/delete')
  .get(controller.showDeletePage)
  .post(controller.deleteProduct)

module.exports = router
