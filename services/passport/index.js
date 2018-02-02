const passport = require('passport')

const { user: User } = require('../../models')

require('./local')

passport.serializeUser((user, done) => {
  console.log('Сериализуем пользователя', user)
  done(null, user._id)
})

passport.deserializeUser((userId, done) => {
  console.log('Десериализуем пользователя', userId)
  User.findById(userId, done)
})

module.exports = passport
