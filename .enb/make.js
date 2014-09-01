var DEFAULT_LANGS = ['ru', 'en'],
    fs = require('fs'),
    path = require('path'),
    naming = require('bem-naming'),
    levels = require('enb-bem/techs/levels'),
    provide = require('enb/techs/file-provider'),
    bemdeclFromDepsByTech = require('enb-bem/techs/bemdecl-from-deps-by-tech'),
    bemdecl = require('enb-bem/techs/bemdecl-from-bemjson'),
    deps = require('enb-bem/techs/deps-old'),
    files = require('enb-bem/techs/files'),
    css = require('enb-stylus/techs/css-stylus'),
    autoprefixer = require('enb-autoprefixer/techs/css-autoprefixer'),
    js = require('enb-diverse-js/techs/browser-js'),
    ym = require('enb-modules/techs/prepend-modules'),
    bemhtml = require('enb-bemxjst/techs/bemhtml-old'),
    html = require('enb-bemxjst/techs/html-from-bemjson'),
    bh = require('enb-bh/techs/bh-server'),
    bhHtml = require('enb-bh/techs/html-from-bemjson'),
    copyFile = require('enb/techs/file-copy'),
    mergeFiles = require('enb/techs/file-merge'),
    borschik = require('enb-borschik/techs/borschik'),
    PLATFORMS = {
        'desktop' : ['common', 'desktop'],
        'touch-phone' : ['common', 'touch'],
        'touch-pad' : ['common', 'touch']
    };

module.exports = function(config) {
    var platforms = ['desktop', 'touch-pad', 'touch-phone'],
        langs = process.env.BEM_I18N_LANGS;

    config.includeConfig('enb-bem-examples');
    config.includeConfig('enb-bem-docs');
    config.includeConfig('enb-bem-specs');
    config.includeConfig('enb-bem-tmpl-specs');

    config.setLanguages(langs? langs.split(' ') : [].concat(DEFAULT_LANGS));

    configurePages(platforms);
    configureSets(platforms, {
        tests : config.module('enb-bem-examples').createConfigurator('tests'),
        examples : config.module('enb-bem-examples').createConfigurator('examples'),
        docs : config.module('enb-bem-docs').createConfigurator('docs', 'examples'),
        specs : config.module('enb-bem-specs').createConfigurator('specs'),
        tmplSpecs : config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
    });

    function configurePages(platforms) {
        platforms.forEach(function(platform) {
            var nodes = [platform + '.tests/*/*', platform + '.examples/*/*', platform + '.pages/*'];

            configureLevels(platform, nodes);
            configureAutoprefixer(platform, nodes);

            config.nodes([platform + '.pages/*'], function(nodeConfig) {
                nodeConfig.addTech([provide, { target : '?.bemjson.js' }]);
            });

            config.nodes(nodes, function(nodeConfig) {
                var langs = config.getLanguages();

                // Base techs
                nodeConfig.addTechs([
                    [bemdecl],
                    [deps],
                    [files]
                ]);

                // Client techs
                nodeConfig.addTechs([
                    [css, { target : '?.noprefix.css' }],
                    [js],
                    [mergeFiles, {
                        target : '?.pre.js',
                        sources : ['?.browser.bemhtml.js', '?.browser.js']
                    }],
                    [ym, {
                        source : '?.pre.js',
                        target : '?.js'
                    }]
                ]);

                // Client BEMHTML
                nodeConfig.addTechs([
                    [bemdeclFromDepsByTech, {
                        target : '?.bemhtml.bemdecl.js',
                        sourceTech : 'js',
                        destTech : 'bemhtml'
                    }],
                    [deps, {
                        target : '?.bemhtml.deps.js',
                        sourceDepsFile : '?.bemhtml.bemdecl.js'
                    }],
                    [files, {
                        target : '?.bemhtml.deps.js',
                        filesTarget : '?.bemhtml.files',
                        dirsTarget : '?.bemhtml.dirs'
                    }],
                    [bemhtml, {
                        target : '?.browser.bemhtml.js',
                        filesTarget : '?.bemhtml.files',
                        devMode : false
                    }]
                ]);

                // Template techs
                nodeConfig.addTechs([
                    [bemhtml],
                    [bh, { jsAttrName : 'data-bem', jsAttrScheme : 'json' }]
                ]);

                // Build htmls
                nodeConfig.addTechs([
                    [html],
                    [bhHtml, { target : '?.bh.html' }]
                ]);

                langs.forEach(function(lang) {
                    var destTarget = '?.' + lang + '.html';

                    nodeConfig.addTech([copyFile, { source : '?.html', target : destTarget }]);
                    nodeConfig.addTarget(destTarget);
                });

                nodeConfig.addTargets([
                    '_?.css', '_?.js', '?.html', '?.bh.html'
                ]);
            });

            config.mode('development', function() {
                config.nodes(nodes, function(nodeConfig) {
                    nodeConfig.addTechs([
                        [copyFile, { source : '?.css', target : '_?.css' }],
                        [copyFile, { source : '?.js', target : '_?.js' }]
                    ]);
                });
            });

            config.mode('production', function() {
                config.nodes(nodes, function(nodeConfig) {
                    nodeConfig.addTechs([
                        [borschik, { source : '?.css', target : '_?.css', freeze : true }],
                        [borschik, { source : '?.js', target : '_?.js', freeze : true }]
                    ]);
                });
            });
        });
    }

    function configureLevels(platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {
            var nodeDir = nodeConfig.getNodePath(),
                blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
                sublevelDir = path.join(nodeDir, 'blocks'),
                extendedLevels = [].concat(getTestLevels(platform, config));

            if(fs.existsSync(blockSublevelDir)) {
                extendedLevels.push(blockSublevelDir);
            }

            if(fs.existsSync(sublevelDir)) {
                extendedLevels.push(sublevelDir);
            }

            nodeConfig.addTech([levels, { levels : extendedLevels }]);
        });
    }

    function configureAutoprefixer(platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {
            nodeConfig.addTechs([
                [autoprefixer, {
                    sourceTarget : '?.noprefix.css',
                    destTarget : '?.css',
                    browserSupport : getBrowsers(platform)
                }]
            ]);
        });
    }

    function configureSets(platforms, sets) {
        platforms.forEach(function(platform) {
            sets.examples.configure({
                destPath : platform + '.examples',
                levels : getLibLevels(platform, config),
                techSuffixes : ['examples'],
                fileSuffixes : ['bemjson.js', 'title.txt'],
                inlineBemjson : true,
                processInlineBemjson : wrapInPage
            });

            sets.tests.configure({
                destPath : platform + '.tests',
                levels : getLibLevels(platform, config),
                techSuffixes : ['tests'],
                fileSuffixes : ['bemjson.js', 'title.txt']
            });

            sets.docs.configure({
                destPath : platform + '.docs',
                levels : getLibLevels(platform, config),
                exampleSets : [platform + '.examples'],
                langs : config.getLanguages(),
                jsSuffixes : ['vanilla.js', 'browser.js', 'js']
            });

            sets.specs.configure({
                destPath : platform + '.specs',
                levels : getLibLevels(platform, config),
                sourceLevels : getSpecLevels(platform, config),
                jsSuffixes : ['vanilla.js', 'browser.js', 'js']
            });

            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : getLibLevels(platform, config),
                sourceLevels : getSpecLevels(platform, config),
                engines : {
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
                }
            });
        });
    }
};

