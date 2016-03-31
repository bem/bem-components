var LIB_NAME = 'bem-components',
    DEFAULT_LANGS = ['ru', 'en'],
    BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH',
    fs = require('fs'),
    path = require('path'),
    naming = require('bem-naming'),
    techs = require('./techs'),
    bhOptions = {
        jsAttrName : 'data-bem',
        jsAttrScheme : 'json'
    },
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
        var pathToDist = path.resolve('dist'),
            pathToBorschikConf = path.join(pathToDist, '.borschik');

        fs.existsSync(pathToDist) || fs.mkdirSync(pathToDist);
        fs.existsSync(pathToBorschikConf) || fs.writeFileSync(pathToBorschikConf, [
            '{',
            '    "freeze_paths" : {',
            '        "../libs/**": ":base64:",',
            '        "../libs/**/*.svg": ":encodeURIComponent:",',
            '        "../*.blocks/**": ":base64:",',
            '        "../*.blocks/**/*.svg": ":encodeURIComponent:",',
            '        "../design/*.blocks/**": ":base64:",',
            '        "../design/*.blocks/**/*.svg": ":encodeURIComponent:"',
            '    }',
            '}'
        ].join('\n'));

        platforms.forEach(function(platform) {
            config.node('dist/' + platform, function(nodeConfig) {
                nodeConfig.addTechs([
                    [techs.bem.levels, { levels : getSourceLevels(platform) }],
                    [techs.bem.levelsToBemdecl, { target : '.tmp.bemdecl.js' }],
                    [techs.files.write, {
                        target : '.tmp.i-bem-dom-init-auto.deps.js',
                        content : 'module.exports = ' + JSON.stringify({ deps : [{
                            block : 'i-bem',
                            elem : 'dom',
                            mod : 'init',
                            val : 'auto'
                        }] })
                    }],
                    [techs.bem.subtractDeps, { from : '.tmp.deps.js', target : '.tmp.no-autoinit.deps.js', what : '.tmp.i-bem-dom-init-auto.deps.js' }],
                    [techs.bem.depsOld, { bemdeclFile : '.tmp.bemdecl.js', target : '.tmp.deps.js' }],
                    [techs.bem.files, { depsFile : '.tmp.deps.js' }],
                    [techs.bem.files, {
                        depsFile : '.tmp.no-autoinit.deps.js',
                        filesTarget : '.tmp.no-autoinit-files.files',
                        dirsTarget : '.tmp.no-autoinit-files.dirs'
                    }],
                    [techs.stylus, {
                        target : '.tmp.dev.css',
                        autoprefixer : {
                            browsers : getBrowsers(platform)
                        }
                    }],
                    [techs.stylus, {
                        target : '.tmp.dev.ie.css',
                        sourceSuffixes : ['styl', 'ie.styl']
                    }],
                    [techs.bem.depsByTechToBemdecl, {
                        target : '.tmp.js-js.bemdecl.js',
                        sourceTech : 'js',
                        destTech : 'js'
                    }],
                    [techs.bem.mergeBemdecl, {
                        sources : ['.tmp.bemdecl.js', '.tmp.js-js.bemdecl.js'],
                        target : '.tmp.js.bemdecl.js'
                    }],
                    [techs.bem.depsOld, {
                        target : '.tmp.js.deps.js',
                        bemdeclFile : '.tmp.js.bemdecl.js'
                    }],
                    [techs.bem.files, {
                        depsFile : '.tmp.js.deps.js',
                        filesTarget : '.tmp.js.files',
                        dirsTarget : '.tmp.js.dirs'
                    }],
                    [techs.js, {
                        filesTarget : '.tmp.js.files',
                        target : '.tmp.pre-source.js',
                        sourceSuffixes : ['vanilla.js', 'browser.js', 'js'],
                    }],
                    [techs.js, {
                        filesTarget : '.tmp.no-autoinit-files.files',
                        target : '.tmp.no-autoinit.pre-source.js',
                        sourceSuffixes : ['vanilla.js', 'browser.js', 'js'],
                    }],
                    [techs.borschik, { source : '.tmp.pre-source.js', target : '.tmp.source.js', freeze : false, minify : false }],
                    [techs.borschik, { source : '.tmp.no-autoinit.pre-source.js', target : '.tmp.no-autoinit.source.js', freeze : false, minify : false }],
                    [techs.ym, {
                        source : '.tmp.source.js',
                        target : LIB_NAME + '.dev.js'
                    }],
                    [techs.ym, {
                        source : '.tmp.no-autoinit.source.js',
                        target : LIB_NAME + '.dev.no-autoinit.js'
                    }],
                    [techs.engines.bemhtml, {
                        target : LIB_NAME + '.dev.bemhtml.js',
                        sourceSuffixes : ['bemhtml.js', 'bemhtml']
                    }],
                    [techs.engines.bhBundle, {
                        target : LIB_NAME + '.dev.bh.js',
                        mimic : ['bh', 'BEMHTML'],
                        bhOptions : bhOptions
                    }],
                    [techs.engines.bhBundle, {
                        target : '.tmp.browser.bh.js',
                        mimic : ['bh', 'BEMHTML'],
                        bhOptions : bhOptions
                    }],
                    [techs.files.merge, {
                        target : LIB_NAME + '.dev.js+bemhtml.js',
                        sources : [LIB_NAME + '.dev.js', LIB_NAME + '.dev.bemhtml.js']
                    }],
                    [techs.files.merge, {
                        target : LIB_NAME + '.dev.no-autoinit.js+bemhtml.js',
                        sources : [LIB_NAME + '.dev.no-autoinit.js', LIB_NAME + '.dev.bemhtml.js']
                    }],
                    [techs.files.merge, {
                        target : LIB_NAME + '.dev.js+bh.js',
                        sources : [LIB_NAME + '.dev.js', '.tmp.browser.bh.js']
                    }],
                    [techs.files.merge, {
                        target : LIB_NAME + '.dev.no-autoinit.js+bh.js',
                        sources : [LIB_NAME + '.dev.no-autoinit.js', '.tmp.browser.bh.js']
                    }],
                    [techs.borschik, { source : '.tmp.dev.css', target : LIB_NAME + '.dev.css', tech : 'cleancss', minify : false }],
                    [techs.borschik, { source : '.tmp.dev.ie.css', target : LIB_NAME + '.dev.ie.css', tech : 'cleancss', minify : false }],
                    [techs.borschik, { source : LIB_NAME + '.dev.css', target : LIB_NAME + '.css', tech : 'cleancss', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.ie.css', target : LIB_NAME + '.ie.css', tech : 'cleancss', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.js', target : LIB_NAME + '.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.no-autoinit.js', target : LIB_NAME + '.no-autoinit.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.bemhtml.js', target : LIB_NAME + '.bemhtml.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.bh.js', target : LIB_NAME + '.bh.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.js+bemhtml.js', target : LIB_NAME + '.js+bemhtml.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.js+bh.js', target : LIB_NAME + '.js+bh.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.no-autoinit.js+bemhtml.js', target : LIB_NAME + '.no-autoinit.js+bemhtml.js', minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.no-autoinit.js+bh.js', target : LIB_NAME + '.no-autoinit.js+bh.js', minify : true }]
                ]);

                nodeConfig.addTargets([
                    LIB_NAME + '.css',
                    LIB_NAME + '.ie.css',
                    LIB_NAME + '.js',
                    LIB_NAME + '.no-autoinit.js',
                    LIB_NAME + '.bemhtml.js',
                    LIB_NAME + '.bh.js',
                    LIB_NAME + '.js+bemhtml.js',
                    LIB_NAME + '.js+bh.js',
                    LIB_NAME + '.no-autoinit.js+bemhtml.js',
                    LIB_NAME + '.no-autoinit.js+bh.js'
                ]);
            });
        });
    }

    function configurePages(platforms) {
        platforms.forEach(function(platform) {
            var nodes = [platform + '.pages/*'];

            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTech([techs.files.provide, { target : '?.bemjson.js' }]);
            });

            configureNodes(platform, nodes);
        });
    }

    function configureNodes(platform, nodes) {
        configureLevels(platform, nodes);

        config.nodes(nodes, function(nodeConfig) {
            var langs = config.getLanguages();

            // Base techs
            nodeConfig.addTechs([
                [techs.bem.bemjsonToBemdecl],
                [techs.bem.depsOld],
                [techs.bem.files]
            ]);

            // Client techs
            nodeConfig.addTechs([
                [techs.stylus, {
                    autoprefixer : {
                        browsers : getBrowsers(platform)
                    }
                }],
                [techs.stylus, { target : '?.ie.css', sourceSuffixes : ['styl', 'ie.styl'] }],
                [techs.js, {
                    target : '?.browser.js',
                    sourceSuffixes : ['vanilla.js', 'browser.js', 'js'],
                    filesTarget : '?.js.files'
                }],
                [techs.files.merge, {
                    target : '?.pre.js',
                    sources : [BEM_TEMPLATE_ENGINE === 'BH'? '?.browser.bh.js' : '?.browser.bemhtml.js', '?.browser.js']
                }],
                [techs.ym, {
                    source : '?.pre.js',
                    target : '?.js'
                }]
            ]);

            // js techs
            nodeConfig.addTechs([
                [techs.bem.depsByTechToBemdecl, {
                    target : '?.js-js.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'js'
                }],
                [techs.bem.mergeBemdecl, {
                    sources : ['?.bemdecl.js', '?.js-js.bemdecl.js'],
                    target : '?.js.bemdecl.js'
                }],
                [techs.bem.depsOld, {
                    target : '?.js.deps.js',
                    bemdeclFile : '?.js.bemdecl.js'
                }],
                [techs.bem.files, {
                    depsFile : '?.js.deps.js',
                    filesTarget : '?.js.files',
                    dirsTarget : '?.js.dirs'
                }]
            ]);

            // Client Template Engine
            nodeConfig.addTechs([
                [techs.bem.depsByTechToBemdecl, {
                    target : '?.template.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'bemhtml'
                }],
                [techs.bem.depsOld, {
                    target : '?.template.deps.js',
                    bemdeclFile : '?.template.bemdecl.js'
                }],
                [techs.bem.files, {
                    depsFile : '?.template.deps.js',
                    filesTarget : '?.template.files',
                    dirsTarget : '?.template.dirs'
                }],
                BEM_TEMPLATE_ENGINE === 'BH'? [techs.engines.bhBundle, {
                    target : '?.browser.bh.js',
                    filesTarget : '?.template.files',
                    mimic : 'BEMHTML',
                    bhOptions : bhOptions
                }] : [techs.engines.bemhtml, {
                    target : '?.browser.bemhtml.js',
                    filesTarget : '?.template.files',
                    sourceSuffixes : ['bemhtml.js', 'bemhtml']
                }]
            ]);

            // Build htmls
            nodeConfig.addTechs(BEM_TEMPLATE_ENGINE === 'BH'? [
                [techs.engines.bhCommonJS, { bhOptions : bhOptions }],
                [techs.html.bh]
            ] : [
                [techs.engines.bemhtml, { sourceSuffixes : ['bemhtml.js', 'bemhtml'] }],
                [techs.html.bemhtml]
            ]);

            langs.forEach(function(lang) {
                var destTarget = '?.' + lang + '.html';

                nodeConfig.addTech([techs.files.copy, { source : '?.html', target : destTarget }]);
                nodeConfig.addTarget(destTarget);
            });

            nodeConfig.addTargets([
                '_?.css', '_?.ie.css', '_?.js', '?.html'
            ]);
        });

        config.mode('development', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [techs.borschik, { source : '?.css', target : '_?.css', minify : false }],
                    [techs.borschik, { source : '?.ie.css', target : '_?.ie.css', minify : false }],
                    [techs.borschik, { source : '?.js', target : '_?.js', minify : false }]
                ]);
            });
        });

        config.mode('production', function() {
            config.nodes(nodes, function(nodeConfig) {
                nodeConfig.addTechs([
                    [techs.borschik, { source : '?.css', target : '_?.css', tech : 'cleancss', minify : true }],
                    [techs.borschik, { source : '?.ie.css', target : '_?.ie.css', tech : 'cleancss', minify : true }],
                    [techs.borschik, { source : '?.js', target : '_?.js', minify : true }]
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

            nodeConfig.addTech([techs.bem.levels, { levels : extendedLevels }]);
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
                jsSuffixes : ['vanilla.js', 'browser.js', 'js'],
                depsTech : techs.bem.depsOld
            });

            sets.tmplSpecs.configure({
                destPath : platform + '.tmpl-specs',
                levels : getLibLevels(platform),
                sourceLevels : getSpecLevels(platform),
                engines : {
                    'bh@4' : {
                        tech : 'enb-bh/techs/bh-commonjs',
                        options : {
                            bhOptions : bhOptions
                        }
                    },
                    'bh@3' : {
                        tech : 'enb-bh/techs/bh-commonjs',
                        options : {
                            bhFilename : require.resolve('bh/lib/bh.js'),
                            bhOptions : bhOptions
                        }
                    },
                    'bemhtml-dev' : {
                        tech : 'enb-bemxjst-1x/techs/bemhtml',
                        options : { exportName : 'BEMHTML', devMode : true }
                    },
                    'bemhtml-prod' : {
                        tech : 'enb-bemxjst-1x/techs/bemhtml',
                        options : { exportName : 'BEMHTML', devMode : false }
                    },
                    'bemhtml@bem-xjst-4' : {
                        tech : 'enb-bemxjst/techs/bemhtml',
                        options : {
                            sourceSuffixes : ['bemhtml.js', 'bemhtml']
                        }
                    }
                },
                depsTech : techs.bem.depsOld
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
    var platformNames = (PLATFORMS[platform] || SETS[platform]),
        levels = [];

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
                'opera 12.1'
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
