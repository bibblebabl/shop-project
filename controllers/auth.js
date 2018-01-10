module.exports = {
  // GET /auth/register
  showRegisterPage(req, res) {
    res.render('auth/register', {
      id: 'register',
      className: 'auth-page',
      title: 'Регистрация'
    })
  },

  // GET /auth/login
  showLoginPage(req, res) {
    res.render('auth/login', {
      id: 'login',
      className: 'auth-page',
      title: 'Вход'
    })
  }
}
