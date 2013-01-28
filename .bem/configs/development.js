var relative = require('path').relative.bind(null, __dirname);

module.exports = {

    libraries : {

        'bem-bl' : {
            type        : 'symlink',
            npmPackages : false,
            relative    : relative('bem-bl')
        },
        'bem-html' : {
            type        : 'symlink',
            npmPackages : false,
            relative    : relative('bemhtml')
        }

    }

};


