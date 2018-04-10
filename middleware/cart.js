module.exports = function cart(req, res, next) {
  if (!req.session) throw new Error('Session is required. Try installing `npm install express-session`')
  req.cart = {
    get products() {
      return req.session.cart
    },

    addProduct(productId) {
      req.session.cart = req.session.cart || []

      req.session.cart.push(productId)
    },

    removeProduct(id) {
      if (req.session.cart) {
        req.session.cart = req.session.cart.filter(productid => productid !== id)
      }
    }
  }
  next()
}
