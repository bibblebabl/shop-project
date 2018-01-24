const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const config = require('./config')
const { error } = require('./middleware')
const connection = require('./services/db')
const routers = require('./routers')
const admin = require('./admin')

const app = express()

app.set('view engine', 'pug')
app.set('views', config.paths.views)
app.set('config', config)

app.locals.version = config.version
app.locals.basedir = config.paths.views

app.use(express.static(config.paths.public))
app.use('/lib', express.static(config.paths.lib))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.use('/', routers.main)
app.use('/auth', routers.auth)
app.use('/profile', routers.profile)
app.use('/products', routers.product)
app.use('/cart', routers.cart)
app.use('/search', routers.search)

app.use('/admin', admin)
//app.use('/categories', routers.category)

app.use(error.notFound)
app.use(app.get('env') === 'development' ? error.development : error.production)

app.listen(config.port, () => console.log(`Server is running on: http://localhost:${config.port}`))
