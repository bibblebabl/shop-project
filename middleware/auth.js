const { user: User } = require('../models')

module.exports = {
  authenticated(req, res, next) {
    User
      .findById(req.session.userId)
      .then(user => {
        if (!user)
          return res.redirect('/login')

        req.user = user
        res.locals.user = user

        next()
      })
      .catch(next)
  },

  unauthenticated(req, res, next) {
    if (req.session) {
      User
        .findById(req.session.userId)
        .then(user => {
          if (user) {
            req.user = user
            res.locals.user = user

            res.redirect('/')
          }

          next()
        })
        .catch()
    }
  }
}
