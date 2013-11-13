var PATH = require('path'),
    environ = require('bem-environ'),

    pjoin = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'bemdecl.js'    : 'v2/bemdecl.js',
        'deps.js'       : 'v2/deps.js',
        'js'            : 'v2/js-i',
        'css'           : 'v2/css',
        'ie.css'        : 'v2/ie.css',
        'ie6.css'       : 'v2/ie6.css',
        'ie7.css'       : 'v2/ie7.css',
        'ie8.css'       : 'v2/ie8.css',
        'ie9.css'       : 'v2/ie9.css',

        'bemjson.js'    : pjoin(PRJ_TECHS, 'bemjson.js'),

        'bemhtml'       : pjoin(BEMBL_TECHS, 'v2/bemhtml.js'),
        'html'          : pjoin(BEMBL_TECHS, 'v2/html.js')
    };

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
