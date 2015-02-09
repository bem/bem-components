var platforms = require('../config/platforms'),
    levels = require('../config/levels'),
    libs = require('../config/libs'),
    engines = {
        bh : {
            tech : 'enb-bh/techs/bh-server',
            options : {
                jsAttrName : 'data-bem',
                jsAttrScheme : 'json'
            }
        },
        'bemhtml-dev' : {
            tech : 'enb-bemxjst/techs/bemhtml-old',
            options : { devMode : true }
        },
        'bemhtml-prod' : {
            tech : 'enb-bemxjst/techs/bemhtml-old',
            options : { devMode : false }
        }
    };

module.exports = function(config) {
    var MODULE_NAME = 'enb-bem-tmpl-specs';

    if(!config._modules[MODULE_NAME]) {
        config.includeConfig(MODULE_NAME);
    }

    var module = config.module(MODULE_NAME),
        helper = module.createConfigurator('tmpl-specs');

    platforms.forEach(function(platform) {
        helper.configure({
            destPath : platform + '.tmpl-specs',
            levels : levels[platform],
            sourceLevels : [].concat(
                libs['bem-core'].levels[platform],
                levels[platform],
                libs['design'].levels[platform]
            ),
            engines : engines
        });
    });
};
