const products = require('../data/products')

module.exports = {

  // GET /products
  showAllProducts(req, res) {
    res.render('products', {
      id: 'books',
      title: 'CodeLibrary',
      products
    })
  },

  // GET /products/new
  showNewBooks(req, res) {
    res.render('products', {
      id: 'products',
      title: 'Новые товары',
      products
    })
  },

  // GET /books/best
  showBestBooks(req, res) {
    res.render('books', {
      id: 'books',
      title: 'Лучшие книги',
      products: products.sort((current, next) => next.likes - current.likes)
    })
  }
}
