var DEFAULT_LANGS = ['ru', 'en'],
    fs = require('fs'),
    path = require('path'),
    naming = require('bem-naming'),
    levels = require('enb-bem-techs/techs/levels'),
    levelsToBemdecl = require('enb-bem-techs/techs/levels-to-bemdecl'),
    provide = require('enb/techs/file-provider'),
    depsByTechToBemdecl = require('enb-bem-techs/techs/deps-by-tech-to-bemdecl'),
    bemdecl = require('enb-bem-techs/techs/bemjson-to-bemdecl'),
    deps = require('enb-bem-techs/techs/deps-old'),
    files = require('enb-bem-techs/techs/files'),
    css = require('enb-stylus/techs/css-stylus'),
    autoprefixer = require('enb-autoprefixer/techs/css-autoprefixer'),
    js = require('enb-diverse-js/techs/browser-js'),
    ym = require('enb-modules/techs/prepend-modules'),
    bemhtml = require('enb-bemxjst/techs/bemhtml-old'),
    html = require('enb-bemxjst/techs/html-from-bemjson'),
    bh = require('enb-bh/techs/bh-server'),
    bhServerInclude = require('enb-bh/techs/bh-server-include'),
    bhYm = require('enb-bh/techs/bh-client-module'),
    bhHtml = require('enb-bh/techs/html-from-bemjson'),
    copyFile = require('enb/techs/file-copy'),
    mergeFiles = require('enb/techs/file-merge'),
    mergeBemdecl = require('enb-bem-techs/techs/merge-bemdecl'),
    borschik = require('enb-borschik/techs/borschik'),
    PLATFORMS = {
        'desktop' : ['common', 'desktop'],
        'touch-phone' : ['common', 'touch'],
        'touch-pad' : ['common', 'touch']
    },
    SETS = {
        'desktop' : ['common', 'desktop'],
        'touch' : ['common', 'touch']
    };

