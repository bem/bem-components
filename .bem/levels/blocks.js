var PATH = require('path'),
    environ = require('../environ'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMBL_TECHS = join(environ.getLibPath('bem-bl'), '/blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'js'            : join(BEMBL_TECHS, 'js.js'),
        'bemhtml'       : join(BEMBL_TECHS, 'bemhtml.js'),
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
