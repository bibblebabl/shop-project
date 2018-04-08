const express = require('express')

const api = express()
const routers = require('./routers')


api.get('/', (req, res, next) => {
  res.status(404).json({ message: 'No Data' })
  next()
})

api.use('/products', routers.product)

api.use((error, req, res, next) => {
  res.status(500).json(error)
})

module.exports = api
