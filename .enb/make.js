var DEFAULT_LANGS = ['ru', 'en'],
    fs = require('fs'),
    path = require('path'),
    docSets = require('enb-bem-docs'),
    exampleSets = require('enb-bem-examples'),
    specSets = require('enb-bem-specs'),
    tmplSets = require('enb-bem-tmpl-specs'),
    levels = require('enb/techs/levels'),
    provide = require('enb/techs/file-provider'),
    bemdeclFromDepsByTech = require('enb/techs/bemdecl-from-deps-by-tech'),
    bemdecl = require('enb/techs/bemdecl-from-bemjson'),
    deps = require('enb/techs/deps-old'),
    files = require('enb/techs/files'),
    mergeBemdecl = require('enb/techs/bemdecl-merge'),
    css = require('enb-stylus/techs/css-stylus'),
    autoprefixer = require('enb-autoprefixer/techs/css-autoprefixer'),
    js = require('enb-diverse-js/techs/browser-js'),
    ym = require('enb-modules/techs/prepend-modules'),
    bemhtml = require('enb-bemxjst/techs/bemhtml-old'),
    bemtree = require('enb-bemxjst/techs/bemtree-old'),
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
    var sets = {
            docs : docSets.create('docs', config),
            examples : exampleSets.create('examples', config),
            tests : exampleSets.create('tests', config),
            specs : specSets.create('specs', config),
            tmplSpecs : tmplSets.create('tmpl-specs', config)
        },
        langs = process.env.BEM_I18N_LANGS;

    config.setLanguages(langs? langs.split(' ') : [].concat(DEFAULT_LANGS));

    configureSets('desktop', config, sets);
    configureSets('touch-pad', config, sets);
    configureSets('touch-phone', config, sets);

    configureLevels('desktop', config, sets);
    configureLevels('touch-pad', config, sets);
    configureLevels('touch-phone', config, sets);

    configureAutoprefixer('desktop', config, sets);
    configureAutoprefixer('touch-pad', config, sets);
    configureAutoprefixer('touch-phone', config, sets);

    config.nodes(['*.tests/*/*', '*.examples/*/*', '*.pages/*'], function(nodeConfig) {
        var langs = config.getLanguages();

        // Base techs
        nodeConfig.addTechs([
            [provide, { target : '?.bemjson.js' }],
            [copyFile, { source : '?.bemjson.js', target : '_?.bemjson.js' }],
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
                target : '?.js.bemhtml.bemdecl.js',
                sourceTech : 'js',
                destTech : 'bemhtml'
            }],
            [mergeBemdecl, {
                bemdeclSources : ['?.js.bemhtml.bemdecl.js', '?.bemdecl.js'],
                bemdeclTarget : '?.bemhtml.bemdecl.js'
            }],

            [deps, {
                depsTarget : '?.bemhtml.deps.js',
                bemdeclTarget : '?.bemhtml.bemdecl.js'
            }],
            [files, {
                depsTarget : '?.bemhtml.deps.js',
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
            '_?.bemjson.js', '_?.css', '_?.js', '?.html', '?.bh.html'
        ]);
    });

    config.mode('development', function() {
        config.nodes(['*.pages/*', '*.tests/*/*', '*.examples/*/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                [copyFile, { source : '?.css', target : '_?.css' }],
                [copyFile, { source : '?.js', target : '_?.js' }]
            ]);
        });
    });

    config.mode('production', function() {
        config.nodes(['*.pages/*', '*.tests/*/*', '*.examples/*/*'], function(nodeConfig) {
            nodeConfig.addTechs([
                [borschik, { source : '?.css', target : '_?.css', freeze : true }],
                [borschik, { source : '?.js', target : '_?.js', freeze : true }]
            ]);
        });
    });
};

function configureLevels(platform, config) {
    config.nodes([platform + '.examples/*/*', platform + '.pages/*', platform + '.tests/*/*'], function(nodeConfig) {
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

function configureAutoprefixer(platform, config) {
    config.nodes([platform + '.pages/*', platform + '.tests/*/*', platform + '.examples/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [autoprefixer, {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getBrowsers(platform)
            }]
        ]);
    });
}

function configureSets(platform, config, sets) {
    sets.examples.build({
        destPath : platform + '.examples',
        levels : getLibLevels(platform, config),
        inlineBemjson : true
    });

    sets.tests.build({
        destPath : platform + '.tests',
        levels : getLibLevels(platform, config),
        suffixes : ['tests']
    });

    sets.specs.configure({
        destPath : platform + '.specs',
        levels : getLibLevels(platform, config),
        sourceLevels : getSpecLevels(platform, config)
    });

    sets.tmplSpecs.configure({
        destPath : platform + '.tmpl-specs',
        levels : getLibLevels(platform, config),
        sourceLevels : getSpecLevels(platform, config)
    });

    sets.docs.configure({
        destPath : platform + '.docs',
        levels : getLibLevels(platform, config),
        examplePattern : [platform + '.examples/?/*', platform + '.tests/?/*'],
        inlineExamplePattern : platform + '.examples/?/*'
    });
}

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
        levels.push({ path : name + '.blocks', check : false });
    });

    platformNames.forEach(function(name) {
        levels.push({ path : path.join('design', name + '.blocks'), check : false });
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
