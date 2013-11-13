var PATH = require('path'),
    environ = require('bem-environ'),

    pjoin = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = pjoin(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs'),
    BEM_GEN_DOC_TECHS = environ.getLibPath('bem-gen-doc', '.bem/techs');


exports.getTechs = function() {

    return {
        'deps.js'        : 'v2/deps.js',
        'css'            : 'v2/css',
        'ie.css'         : 'v2/ie.css',
        'ie6.css'        : 'v2/ie6.css',
        'ie7.css'        : 'v2/ie7.css',
        'ie8.css'        : 'v2/ie8.css',
        'ie9.css'        : 'v2/ie9.css',

        'title.txt'      : 'bem/lib/tech/v2',
        'desc.wiki'      : 'bem/lib/tech/v2',
        'i18n.title.txt' : pjoin(PRJ_TECHS, 'i18n.title.txt'),
        'i18n.desc.wiki' : pjoin(PRJ_TECHS, 'i18n.desc.wiki'),

        'bemhtml'        : pjoin(BEMBL_TECHS, 'v2/bemhtml.js'),
        'js'             : pjoin(BEMBL_TECHS, 'v2/js.js')
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
