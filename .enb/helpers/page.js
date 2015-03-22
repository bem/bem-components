var techs = require('../techs'),
    browserJS = require('./browser-js');

module.exports = function(node, options) {
    var levels = options.levels || [],
        browsers = options.browsers,
        langs = options.langs || [],
        templateEngine = options.templateEngine || 'BH';

    // essential
    node.addTechs([
        [techs.bem.levels, { levels : levels }],
        [techs.bem.bemjsonToBemdecl],
        [techs.bem.depsOld],
        [techs.bem.files]
    ]);

    // css
    node.addTechs([
        [techs.css.stylusWithAutoprefixer, { sourceSuffixes : ['styl'], browsers : browsers }],
        [techs.css.stylus, { target : '?.ie.css', sourceSuffixes : ['styl', 'ie.styl'] }],
    ]);
    node.mode('development', function() {
        node.addTechs([
            [techs.borschik, { source : '?.css', target : '_?.css', freeze : true, minify : false }],
            [techs.borschik, { source : '?.ie.css', target : '_?.ie.css', freeze : true, minify : false }]
        ]);
    });
    node.mode('production', function() {
        node.addTechs([
            [techs.borschik, { source : '?.css', target : '_?.css', freeze : true, tech : 'cleancss', minify : true }],
            [techs.borschik, { source : '?.ie.css', target : '_?.ie.css', freeze : true, tech : 'cleancss', minify : true }],
        ]);
    });
    node.addTargets(['_?.css', '_?.ie.css']);

    // JavaScript for browsers
    browserJS(node, options);

    // HTML
    node.addTechs(templateEngine === 'BH'? [
        [techs.engines.bhServer, {
            jsAttrName : 'data-bem',
            jsAttrScheme : 'json'
        }],
        [techs.html.bh]
    ] : [
        [techs.engines.bemhtml, { devMode : false }],
        [techs.html.bemhtml]
    ]);
    node.addTarget('?.html');

    // HTML by langs
    langs.forEach(function(lang) {
        var target = '?.' + lang + '.html';

        node.addTech([techs.files.copy, { source : '?.html', target : target }]);
        node.addTarget(target);
    });
};
