var techs = require('../techs');

module.exports = function(node, options) {
    var templateEngine = options.templateEngine || 'BH';

    // JavaScript for browsers
    node.addTechs([
        // Template Engines for JavaScript
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
        templateEngine === 'BH'? [techs.engines.bhClient, {
            target : '?.browser.bh.js',
            filesTarget : '?.template.files',
            jsAttrName : 'data-bem',
            jsAttrScheme : 'json',
            mimic : 'BEMHTML'
        }] : [techs.engines.bemhtml, {
            target : '?.browser.bemhtml.js',
            filesTarget : '?.template.files',
            devMode : false
        }],

        // JavaScript Files
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
        }],

        // JavaScript with required Template Engines
        [techs.js, {
            filesTarget : '?.js.files'
        }],
        [techs.files.merge, {
            target : '?.pre.js',
            sources : [templateEngine === 'BH'? '?.browser.bh.js' : '?.browser.bemhtml.js', '?.browser.js']
        }],
        [techs.ym, {
            source : '?.pre.js',
            target : '?.js'
        }]
    ]);
    node.mode('development', function() {
        node.addTech([techs.borschik, { source : '?.js', target : '_?.js', freeze : true, minify : false }]);
    });
    node.mode('production', function() {
        node.addTech([techs.borschik, { source : '?.js', target : '_?.js', freeze : true, minify : true }]);
    });
    node.addTarget('_?.js');
};
