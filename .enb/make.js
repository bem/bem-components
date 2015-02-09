var BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH',
    fs = require('fs'),
    path = require('path'),
    levels = require('enb-bem-techs/techs/levels'),
    levelsToBemdecl = require('enb-bem-techs/techs/levels-to-bemdecl'),
    provide = require('enb/techs/file-provider'),
    depsByTechToBemdecl = require('enb-bem-techs/techs/deps-by-tech-to-bemdecl'),
    bemdecl = require('enb-bem-techs/techs/bemjson-to-bemdecl'),
    deps = require('enb-bem-techs/techs/deps-old'),
    files = require('enb-bem-techs/techs/files'),
    css = require('enb-stylus/techs/css-stylus-with-autoprefixer'),
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
    libLevels = require('./config/levels'),
    libs = require('./config/libs'),
    langs = require('./config/langs'),
    browsers = require('./config/browsers'),
    sets = require('./config/sets'),
    platforms = require('./config/platforms'),
    distPlatforms = ['desktop', 'touch-pad', 'touch-phone'];

module.exports = function(config) {
    config.includeConfig('enb-bem-docs');
    config.includeConfig(__dirname + '/tasks/specs.js');
    config.includeConfig(__dirname + '/tasks/tmpl-specs.js');
    config.includeConfig(__dirname + '/tasks/tests.js');
    config.includeConfig(__dirname + '/tasks/examples.js');

    config.setLanguages(langs);

    configureDist(distPlatforms);
    configurePages(platforms);
    configureSets(platforms, {
        docs : config.module('enb-bem-docs').createConfigurator('docs', 'examples')
    });

    function configureDist(platforms) {
        platforms.forEach(function(platform) {
            config.node('dist/' + platform, function(nodeConfig) {
                nodeConfig.addTechs([
                    [levels, { levels : getSourceLevels(platform) }],
                    [levelsToBemdecl],
                    [deps],
                    [files],
                    [css, {
                        target : '?.prefix.css',
                        browsers : browsers[platform]
                    }],
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
                    }],
                    [js, {
                        filesTarget : '?.js.files',
                        target : '?.source.js'
                    }],
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

        config.nodes(nodes, function(nodeConfig) {
            // Base techs
            nodeConfig.addTechs([
                [bemdecl],
                [deps],
                [files]
            ]);

            // Client techs
            nodeConfig.addTechs([
                [css, {
                    browsers : browsers[platform]
                }],
                [js, {
                    filesTarget : '?.js.files'
                }],
                [mergeFiles, {
                    target : '?.pre.js',
                    sources : [BEM_TEMPLATE_ENGINE === 'BH'? '?.browser.bh.js' : '?.browser.bemhtml.js', '?.browser.js']
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

            // Client Template Engine
            nodeConfig.addTechs([
                [depsByTechToBemdecl, {
                    target : '?.template.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'bemhtml'
                }],
                [deps, {
                    target : '?.template.deps.js',
                    bemdeclFile : '?.template.bemdecl.js'
                }],
                [files, {
                    depsFile : '?.template.deps.js',
                    filesTarget : '?.template.files',
                    dirsTarget : '?.template.dirs'
                }],
                BEM_TEMPLATE_ENGINE === 'BH'? [bhYm, {
                    target : '?.browser.bh.js',
                    filesTarget : '?.template.files',
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json',
                    mimic : 'BEMHTML'
                }] : [bemhtml, {
                    target : '?.browser.bemhtml.js',
                    filesTarget : '?.template.files',
                    devMode : false
                }]
            ]);

            // Build htmls
            nodeConfig.addTechs(BEM_TEMPLATE_ENGINE === 'BH'? [
                [bh, {
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json'
                }],
                [bhHtml]
            ] : [
                [bemhtml, { devMode : false }],
                [html]
            ]);

            langs.forEach(function(lang) {
                var destTarget = '?.' + lang + '.html';

                nodeConfig.addTech([copyFile, { source : '?.html', target : destTarget }]);
                nodeConfig.addTarget(destTarget);
            });

            nodeConfig.addTargets([
                '_?.css', '_?.js', '?.html'
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

    function configureSets(platforms, sets) {
        platforms.forEach(function(platform) {
            sets.docs.configure({
                destPath : platform + '.docs',
                levels : getLibLevels(platform),
                exampleSets : [platform + '.examples'],
                langs : langs,
                jsdoc : { suffixes : ['vanilla.js', 'browser.js', 'js'] }
            });

            configureNodes(platform, [platform + '.tests/*/*', platform + '.examples/*/*']);
        });
    }
};

function getLibLevels(platform) {
    return libLevels[platform];
}

function getSourceLevels(platform) {
    var levels = [];

    libs['bem-core'].levels[platform].forEach(function(level) {
        levels.push({ path : level, check : false });
    });

    libLevels[platform].forEach(function(level) {
        levels.push({ path : level, check : true });
    });

    libs['design'].levels[platform].forEach(function(level) {
        levels.push({ path : level, check : false });
    });

    return levels;
}

function getTestLevels(platform) {
    return [].concat(
        getSourceLevels(platform),
        libLevels['test']
    );
}
