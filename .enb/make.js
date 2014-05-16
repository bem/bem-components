module.exports = function(config) {
    var tools = require('enb-bem-docs')(config);

    config.setLanguages(['en', 'ru']);

    tools.configureSets({
        sets : {
            destPath : 'desktop.sets',
            levels : getDesktopSetsLevels(config)
        },
        jsdocs : {
            _suffixes : ['vanilla.js', 'node.js', 'browser.js', 'js']
        },
        examples : {
            levels : getDesktopLevels(config),
            _sublevelSuffixes : ['tests'],
            _techs : [
                [require('enb/techs/file-copy'), {
                    sourceTarget : '?.bemjson.js',
                    destTarget : '_?.bemjson.js'
                }],
                require('enb-roole/techs/css-roole'),
                [require('enb-modules/techs/prepend-modules'), {
                    target : '?.js',
                    source : '?.pre.js'
                }],
                [require('enb-diverse-js/techs/browser-js'), {
                    target : '?.pre.js'
                }],
                [require('enb-bemxjst/techs/bemhtml'), { devMode : false }],
                [require('enb/techs/i18n-merge-keysets'), { lang : 'all' }],
                [require('enb/techs/i18n-merge-keysets'), { lang : '{lang}' }],
                [require('enb/techs/i18n-lang-js'), { lang : 'all' }],
                [require('enb/techs/i18n-lang-js'), { lang : '{lang}' }],
                [require('enb/techs/html-from-bemjson-i18n'), { lang : '{lang}' }],
                [require('enb/techs/file-copy'), { sourceTarget : '?.{lang}.html', destTarget : '_?.{lang}.html' }]
            ],
            _targets : [
                '?.css', '?.js', '_?.bemjson.js',
                '?.bemhtml.js', '_?.{lang}.html'
            ],
            _optimizeTargets : [
                '?.css',
                '?.js'
            ]
        }
    });
};

/**
 * Получение уровней c примерами
 * @param {Object} config
 * @returns {*|Array}
 */
function getDesktopSetsLevels(config) {
    return [
        'common.blocks',
        'desktop.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

/**
 * Получение уровней для сборки примеров
 * @param {Object} config
 * @returns {*|Array}
 */
function getDesktopLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}
