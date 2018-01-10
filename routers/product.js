const router = require('express').Router()

const { products: {
  showAllProducts,
  
} } = require('../controllers')

router.get('/', showAllProducts)

router.get('/:category', (req, res) => {
  const id = req.params.id
  const product = products.filter(product => product.id === id)
  res.send(product)
})

router.get('/:category/:id', (req, res) => {
  const category = req.params.category
  const product = products.filter(product => product.category === category)
  res.send(product)
})


module.exports = router
