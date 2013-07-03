var PATH = require('path'),
    BEM = require('bem'),
    environ = require('../environ'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs');
    BEMPR_TECHS = environ.getLibPath('bem-pr', 'bem/techs');


exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {

    return BEM.util.extend(this.__base(), {
        'bemjson.js'         : join(PRJ_TECHS, 'bemjson.js.js'),
        'browser.js+bemhtml' : join(BEMCORE_TECHS, 'browser.js+bemhtml.js'),
        'html'               : join(BEMCORE_TECHS, 'html.js'),
        'phantomjs'          : join(BEMPR_TECHS, 'phantomjs.js'),
        'test-tmpl'          : join(BEMPR_TECHS, 'test-tmpl.js')
    });

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
