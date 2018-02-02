const router = require('express').Router()

const {
  auth: {
    authenticated,
    unauthenticated
  }
} = require('../middleware')

const { passport } = require('../services')

const {
  auth: {
    showRegisterPage,
    showLoginPage,
    register,
    login,
    logout
  }
} = require('../controllers')

router.route('/register')
  .all(unauthenticated)
  .get(showRegisterPage)
  .post(passport.authenticate('local-register', {
    failureRedirect: '/auth/register',
    successRedirect: '/profile'
  }))

router.route('/login')
  .all(unauthenticated)
  .get(showLoginPage)
  .post(passport.authenticate('local-login', {
    failureRedirect: '/auth/login',
    successRedirect: '/profile'
  }))

router.get('/logout', authenticated, logout)


module.exports = router
