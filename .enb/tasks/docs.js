var path = require('path'),
    langs = require('../config/langs'),
    platforms = require('../config/platforms'),
    levels = require('../config/levels'),
    jsSuffixes = ['vanilla.js', 'browser.js', 'js'];

module.exports = function(config) {
    config.includeConfig('enb-bem-docs');

    var module = config.module('enb-bem-docs'),
        helper = module.createConfigurator('docs');

    platforms.forEach(function(platform) {
        helper.configure({
            destPath : platform + '.docs',
            levels : levels[platform],
            exampleSets : [platform + '.examples'],
            langs : langs,
            jsdoc : { suffixes : jsSuffixes }
        });
    });
};
