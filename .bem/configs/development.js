process.env.BEMHTML_ENV = 'development';

var relative = require('path').relative.bind(null, __dirname);

module.exports = {

    libraries : require('bem').util.extend(require('../repo.db'), {

        'bem-bl' : {
            type        : 'symlink',
            npmPackages : false,
            relative    : relative('bem-bl')
        }

    })

};


