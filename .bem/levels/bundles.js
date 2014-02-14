var environ = require('bem-environ'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs'),
    BEMPR_TECHS = environ.getLibPath('bem-pr', 'bem/techs'),
    getTechResolver = environ.getTechResolver;

exports.baseLevelPath = require.resolve('./blocks');

exports.getTechs = function() {
    var techs = this.__base();

    ['browser.js+bemhtml', 'html'].forEach(getTechResolver(techs, BEMCORE_TECHS));

    ['phantomjs', 'spec.bemjson.js'].forEach(getTechResolver(techs, BEMPR_TECHS));

    return techs;
};

// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];
