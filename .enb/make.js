module.exports = function(config) {
    var tools = require('enb-islands-tools')(config);

    config.setLanguages(['en', 'ru']);

    tools.configureSets(getDesktopSetsLevels(config), {
        destPath: 'desktop.sets',
        levels: getDesktopLevels(config),
        docs: {
            sourceSuffixes: ['ru.md', 'ru.title.txt']
        },
        examples: {
            directorySuffixes: ['tests'],
            techs: [
                [ require('enb/techs/file-copy'), {
                    sourceTarget: '?.bemjson.js',
                    destTarget: '_?.bemjson.js'
                } ],
                [ require('enb/techs/file-copy'), {
                    sourceTarget: '?.html',
                    destTarget: '_?.html'
                } ],
                require('enb-roole/techs/css-roole'),
                [ require('enb-modules/techs/prepend-modules'), {
                    target: '?.js',
                    source: '?.pre.js'
                } ],
                [ require('enb-diverse-js/techs/browser-js'), {
                    target: '?.pre.js'
                } ],
                require('enb-bemxjst/techs/bemhtml'),
                require('enb/techs/html-from-bemjson')
            ],
            targets: [
                '?.css', '?.js', '_?.bemjson.js',
                '?.bemhtml.js', '_?.html'
            ],
            optimizeTargets: [
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
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}
