var PATH = require('path'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs/'),
    BEMBL_TECHS = pjoin(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs');


exports.getTechs = function() {

    return {
        'bemjson.js'    : '',
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js-i',
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js'),
        'html'          : pjoin(BEMBL_TECHS, 'html.js')
    };

};


// Do not create any techs files during bundle creation by default
exports.defaultTechs = [];

