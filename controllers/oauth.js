const { passport } = require('../services')

module.exports = {
  // POST /auth/github
  github: {
    authenticate: passport.authenticate('github'),
    callback: passport.authenticate('github', {
      failureRedirect: '/auth/login',
      successRedirect: '/profile'
    })
  }
}
