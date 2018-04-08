const passport = require('passport')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { user: User } = require('../../models')

const config = require('../../config')

const options = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(new JWTStrategy( options, (payload, done) => {
  User.findById(payload.id)
    .then(user => {
      if (!user) return done(null, false)

      done(null, user)
    })
    .catch(done)
}))
