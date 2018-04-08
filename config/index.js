const path = require('path')

module.exports = {
  version: '1.0.0',
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET,
  jwtSecret: process.env.JWT_SECRET,
  paths: {
    views: path.resolve(__dirname, '..', 'views'),
    public: path.resolve(__dirname, '..', 'public'),
    lib: path.resolve(__dirname, '..', 'node_modules')
  },
  mongoLocalUrl: 'mongodb://localhost:27017/products',
  mLabUrl: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
  oauth : {
    github: {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL
    }
  }
}
