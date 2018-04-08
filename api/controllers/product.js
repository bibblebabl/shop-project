const { product: Product } = require('../../models')

module.exports = {
  products: {
    // GET /api/products
    getAllProducts(req, res, next) {
      Product.find()
        .then(products => res.status(200).json(products))
        .catch(next)
    },

    // POST /api/products
    createProduct(req, res, next) {
      Product.create(req.body)
        .then(product => res.status(201).json(product))
        .catch(next)
    }
  },

  product: {
    find(req, res, next, id) {
      Product.findById(id)
        .then(product => {
          if (!product) return res.sendStatus(404)
          req.product = product
          next()
        })
        .catch(next)
    },

    // GET /api/products/:id
    get(req, res) {
      res.send(req.product)
    },

    // PUT /api/products/:id
    put(req, res, next) {
      req.product = Object.assign(req.product, req.body)

      req.product.save()
        .then(product => res.status(201).json(product))
        .catch(next)
    },

    // DELETE /api/products/:id
    delete(req, res, next) {
      req.product.remove()
        .then(() => res.sendStatus(204))
        .catch(next)
    },

    likes: {
      put(req, res, next) {
        req.product.likes += 1

        req.product.save()
          .then(product => res.status(201).json(product.likes))
          .catch(next)
      }
    }
  }
}
