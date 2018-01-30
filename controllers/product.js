const { product: Product } = require('../models')

module.exports = {
  findProduct(req, res, next, id) {
    Product.findById(id)
      .then(product => {
        if (!product) {
          let error = new Error('Товар не найден')
          error.status = 404
          throw error
        }

        req.product = product

        next()
      })
      .catch(next)
  },

  // GET /products
  showAllProducts(req, res, next) {
    Product.find()
      .then(products => {
        res.render('products', {
          id: 'products',
          title: 'Магазин',
          products
        })
      })
      .catch(next)
  },

  // GET /products/new
  showNewProducts(req, res, next) {
    // connect().then(collection => {
    //   collection
    //     .find()
    //     .toArray()
    //     .then(products => {
    //       res.render('products', {
    //         id: 'products',
    //         title: 'Новые товары',
    //         products
    //       })
    //     })
    //     .catch(next)
    // })
  },

  // GET /products/popular
  showPopularProducts(req, res, next) {
    // connect().then(collection => {
    //   collection
    //     .find()
    //     .toArray()
    //     .then(products => {
    //       res.render('products', {
    //         id: 'products',
    //         title: 'Популярные товары',
    //         products: products.sort((current, next) => next.likes - current.likes)
    //       })
    //     })
    //     .catch(next)
    // })
  },

  // GET /topics/:topic showProductsByCategory(req, res) {   let
  // productsByCategory = products.filter(product =>
  // product.categories.includes(req.category.id))   res.render('products', {
  // id: 'products',     title: `Товары по ${req.topic.title}`,     books:
  // productsByCategory   }) },

  // GET /products/:id
  showProduct(req, res) {
    res.render('products/product', {
      id: 'product',
      title: req.product.name,
      product: req.product
    })
  }
}
