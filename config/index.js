const path = require('path')

module.exports = {
  version: '1.0.0',
  port: process.env.PORT || 8080,
  paths: {
    views: path.resolve(__dirname, '..', 'views'),
    public: path.resolve(__dirname, '..', 'public'),
    lib: path.resolve(__dirname, '..', 'node_modules')
  }
}