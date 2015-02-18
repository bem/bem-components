var techs = require('./techs');

module.exports = function(node, options) {
    var levels = options.levels || [],
        browsers = options.browser || [],
        langs = options.langs || [],
        templateEngine = options.templateEngine || 'BH';

    // essential
    node.addTechs([
        [techs.bem.levels, { levels : levels }],
        [techs.bem.bemjsonToBemdecl, {
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

    // css
    node.addTech([techs.css, {
        target : '.tmp.css',
        browsers : browsers
    }]);
    node.mode('development', function() {
        node.addTech([techs.files.copy, {
            source : '.tmp.css',
            target : '?.css'
        }]);
    });
    node.mode('production', function() {
        node.addTech([techs.process, {
            source : '.tmp.css',
            target : '?.css',
            minify : true,
            tech : 'cleancss'
        }]);
    });
    node.addTarget('?.css');

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
        templateEngine === 'BH'? [techs.engines.bhClient, {
            target : '.tmp.js-template.js',
            filesTarget : '.tmp.js-template.files',
            jsAttrName : 'data-bem',
            jsAttrScheme : 'json',
            mimic : 'BEMHTML'
        }] : [techs.engines.bemhtml, {
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
            target : '.tmp.source.js'
        }],
        [techs.browser.ym, {
            source : '.tmp.source.js',
            target : '.tmp.js'
        }]
    ]);
    node.mode('development', function() {
        node.addTech([techs.files.copy, {
            source : '.tmp.js',
            target : '?.js'
        }]);
    });
    node.mode('production', function() {
        node.addTech([techs.process, {
            source : '.tmp.js',
            target : '?.js',
            minify : true
        }]);
    });
    node.addTarget('?.js');

    // Htmls by langs
    node.addTechs([
        templateEngine === 'BH'? [techs.engines.bhServer, {
                target : 'bemhtml.dev.js',
                jsAttrName : 'data-bem',
                jsAttrScheme : 'json'
            }] : [techs.engines.bemhtml, {
            target : 'bemhtml.dev.js',
            devMode : false
        }],
        [techs.process, {
            source : 'bemhtml.dev.js',
            target : 'bemhtml.js',
            minify : true
        }],
        templateEngine === 'BH'? [techs.html.bh, {
            bhFile : 'bemhtml.js'
        }] : [techs.html.bemhtml]
    ]);
    node.addTargets(['?.html']);

    langs.forEach(function(lang) {
        var target = '?.' + lang + '.html';

        node.addTech([techs.files.copy, {
            source : '?.html',
            target : target
        }]);
        node.addTarget(target);
    });
};
