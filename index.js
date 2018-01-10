const express = require('express')
const logger = require('morgan')

const config = require('./config')
const { error } = require('./middleware')
const routers = require('./routers')

const app = express()

app.set('config', config)

app.use(express.static(config.paths.public))
app.use('/lib', express.static(config.paths.lib))

app.use(logger('dev'))

app.use('/', routers.main)
app.use('/auth', routers.auth)
app.use('/profile', routers.profile)
app.use('/products', routers.product)
app.use('/cart', routers.cart)
app.use('/search', routers.search)

//app.use('/categories', routers.category)

app.use(error.notFound)

app.listen(config.port, () => console.log(`Server is running on: http://localhost:${config.port}`))
