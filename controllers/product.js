const products = require('../data/products')

module.exports = {

  findProduct(req, res, next) {
    const id = req.params.id
    const product = products.filter(product => product.id === id)

    if (!product) {
      let error = new Error('Товар не найден')
      error.status = 404
      next(error)
    } else {
      req.product = product

      next()
    }
  },

  // GET /products
  showAllProducts(req, res) {
    //res.send(products)
    res.render('products', {
      id: 'products',
      title: 'Магазин',
      products
    })
  },

  // GET /products/new
  showNewProducts(req, res) {
    res.render('products', {
      id: 'products',
      title: 'Новые товары',
      products
    })
  },

  // GET /products/popular
  showPopularProducts(req, res) {
    res.render('products', {
      id: 'products',
      title: 'Популярные товары',
      products: products.sort((current, next) => next.likes - current.likes)
    })
  },

  // GET /topics/:topic
  showProductsByCategory(req, res) {
    let productsByCategory = products.filter(product => product.categories.includes(req.category.id))

    res.render('products', {
      id: 'products',
      title: `Товары по ${req.topic.title}`,
      books: productsByCategory
    })
  },

  // GET /products/:id
  showProduct(req, res) {
    res.render('products/product', {
      id: 'product',
      title: req.product.title,
      product: req.product
    })
  }
}
