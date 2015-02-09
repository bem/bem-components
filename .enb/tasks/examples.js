var path = require('path'),
    naming = require('bem-naming'),
    platforms = require('../config/platforms'),
    levels = require('../config/levels');

module.exports = function(config) {
    var MODULE_NAME = 'enb-bem-examples';

    if(!config._modules[MODULE_NAME]) {
        config.includeConfig(MODULE_NAME);
    }

    var module = config.module(MODULE_NAME),
        helper = module.createConfigurator('examples');

    platforms.forEach(function(platform) {
        helper.configure({
            destPath : platform + '.examples',
            levels : levels[platform],
            techSuffixes : ['examples'],
            fileSuffixes : ['bemjson.js', 'title.txt'],
            inlineBemjson : true,
            processInlineBemjson : wrapInPage
        });
    });
};

function wrapInPage(bemjson, meta) {
    var basename = '_' + path.basename(meta.filename, '.bemjson.js');
    return {
        block : 'page',
        title : naming.stringify(meta.notation),
        head : [{ elem : 'css', url : basename + '.css' }],
        scripts : [{ elem : 'js', url : basename + '.js' }],
        mods : { theme : getThemeFromBemjson(bemjson) },
        content : bemjson
    };
}

function getThemeFromBemjson(bemjson) {
    if(typeof bemjson !== 'object') return;

    var theme, key;

    for(key in bemjson) {
        if(theme = key === 'mods'? bemjson.mods.theme :
                getThemeFromBemjson(bemjson[key])) return theme;
    }
}
