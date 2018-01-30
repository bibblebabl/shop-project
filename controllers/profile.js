const { user: User } = require('../models')

module.exports = {
  showProfile(req, res) {
    res.render('profile', {
      id: 'profile',
      title: 'Профиль',
      user: req.user
    })
  }
}
