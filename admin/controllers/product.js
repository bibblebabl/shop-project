const { product: Product } = require('../../models')

module.exports = {
  findProduct(req, res, next, id) {
    console.log(id)
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

  showIndexPage(req, res, next) {
    Product.find()
      .then(products => {
        res.render('products', { products })
      })
      .catch(next)
  },

  showCreatePage(req, res) {
    res.render('products/form', { product: new Product() })
  },

  showUpdatePage(req, res) {
    res.render('products/form', { product: req.product })
  },

  showDeletePage(req, res) {
    res.render('products/delete', { product: req.product })
  },

  createProduct(req, res, next) {
    console.log(req.body)
    Product.create(req.body)
      .then(() => res.redirect('/admin/products'))
      .catch(next)
  },

  updateProduct(req, res, next) {
    Product.findOneAndUpdate({
      _id: req.product.id
    }, req.body)
      .then(product => res.redirect(`/admin/products/${product.id}/update`))
      .catch(next)
  },

  deleteProduct(req, res, next) {
    req.product
      .remove()
      .then(() => res.redirect('/admin/products'))
      .catch(next)
  }
}
