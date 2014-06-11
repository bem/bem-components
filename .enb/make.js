var exampleSets = require('enb-bem-examples');

module.exports = function(config) {
    var docTools = require('enb-bem-docs')(config);
    var tests = exampleSets.create('tests', config);

    config.setLanguages(['en', 'ru']);

    docTools.configureSets({
        sets : {
            destPath : 'desktop.sets',
            levels : getDesktopLibLevels(config)
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

    tests.build({
        destPath : 'desktop.tests',
        levels : getDesktopLibLevels(config),
        suffixes : ['tests']
    });

    tests.build({
        destPath : 'touch-pad.tests',
        levels : getTouchPadLibLevels(config),
        suffixes : ['tests']
    });

    tests.build({
        destPath : 'touch-phone.tests',
        levels : getTouchPhoneLibLevels(config),
        suffixes : ['tests']
    });

    config.nodes(['*.pages/*', '*.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/file-provider'), { target : '?.bemjson.js' }],
            [require('enb/techs/bemdecl-from-bemjson')],
            [require('enb/techs/bemdecl-from-deps-by-tech'), {
                sourceTech : 'js',
                destTech : 'bemhtml',
                target : '?.bemhtml.bemdecl.js'
            }],
            [require('enb/techs/deps')],
            [require('enb/techs/files')],
            [require('enb/techs/files'), {
                depsTarget : '?.bemhtml.bemdecl.js',
                filesTarget : '?.bemhtml.files',
                dirsTarget : '?.bemhtml.dirs'
            }],
            [require('enb-roole/techs/css-roole'), { target : '?.noprefix.css' }],
            [require('enb-diverse-js/techs/browser-js')],
            [require('enb-bemxjst/techs/bemhtml-old'), { devMode : false }],
            [require('enb-bh/techs/bh-server')],
            [require('enb-bemxjst/techs/bemhtml-old'), {
                target : '?.browser.bemhtml.js',
                filesTraget : '?.bemhtml.files',
                devMode : false
            }],
            [require('enb/techs/file-merge'), {
                sources : ['?.browser.bemhtml.js', '?.browser.js'],
                target : '?.pre.js'
            }],
            [require('enb-modules/techs/prepend-modules'), {
                source : '?.pre.js',
                target : '?.js'
            }],
            [require('enb-bemxjst/techs/html-from-bemjson')],
            [require('enb-bh/techs/html-from-bemjson'), { destTarget : '?.bh.html' }]
        ]);

        nodeConfig.addTargets([
            '_?.css', '_?.js', '?.html', '?.bh.html'
        ]);
    });

    config.nodes(['desktop.pages/*', 'desktop.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getDesktopBrowsers()
            }]
        ]);
    });

    config.nodes(['touch-pad.pages/*', 'touch-pad.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getTouchPadBrowsers()
            }]
        ]);
    });

    config.nodes(['touch-phone.pages/*', 'touch-phone.tests/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb-autoprefixer/techs/css-autoprefixer'), {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getTouchPhoneBrowsers()
            }]
        ]);
    });

    config.nodes('desktop.pages/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getDesktopLevels(config) }]
        ]);
    });

    config.nodes('touch-pad.pages/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getTouchPadLevels(config) }]
        ]);
    });

    config.nodes('touch-phone.pages/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getTouchPhoneLevels(config) }]
        ]);
    });

    config.nodes('desktop.tests/*/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getDesktopTestLevels(config) }]
        ]);
    });

    config.nodes('touch-pad.tests/*/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getTouchPadTestLevels(config) }]
        ]);
    });

    config.nodes('touch-phone.tests/*/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getTouchPhoneTestLevels(config) }]
        ]);
    });

    config.mode('development', function() {
        config.nodes(['*.pages/*', '*.tests/*/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                [require('enb/techs/file-copy'), { sourceTarget : '?.css', destTarget : '_?.css' }],
                [require('enb/techs/file-copy'), { sourceTarget : '?.js', destTarget : '_?.js' }]
            ]);
        });
    });

    config.mode('production', function() {
        config.nodes(['*.pages/*', '*.tests/*/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                [require('enb-borschik/techs/borschik'), { sourceTarget : '?.css', destTarget : '_?.css' }],
                [require('enb-borschik/techs/borschik'), { sourceTarget : '?.js', destTarget : '_?.js' }]
            ]);
        });
    });
};

function getDesktopLibLevels(config) {
    return [
        'common.blocks',
        'desktop.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadLibLevels(config) {
    return [
        'common.blocks',
        'touch.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneLibLevels(config) {
    return [
        'common.blocks',
        'touch.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks',
        'design/desktop.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-pad.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-phone.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopTestLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks',
        'design/desktop.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadTestLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-pad.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneTestLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-phone.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopBrowsers() {
    return [
        'last 2 versions',
        'ie 10',
        'ff 24',
        'opera 12.16'
    ];
}

function getTouchPadBrowsers() {
    return [
        'android 4',
        'ios 5'
    ];
}

function getTouchPhoneBrowsers() {
    return [
        'android 4',
        'ios 6',
        'ie 10'
    ];
}
