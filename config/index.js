const path = require('path');

module.exports = {
    port: 8080,
    paths: {
        public: path.resolve(__dirname, '..', 'public')
    }
};