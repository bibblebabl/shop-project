const path = require('path');

module.exports = {
    version: '1.0.0',
    port: process.env.PORT || 8080,
    paths: {
        public: path.resolve(__dirname, '..', 'public')
    }
};