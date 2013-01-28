var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../vendor/bem-bl/blocks-common',
            '../../vendor/bem-bl/blocks-desktop',
            '../../common.blocks',
            '../../desktop.blocks'
        ])
    });

};
