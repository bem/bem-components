process.env.BEMHTML_ENV = 'development';

var relative = require('path').relative.bind(null, __dirname);

module.exports = {

    libraries : require('../repo.db')

};


