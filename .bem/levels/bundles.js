var PATH = require('path'),
    environ = require('bem-environ'),

    pjoin = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js-i',
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemjson.js'    : pjoin(PRJ_TECHS, 'bemjson.js'),

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js'),
        'html'          : pjoin(BEMBL_TECHS, 'html.js')
    };

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
