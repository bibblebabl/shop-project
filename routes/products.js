const router = require('express').Router()

router.get('/products', (req, res) => {
  res.send(products)
})

router.get('/:category', (req, res) => {
  const id = req.params.id;
  const product = products.filter(product => product.id === id)
  res.send(product)
})

router.get('/:category/:id', (req, res) => {
  const category = req.params.category;
  const product = products.filter(product => product.category === category)
  res.send(product)
})


module.exports = router;