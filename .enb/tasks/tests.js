var platforms = require('../config/platforms'),
    levels = require('../config/levels');

module.exports = function(config) {
    var MODULE_NAME = 'enb-bem-examples';

    if(!config._modules[MODULE_NAME]) {
        config.includeConfig(MODULE_NAME);
    }

    var module = config.module(MODULE_NAME),
        helper = module.createConfigurator('tests');

    platforms.forEach(function(platform) {
        helper.configure({
            destPath : platform + '.tests',
            levels : levels[platform],
            techSuffixes : ['tests'],
            fileSuffixes : ['bemjson.js', 'title.txt']
        });
    });
};