function getLibLevels(platform, config) {
    return PLATFORMS[platform].map(function(level) {
        return config.resolvePath(level + '.blocks');
    });
}

function getSourceLevels(platform, config) {
    var platformNames = PLATFORMS[platform];
    var levels = [];

    platformNames.forEach(function(name) {
        levels.push({ path : path.join('libs', 'bem-core', name + '.blocks'), check : false });
    });

    platformNames.forEach(function(name) {
        levels.push({ path : name + '.blocks', check : true });
    });

    platformNames.forEach(function(name) {
        levels.push({ path : path.join('design', name + '.blocks'), check : true });
    });

    return levels.map(function(level) {
        return config.resolvePath(level);
    });
}

function getTestLevels(platform, config) {
    return [].concat(
        getSourceLevels(platform, config),
        config.resolvePath('test.blocks')
    );
}

function getSpecLevels(platform, config) {
    return [].concat(
        config.resolvePath({ path : path.join('libs', 'bem-pr', 'spec.blocks'), check : false }),
        getSourceLevels(platform, config)
    );
}

function getBrowsers(platform) {
    switch(platform) {
        case 'desktop':
            return [
                'last 2 versions',
                'ie 10',
                'ff 24',
                'opera 12.16'
            ];
        case 'touch-pad':
            return [
                'android 4',
                'ios 5'
            ];
        case 'touch-phone':
            return [
                'android 4',
                'ios 6',
                'ie 10'
            ];
    }
}

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
        if(theme = key === 'mods' ? bemjson.mods.theme :
            getThemeFromBemjson(bemjson[key])) return theme;
    }
}
