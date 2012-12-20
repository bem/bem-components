var BEM = require('bem'),
    PATH = require('path'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_ROOT = resolve('../../'),
    BEMBL_TECHS = join(PRJ_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs');


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

        'bemhtml'       : join(BEMBL_TECHS, 'bemhtml.js'),
        'html'          : join(BEMBL_TECHS, 'html.js')
    };

};

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {

        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../desktop.blocks'
        ])

    });

};