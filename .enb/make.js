var LIB_NAME = 'bem-components',
    DEFAULT_LANGS = ['ru', 'en'],
    BEM_TEMPLATE_ENGINE = process.env.BEM_TEMPLATE_ENGINE || 'BH',
    fs = require('fs'),
    path = require('path'),
    naming = require('bem-naming'),
    techs = require('./techs'),
    page = require('./helpers/page'),
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

    platforms.forEach(function(platform) {
        config.nodes([platform + '.pages/*'], function(node) {
            var dir = node.getNodePath(),
                levels = getTestLevels(platform),
                sublevel = path.join(dir, 'blocks');

            if(fs.existsSync(sublevel)) {
                levels.push(sublevel);
            }

            node.addTech([techs.files.provide, { target : '?.bemjson.js' }]);

            page(node, {
                levels : levels,
                browsers : getBrowsers(platform),
                langs : langs,
                templateEngine : BEM_TEMPLATE_ENGINE
            });
        });
    });

    configureDist(platforms);
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
                    [techs.bem.depsOld, { bemdeclFile : '.tmp.bemdecl.js', target : '.tmp.deps.js' }],
                    [techs.bem.files, { depsFile : '.tmp.deps.js' }],
                    [techs.css.stylusWithAutoprefixer, {
                        target : '.tmp.dev.css',
                        browsers : getBrowsers(platform)
                    }],
                    [techs.css.stylus, {
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
                        target : '.tmp.pre-source.js'
                    }],
                    [techs.borschik, { source : '.tmp.pre-source.js', target : '.tmp.source.js', freeze : false, minify : false }],
                    [techs.ym, {
                        source : '.tmp.source.js',
                        target : LIB_NAME + '.dev.js'
                    }],
                    [techs.engines.bemhtml, { target : LIB_NAME + '.dev.bemhtml.js', devMode : false }],
                    [techs.engines.bhServerInclude, { target : LIB_NAME + '.dev.bh.js', jsAttrName : 'data-bem', jsAttrScheme : 'json', mimic : ['BH', 'BEMHTML'] }],
                    [techs.engines.bhClient, { target : '.tmp.browser.bh.js', jsAttrName : 'data-bem', jsAttrScheme : 'json', mimic : ['BH', 'BEMHTML'] }],
                    [techs.files.merge, {
                        target : LIB_NAME + '.dev.js+bemhtml.js',
                        sources : [LIB_NAME + '.dev.js', LIB_NAME + '.dev.bemhtml.js']
                    }],
                    [techs.files.merge, {
                        target : LIB_NAME + '.dev.js+bh.js',
                        sources : [LIB_NAME + '.dev.js', '.tmp.browser.bh.js']
                    }],
                    [techs.borschik, { source : '.tmp.dev.css', target : LIB_NAME + '.dev.css', tech : 'cleancss', freeze : true, minify : false }],
                    [techs.borschik, { source : '.tmp.dev.ie.css', target : LIB_NAME + '.dev.ie.css', tech : 'cleancss', freeze : true, minify : false }],
                    [techs.borschik, { source : LIB_NAME + '.dev.css', target : LIB_NAME + '.css', tech : 'cleancss', freeze : true, minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.ie.css', target : LIB_NAME + '.ie.css', tech : 'cleancss', freeze : true, minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.js', target : LIB_NAME + '.js', freeze : true, minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.bemhtml.js', target : LIB_NAME + '.bemhtml.js', freeze : true, minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.bh.js', target : LIB_NAME + '.bh.js', freeze : true, minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.js+bemhtml.js', target : LIB_NAME + '.js+bemhtml.js', freeze : true, minify : true }],
                    [techs.borschik, { source : LIB_NAME + '.dev.js+bh.js', target : LIB_NAME + '.js+bh.js', freeze : true, minify : true }]
                ]);

                nodeConfig.addTargets([
                    LIB_NAME + '.css', LIB_NAME + '.ie.css', LIB_NAME + '.js', LIB_NAME + '.bemhtml.js', LIB_NAME + '.bh.js', LIB_NAME + '.js+bemhtml.js', LIB_NAME + '.js+bh.js'
                ]);
            });
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

            config.nodes([platform + '.tests/*/*', platform + '.examples/*/*'], function(node) {
                var dir = node.getNodePath(),
                    sublevels = [
                        path.join(dir, '..', '.blocks'),
                        path.join(dir, 'blocks')
                    ].filter(function(sublevel) {
                        return fs.existsSync(sublevel);
                    }),
                    levels = [].concat(
                        getTestLevels(platform),
                        sublevels
                    );

                page(node, {
                    levels : levels,
                    browsers : getBrowsers(platform),
                    langs : langs,
                    templateEngine : BEM_TEMPLATE_ENGINE
                });
            });
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