module.exports = function(config) {
    var platforms = Object.keys(PLATFORMS),
        sets = Object.keys(SETS),
        langs = process.env.BEM_I18N_LANGS;

    config.includeConfig('enb-bem-examples');
    config.includeConfig('enb-bem-docs');
    config.includeConfig('enb-bem-specs');
    config.includeConfig('enb-bem-tmpl-specs');

    config.setLanguages(langs? langs.split(' ') : [].concat(DEFAULT_LANGS));

    configureDist(platforms);
    configurePages(platforms);
    configureSets(sets, {
        tests : config.module('enb-bem-examples').createConfigurator('tests'),
        examples : config.module('enb-bem-examples').createConfigurator('examples'),
        docs : config.module('enb-bem-docs').createConfigurator('docs', 'examples'),
        specs : config.module('enb-bem-specs').createConfigurator('specs'),
        tmplSpecs : config.module('enb-bem-tmpl-specs').createConfigurator('tmpl-specs')
    });

    function configureDist(platforms) {
        platforms.forEach(function(platform) {
            config.node('dist/' + platform, function(nodeConfig) {
                nodeConfig.addTechs([
                    [levels, { levels : getSourceLevels(platform) }],
                    [levelsToBemdecl],
                    [deps],
                    [files],
                    [css, { target : '?.noprefix.css' }],
                    [autoprefixer, {
                        sourceTarget : '?.noprefix.css',
                        destTarget : '?.prefix.css',
                        browserSupport : getBrowsers(platform)
                    }],
                    [js, { target : '?.source.js' }],
                    [ym, {
                        source : '?.source.js',
                        target : '?.ym.js'
                    }],
                    [bemhtml, { target : '?.pre.bemhtml.js', devMode : false }],
                    [depsByTechToBemdecl,  {
                        target : '?.bemhtml.bemdecl.js',
                        sourceTech : 'js',
                        destTech : 'bemhtml'
                    }],
                    [deps, {
                        target : '?.bemhtml.deps.js',
                        bemdeclFile : '?.bemhtml.bemdecl.js'
                    }],
                    [files, {
                        depsFile : '?.bemhtml.deps.js',
                        filesTarget : '?.bemhtml.files',
                        dirsTarget : '?.bemhtml.dirs'
                    }],
                    [bemhtml, {
                        target : '?.client.bemhtml.js',
                        filesTarget : '?.bemhtml.files',
                        devMode : false
                    }],
                    [bhServerInclude, { target : '?.pre.bh.js', jsAttrName : 'data-bem', jsAttrScheme : 'json' }],
                    [bhYm, { target : '?.client.bh.js', jsAttrName : 'data-bem', jsAttrScheme : 'json' }],
                    [mergeFiles, {
                        target : '?.source+bemhtml.js',
                        sources : ['?.source.js', '?.client.bemhtml.js']
                    }],
                    [ym, {
                        source : '?.source+bemhtml.js',
                        target : '?.pre.browser+bemhtml.js'
                    }],
                    [mergeFiles, {
                        target : '?.source+bh.js',
                        sources : ['?.source.js', '?.client.bh.js']
                    }],
                    [ym, {
                        source : '?.source+bh.js',
                        target : '?.pre.browser+bh.js'
                    }],
                    [borschik, { source : '?.prefix.css', target : '?.css' }],
                    [borschik, { source : '?.ym.js', target : '?.browser.js' }],
                    [borschik, { source : '?.pre.bemhtml.js', target : '?.bemhtml.js' }],
                    [borschik, { source : '?.pre.bh.js', target : '?.bh.js' }],
                    [borschik, { source : '?.pre.browser+bemhtml.js', target : '?.browser+bemhtml.js' }],
                    [borschik, { source : '?.pre.browser+bh.js', target : '?.browser+bh.js' }]
                ]);

                nodeConfig.addTargets([
                    '?.css', '?.browser.js', '?.bemhtml.js', '?.bh.js', '?.browser+bemhtml.js', '?.browser+bh.js'
                ]);
            });
        });
    }

    function configurePages(platforms) {
        platforms.forEach(function(platform) {
            var nodes = [platform + '.pages/*'];

            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTech([provide, { target : '?.bemjson.js' }]);
            });

            configureNodes(platform, nodes);
        });
    }

    function configureNodes(platform, nodes) {
        configureLevels(platform, nodes);
        configureAutoprefixer(platform, nodes);

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
                [js, {
                    filesTarget : '?.js.files'
                }],
                [mergeFiles, {
                    target : '?.pre.js',
                    sources : ['?.browser.bemhtml.js', '?.browser.js']
                }],
                [ym, {
                    source : '?.pre.js',
                    target : '?.js'
                }]
            ]);

            // js techs
            nodeConfig.addTechs([
                [depsByTechToBemdecl, {
                    target : '?.js-js.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'js'
                }],
                [mergeBemdecl, {
                    sources : ['?.bemdecl.js', '?.js-js.bemdecl.js'],
                    target : '?.js.bemdecl.js'
                }],
                [deps, {
                    target : '?.js.deps.js',
                    bemdeclFile : '?.js.bemdecl.js'
                }],
                [files, {
                    depsFile : '?.js.deps.js',
                    filesTarget : '?.js.files',
                    dirsTarget : '?.js.dirs'
                }]
            ]);

            // Client BEMHTML
            nodeConfig.addTechs([
                [depsByTechToBemdecl, {
                    target : '?.bemhtml.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'bemhtml'
                }],
                [deps, {
                    target : '?.bemhtml.deps.js',
                    bemdeclFile : '?.bemhtml.bemdecl.js'
                }],
                [files, {
                    depsFile : '?.bemhtml.deps.js',
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
                    [borschik, { source : '?.css', target : '_?.css', freeze : true, tech : 'cleancss' }],
                    [borschik, { source : '?.js', target : '_?.js', freeze : true }]
                ]);
            });
        });
    }

    function configureLevels(platform, nodes) {
        config.nodes(nodes, function(nodeConfig) {
            var nodeDir = nodeConfig.getNodePath(),
                blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
                sublevelDir = path.join(nodeDir, 'blocks'),
                extendedLevels = [].concat(getTestLevels(platform));

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
                levels : getLibLevels(platform),
                techSuffixes : ['examples'],
                fileSuffixes : ['bemjson.js', 'title.txt'],
                inlineBemjson : true,
                processInlineBemjson : wrapInPage
            });

            sets.tests.configure({
                destPath : platform + '.tests',
                levels : getLibLevels(platform),
                techSuffixes : ['tests'],
                fileSuffixes : ['bemjson.js', 'title.txt']
            });

            sets.docs.configure({
                destPath : platform + '.docs',
                levels : getLibLevels(platform),
                exampleSets : [platform + '.examples'],
                langs : config.getLanguages(),
                jsdoc : { suffixes : ['vanilla.js', 'browser.js', 'js'] }
            });

            sets.specs.configure({
                destPath : platform + '.specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                jsSuffixes : ['vanilla.js', 'browser.js', 'js']
            });

            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
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

            configureNodes(platform, [platform + '.tests/*/*', platform + '.examples/*/*']);
        });
    }
};

function getLibLevels(platform) {
    return (PLATFORMS[platform] || SETS[platform]).map(function(level) {
        return level + '.blocks';
    });
}

function getSourceLevels(platform) {
    var platformNames = (PLATFORMS[platform] || SETS[platform]);
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

    return levels;
}

function getTestLevels(platform) {
    return [].concat(
        getSourceLevels(platform),
        'test.blocks'
    );
}

function getSpecLevels(platform) {
    return [].concat(
        { path : path.join('libs', 'bem-pr', 'spec.blocks'), check : false },
        getSourceLevels(platform)
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
        case 'touch':
            return [
                'android 4',
                'ios >= 5',
                'ie 10'
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
        if(theme = key === 'mods'? bemjson.mods.theme :
            getThemeFromBemjson(bemjson[key])) return theme;
    }
}
