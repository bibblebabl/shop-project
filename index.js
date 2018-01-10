const express = require('express')
const logger = require('morgan')

const config = require('./config')
const routers = require('./routers');

const app = express()

app.use(express.static(config.paths.public));
app.set('config', config);

app.use(logger('dev'))

app.use('/', routers.main)
app.use('/products', routers.product)
app.use('/search', routers.search)

app.listen(config.port, () => console.log(`Server is running on: http://localhost:${config.port}`))

