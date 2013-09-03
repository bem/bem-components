var PATH = require('path'),
    BEM = require('bem'),
    techsCore = require('bem-techs-core'),
    environ = require('bem-environ'),

    join = PATH.join,
    resolve = PATH.resolve.bind(null, __dirname),

    PRJ_TECHS = resolve('../techs/'),
    BEMPR_TECHS = environ.getLibPath('bem-pr', 'bem/techs');


exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {

    return BEM.util.extend(this.__base(), {
        'bemjson.js'         : 'bem/lib/tech/v2',
        'html'               : techsCore.resolveTech('html'),
        'phantomjs'          : join(BEMPR_TECHS, 'phantomjs.js'),
        'test-tmpl'          : join(BEMPR_TECHS, 'test-tmpl.js')
    });

};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
