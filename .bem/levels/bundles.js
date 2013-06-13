var PATH = require('path'),
    environ = require('../environ'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');


exports.getTechs = function() {

    return {
        'bemdecl.js'         : 'bemdecl.js',
        'deps.js'            : 'deps.js',
        'css'                : 'css',
        'ie.css'             : 'ie.css',
        'ie6.css'            : 'ie6.css',
        'ie7.css'            : 'ie7.css',
        'ie8.css'            : 'ie8.css',
        'ie9.css'            : 'ie9.css',

        'vanilla.js'         : join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'         : join(BEMCORE_TECHS, 'browser.js.js'),
        'browser.js+bemhtml' : join(BEMCORE_TECHS, 'browser.js+bemhtml.js'),

        'bemjson.js'         : join(PRJ_TECHS, 'bemjson.js.js'),

        'bemhtml'            : join(BEMCORE_TECHS, 'bemhtml.js'),
        'html'               : join(BEMCORE_TECHS, 'html.js'),

        //'examples'         : join(PRJ_TECHS, 'examples.js'),
        //'tests'            : join(PRJ_TECHS, 'tests.js'),
    };

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
