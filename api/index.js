const express = require('express')
const passport = require('passport')
const cache = require('apicache').middleware
const RateLimit = require('express-rate-limit')
const routers = require('./routers')
const cors = require('cors')

const limit = new RateLimit({
  windowMs: 60 * 1000 * 1, // 1 minute
  max: 5, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
})

// var whitelist = ['http://localhost:3000', 'http://localhost.3001']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

const api = express()

api.enable('trust proxy') // only if proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

//api.use(cors(corsOptions))
api.use(cors())
api.use(routers.auth)
api.use(passport.authenticate('jwt', { session: false }))
api.use(limit)
api.use(cache('3 minutes'))
api.use('/products', routers.product)

api.use((error, req, res, next) => {
  res.status(500).json(error)
})

module.exports = api
