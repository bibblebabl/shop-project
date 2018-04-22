module.exports = function(req, res, next) {
  let csrfToken = req.csrfToken()

  res.locals.csrfToken = csrfToken

  next()
}
