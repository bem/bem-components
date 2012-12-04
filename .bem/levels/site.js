var PATH = require('path'),
    BEM = require('bem'),

    pjoin = PATH.join,
    presolve = PATH.resolve.bind(null, __dirname),

    LIB_ROOT = presolve('../../'),

    PRJ_TECHS = presolve('../techs'),
    BEMBL_TECHS = pjoin(LIB_ROOT, 'bem-bl/blocks-common/i-bem/bem/techs');

exports.baseLevelPath = require.resolve('./bundles');

exports.getTechs = function() {

    return {
        'bemdecl.js'    : 'bemdecl.js',
        'deps.js'       : 'deps.js',
        'js'            : 'js-i',
        'css'           : 'css',

        'bemhtml'       : pjoin(BEMBL_TECHS, 'bemhtml.js'),
        'html'          : pjoin(BEMBL_TECHS, 'html'),

        'bemtree.js'    : pjoin(PRJ_TECHS, 'bemtree.js')
    };

};

// Do not create any techs files during bundle creation by default
exports.defaultTechs = [];

// FIXME: hardcode
exports['get-elem'] = function(block, elem) {
    return [block, elem].join('/');
};

exports['match-elem'] = function(path) {
    var m = this.matchRe(),
        match = (new RegExp([ '^(' + m + ')',
            '(' + m + ')(.*?)$'].join('/'))).exec(path);

    if (!match) return false;

    return {
        block: match[1],
        elem: match[2],
        suffix: match[3]
    };
};
