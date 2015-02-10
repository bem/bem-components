var path = require('path'),
    fs = require('fs'),
    page = require('./lib/page'),
    libs = require('./config/libs'),
    libLevels = require('./config/levels'),
    langs = require('./config/langs'),
    browsers = require('./config/browsers'),
    platforms = require('./config/platforms'),
    BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH';

module.exports = function(config) {
    config.setLanguages(langs);
    config.includeConfig(__dirname + '/tasks');

    platforms.forEach(function(platform) {
        config.nodes([platform + '.pages/*'], function(node) {
            var dir = node.getNodePath(),
                sublevels = [
                    path.join(dir, 'blocks')
                ].filter(function(sublevel) {
                        return fs.existsSync(sublevel);
                    }),
                levels = [].concat(
                    libs['bem-core'].levels[platform],
                    libLevels[platform],
                    libs['design'].levels[platform],
                    libLevels['test'],
                    sublevels
                );

            node.addTech([require('enb/techs/file-provider'), {
                target : '?.bemjson.js'
            }]);

            page(node, {
                levels : levels,
                browser : browsers[platform],
                langs : langs,
                templateEngine : BEM_TEMPLATE_ENGINE
            });
        });
    });

    ['desktop', 'touch'].forEach(function(platform) {
        config.nodes([platform + '.tests/*/*', platform + '.examples/*/*'], function(node) {
            var dir = node.getNodePath(),
                sublevels = [
                    path.join(dir, '..', '.blocks'),
                    path.join(dir, 'blocks')
                ].filter(function(sublevel) {
                        return fs.existsSync(sublevel);
                    }),
                levels = [].concat(
                    libs['bem-core'].levels[platform],
                    libLevels[platform],
                    libs['design'].levels[platform],
                    libLevels['test'],
                    sublevels
                );

            page(node, {
                levels : levels,
                browser : browsers[platform],
                langs : langs,
                templateEngine : BEM_TEMPLATE_ENGINE
            });
        });
    });
};
