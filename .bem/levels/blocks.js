var PATH = require('path'),
    environ = require('bem-environ'),
    techsCore = require('bem-techs-core'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMPR_TECHS = environ.getLibPath('bem-pr', 'bem/techs');


exports.getTechs = function() {

    return {
        'bemjson.js'                 : 'bem/lib/tech/v2',
        'title.txt'                  : 'title.txt',
        'desc.wiki'                  : '',
        'i18n.title.txt'             : join(PRJ_TECHS, 'i18n.title.txt'),
        'i18n.desc.wiki'             : join(PRJ_TECHS, 'i18n.desc.wiki'),

        'deps.js'                    : 'v2/deps.js',
        'js'                         : 'v2/js-i',
        'css'                        : 'v2/css',
        'ie.css'                     : 'v2/ie.css',
        'ie6.css'                    : 'v2/ie6.css',
        'ie7.css'                    : 'v2/ie7.css',
        'ie8.css'                    : 'v2/ie8.css',
        'ie9.css'                    : 'v2/ie9.css',

        'bemhtml'                    : techsCore.resolveTech('bemhtml'),
        'bemtree'                    : techsCore.resolveTech('bemtree'),
        'vanilla.js'                 : techsCore.resolveTech('vanilla.js'),
        'browser.js'                 : techsCore.resolveTech('browser.js'),
        'browser.js+bemhtml'         : techsCore.resolveTech('browser.js+bemhtml'),
        'i18n'                       : techsCore.resolveTech('i18n'),
        'i18n.browser.js'            : techsCore.resolveTech('i18n.browser.js'),
        'i18n.browser.js+bemhtml'    : techsCore.resolveTech('i18n.browser.js+bemhtml'),

        'examples'                   : join(PRJ_TECHS, 'examples.js'),
        'tests'                      : join(PRJ_TECHS, 'tests.js'),
        'sets'                       : join(BEMPR_TECHS, 'sets.js'),
        'test.js'                    : join(BEMPR_TECHS, 'test.js.js'),
        'test.js+browser.js+bemhtml' : join(BEMPR_TECHS, 'test.js+browser.js+bemhtml.js')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
