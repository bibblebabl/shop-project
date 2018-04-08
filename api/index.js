const express = require('express')
const passport = require('passport')
const routers = require('./routers')

const api = express()

api.use(routers.auth)
api.use(passport.authenticate('jwt', { session: false }))
api.use('/products', routers.product)

api.use((error, req, res, next) => {
  res.status(500).json(error)
})

module.exports = api
