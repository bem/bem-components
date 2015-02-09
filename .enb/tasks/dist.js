var path = require('path'),
    techs = {
        bem : require('enb-bem-techs'),
        css : require('enb-stylus/techs/css-stylus-with-autoprefixer'),
        files : {
            merge : require('enb/techs/file-merge')
        },
        browser : {
            js : require('enb-diverse-js/techs/browser-js'),
            ym : require('enb-modules/techs/prepend-modules')
        },
        engines : {
            bemhtml : require('enb-bemxjst/techs/bemhtml-old'),
            bhServer : require('enb-bh/techs/bh-server-include'),
            bhClient : require('enb-bh/techs/bh-client-module')
        },
        process : require('enb-borschik/techs/borschik')
    },
    libLevels = require('../config/levels'),
    libs = require('../config/libs'),
    browsers = require('../config/browsers'),
    platforms = require('../config/platforms');

module.exports = function(config) {
    config.task('dist', function(task) {
        return task.buildTargets(platforms.map(function(platform) {
            return 'dist/' + platform;
        }));
    });

    platforms.forEach(function(platform) {
        config.node('dist/' + platform, function(node) {
            var levels = [].concat(
                    libs['bem-core'].levels[platform].map(function(level) {
                        return { path : level, check : false };
                    }),
                    libLevels[platform],
                    libs['design'].levels[platform]
                );

            // essential
            node.addTechs([
                [techs.bem.levels, { levels : levels }],
                [techs.bem.levelsToBemdecl, {
                    target : '.tmp.bemdecl.js'
                }],
                [techs.bem.deps, {
                    bemdeclFile : '.tmp.bemdecl.js',
                    target : '.tmp.deps.js'
                }],
                [techs.bem.files, {
                    depsFile : '.tmp.deps.js'
                }]
            ]);

            // BEMHTML for Node.js and browsers
            node.addTechs([
                [techs.engines.bemhtml, {
                    target : 'bemhtml.dev.js',
                    devMode : false
                }],
                [techs.process, {
                    source : 'bemhtml.dev.js',
                    target : 'bemhtml.js',
                    minify : true
                }]
            ]);
            node.addTargets(['bemhtml.dev.js', 'bemhtml.js']);

            // BH for Node.js
            node.addTechs([
                [techs.engines.bhServer, {
                    target : 'bh.node.dev.js',
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json'
                }],
                [techs.process, {
                    source : 'bh.node.dev.js',
                    target : 'bh.node.js',
                    minify : true
                }]
            ]);
            node.addTargets(['bh.node.dev.js', 'bh.node.js']);

            // css
            node.addTechs([
                [techs.css, {
                    target : 'styles.dev.css',
                    browsers : browsers[platform]
                }],
                [techs.process, {
                    source : 'styles.dev.css',
                    target : 'styles.css',
                    minify : true,
                    tech : 'cleancss'
                }]
            ]);
            node.addTargets(['styles.dev.css', 'styles.css']);

            // JavaScript for browsers
            node.addTechs([
                // Template engine for JavaScript
                [techs.bem.depsByTechToBemdecl,  {
                    target : '.tmp.js-template.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'bemhtml'
                }],
                [techs.bem.deps, {
                    target : '.tmp.js-template.deps.js',
                    bemdeclFile : '.tmp.js-template.bemdecl.js'
                }],
                [techs.bem.files, {
                    depsFile : '.tmp.js-template.deps.js',
                    filesTarget : '.tmp.js-template.files',
                    dirsTarget : '.tmp.js-template.dirs'
                }],
                [techs.engines.bemhtml, {
                    target : '.tmp.js-template.js',
                    filesTarget : '.tmp.js-template.files',
                    devMode : false
                }],

                // JavaScript Files
                [techs.bem.depsByTechToBemdecl, {
                    target : '.tmp.required-js.bemdecl.js',
                    sourceTech : 'js',
                    destTech : 'js'
                }],
                [techs.bem.mergeBemdecl, {
                    sources : ['.tmp.bemdecl.js', '.tmp.required-js.bemdecl.js'],
                    target : '.tmp.js.bemdecl.js'
                }],
                [techs.bem.deps, {
                    target : '.tmp.js.deps.js',
                    bemdeclFile : '.tmp.js.bemdecl.js'
                }],
                [techs.bem.files, {
                    depsFile : '.tmp.js.deps.js',
                    filesTarget : '.tmp.js.files',
                    dirsTarget : '.tmp.js.dirs'
                }],

                // JavaScript
                [techs.browser.js, {
                    filesTarget : '.tmp.js.files',
                    target : '.tmp.js'
                }],
                [techs.browser.ym, {
                    source : '.tmp.js',
                    target : 'scripts.dev.js'
                }],
                [techs.process, {
                    source : 'scripts.dev.js',
                    target : 'scripts.js',
                    minify : true
                }]
            ]);
            node.addTargets(['scripts.dev.js', 'scripts.js']);

            // JavaScript + BEMHTML for browsers
            node.addTechs([
                [techs.files.merge, {
                    sources : ['scripts.dev.js', 'bemhtml.dev.js'],
                    target : 'scripts+bemhtml.dev.js'
                }],
                [techs.files.merge, {
                    sources : ['scripts.js', 'bemhtml.js'],
                    target : 'scripts+bemhtml.js'
                }]
            ]);
            node.addTargets(['scripts+bemhtml.dev.js', 'scripts+bemhtml.js']);

            // JavaScript + BH for browsers
            node.addTechs([
                [techs.engines.bhClient, {
                    target : '.tmp.bh.dev.js',
                    jsAttrName : 'data-bem',
                    jsAttrScheme : 'json'
                }],
                [techs.process, {
                    source : '.tmp.bh.dev.js',
                    target : '.tmp.bh.js',
                    minify : true
                }],
                [techs.files.merge, {
                    sources : ['scripts.dev.js', '.tmp.bh.dev.js'],
                    target : 'scripts+bh.dev.js'
                }],
                [techs.files.merge, {
                    sources : ['scripts.js', '.tmp.bh.js'],
                    target : 'scripts+bh.js'
                }]
            ]);
            node.addTargets(['scripts+bh.dev.js', 'scripts+bh.js']);
        });
    });
};
