var PATH = require('path'),
    BEM = require('bem'),
    environ = require('bem-environ'),
    resolve = PATH.resolve.bind(null, __dirname),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs'),
    BEMPR_TECHS = environ.getLibPath('bem-pr', 'bem/techs');

exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {
    var techs = {
        'bemjson.js' : ''
    };

    ['browser.js+bemhtml', 'html'].forEach(this.resolveTechs(techs, BEMCORE_TECHS));

    ['phantomjs', 'test-tmpl'].forEach(this.resolveTechs(techs, BEMPR_TECHS));

    return BEM.util.extend(this.__base(), techs);
};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
