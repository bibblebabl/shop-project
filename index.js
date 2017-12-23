const express = require('express')

const config = require('./config')
const products = require('./data/products.json')
const productRouter = require('./routes/product')

const app = express()

app.use(express.static(config.paths.public))

app.get('/', (req, res) => {
  res.send('Главная страница')
})


app.listen(config.port, () => console.log(`Server is running on port: ${config.port}`))

