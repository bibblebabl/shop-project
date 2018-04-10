module.exports = function createFlashMiddleware(params) {
  return function flash(req, res, next) {
    req.flash = function(level = 'info', message) {
      req.session.flash = { level, message }
    }

    let flash = req.session.flash
    req.session.flash = undefined
    delete req.session.flash

    res.locals.flash = flash

    next()
  }
}
