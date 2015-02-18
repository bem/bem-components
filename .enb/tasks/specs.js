var platforms = require('../config/platforms'),
    levels = require('../config/levels'),
    libs = require('../config/libs'),
    suffixes = ['vanilla.js', 'browser.js', 'js'];

module.exports = function(config) {
    var MODULE_NAME = 'enb-bem-specs';

    if(!config._modules[MODULE_NAME]) {
        config.includeConfig(MODULE_NAME);
    }

    var module = config.module(MODULE_NAME),
        helper = module.createConfigurator('specs');

    platforms.forEach(function(platform) {
        helper.configure({
            destPath : platform + '.specs',
            levels : levels[platform],
            sourceLevels : [].concat(
                libs['bem-core'].levels[platform],
                levels[platform],
                libs['design'].levels[platform],
                libs['bem-pr'].levels['spec']
            ),
            jsSuffixes : suffixes
        });
    });
};
