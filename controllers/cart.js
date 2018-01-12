module.exports = {
  showCart(req, res) {
    res.render('cart', {
      id: 'cart'
    })
  }
}
