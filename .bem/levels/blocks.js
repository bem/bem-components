var PATH = require('path'),
    environ = require('../environ'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');


exports.getTechs = function() {

    return {
        'title.txt'      : 'title.txt',
        'desc.wiki'      : '',
        'i18n.title.txt' : join(PRJ_TECHS, 'i18n.title.txt'),
        'i18n.desc.wiki' : join(PRJ_TECHS, 'i18n.desc.wiki'),

        'deps.js'        : 'deps.js',
        'css'            : 'css',
        'ie.css'         : 'ie.css',
        'ie6.css'        : 'ie6.css',
        'ie7.css'        : 'ie7.css',
        'ie8.css'        : 'ie8.css',
        'ie9.css'        : 'ie9.css',

        'bemhtml'        : join(BEMCORE_TECHS, 'bemhtml.js'),
        'vanilla.js'     : join(BEMCORE_TECHS, 'vanilla.js.js'),
        'browser.js'     : join(BEMCORE_TECHS, 'browser.js.js'),

        //'examples'     : join(PRJ_TECHS, 'examples.js'),
        //'tests'        : join(PRJ_TECHS, 'tests.js')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
