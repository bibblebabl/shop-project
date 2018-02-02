const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')

const { user: User } = require('../models')

const options = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}

passport.serializeUser((user, done) => {
  console.log('Сериализуем пользователя', user)
  done(null, user._id)
})

passport.deserializeUser((userId, done) => {
  console.log('Десериализуем пользователя', userId)
  User.findById(userId, done)
})

passport.use('local-register', new LocalStrategy(options, (req, email, password, done) => {
  if (password !== req.confirmPassword) return done(new Error('Пароли не совпадают'))

  User.create({ email, password })
    .then(user => { done(null, user) })
    .catch(done)
}))

passport.use('local-login', new LocalStrategy(options, (req, email, password, done) => {
  User.findOne({ email })
    .then(user => {
      if (!user) done(null, false)

      user.isCorrectPassword(password)
        .then(isEqual => {
          if (!isEqual) done(null, false)

          done(null, user)
        })
        .catch(done)

    })
    .catch(done)
}))

module.exports = passport
