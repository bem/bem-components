var BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {

        bundleBuildLevels: [
            environ.getLibPath('bem-core', 'common.blocks'),
            this.resolvePath('../../common.blocks'),
            this.resolvePath('../../desktop.blocks')
        ]

    });

};
