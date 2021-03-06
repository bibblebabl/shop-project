const router = require('express').Router()

const { auth: { authenticated, unauthenticated } } = require('../middleware')

const {
  auth: {
    showRegisterPage,
    showLoginPage,
    register,
    login,
    logout
  },
  oauth: {
    github
  }

} = require('../controllers')

router.route('/register')
  .all(unauthenticated)
  .get(showRegisterPage)
  .post(register)

router.route('/login')
  .all(unauthenticated)
  .get(showLoginPage)
  .post(login)

router.get('/github', github.authenticate)
router.get('/github/callback', github.callback)

router.get('/logout', authenticated, logout)


module.exports = router
