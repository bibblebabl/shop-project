const express = require('express')
const logger = require('morgan')

const { port, paths } = require('./config')
const routers = require('./routers');

const app = express()

app.use(express.static(paths.public));

app.use(logger('dev'))

app.use('/', routers.main)
app.use('/products', routers.products)
app.use('/search', routers.search)

app.listen(port, () => console.log(`Server is running on: http://localhost:${port}`))

