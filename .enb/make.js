var DEFAULT_LANGS = ['ru', 'en'],
    fs = require('fs'),
    path = require('path'),
    docSets = require('enb-bem-docs'),
    exampleSets = require('enb-bem-examples'),
    specSets = require('enb-bem-specs'),
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
    borschik = require('enb-borschik/techs/borschik');

module.exports = function(config) {
    var docs = docSets.create('docs', config),
        examples = exampleSets.create('examples', config),
        tests = exampleSets.create('tests', config),
        specs = specSets.create('specs', config),
        langs = process.env.BEM_I18N_LANGS;

    config.setLanguages(langs? langs.split(' ') : [].concat(DEFAULT_LANGS));

    examples.build({
        destPath : 'desktop.examples',
        levels : getDesktopLibLevels(config),
        inlineBemjson : true
    });

    tests.build({
        destPath : 'desktop.tests',
        levels : getDesktopLibLevels(config),
        suffixes : ['tests']
    });

    specs.configure({
        destPath : 'desktop.specs',
        levels : getDesktopLibLevels(config),
        sourceLevels : getDesktopSpecLevels(config)
    });

    docs.configure({
        destPath : 'desktop.docs',
        levels : getDesktopLibLevels(config),
        examplePattern : ['desktop.examples/?/*', 'desktop.tests/?/*'],
        inlineExamplePattern : 'desktop.examples/?/*'
    });

    examples.build({
        destPath : 'touch-pad.examples',
        levels : getTouchPadLibLevels(config),
        inlineBemjson : true
    });

    tests.build({
        destPath : 'touch-pad.tests',
        levels : getTouchPadLibLevels(config),
        suffixes : ['tests']
    });

    specs.configure({
        destPath : 'touch-pad.specs',
        levels : getTouchPadLibLevels(config),
        sourceLevels : getTouchPadSpecLevels(config)
    });

    docs.configure({
        destPath : 'touch-pad.docs',
        levels : getTouchPadLibLevels(config),
        examplePattern : ['touch-pad.examples/?/*', 'touch-pad.tests/?/*'],
        inlineExamplePattern : 'touch-pad.examples/?/*'
    });

    examples.build({
        destPath : 'touch-phone.examples',
        levels : getTouchPhoneLibLevels(config),
        inlineBemjson : true
    });

    tests.build({
        destPath : 'touch-phone.tests',
        levels : getTouchPhoneLibLevels(config),
        suffixes : ['tests']
    });

    specs.configure({
        destPath : 'touch-phone.specs',
        levels : getTouchPhoneLibLevels(config),
        sourceLevels : getTouchPhoneSpecLevels(config)
    });

    docs.configure({
        destPath : 'touch-phone.docs',
        levels : getTouchPhoneLibLevels(config),
        examplePattern : ['touch-phone.examples/?/*', 'touch-phone.tests/?/*'],
        inlineExamplePattern : 'touch-phone.examples/?/*'
    });

    config.nodes(['desktop.examples/*/*', 'desktop.pages/*'], function(nodeConfig) {
        var nodeDir = nodeConfig.getNodePath(),
            blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
            sublevelDir = path.join(nodeDir, 'blocks'),
            extendedLevels = [].concat(getDesktopLevels(config));

        if(fs.existsSync(blockSublevelDir)) {
            extendedLevels.push(blockSublevelDir);
        }

        if(fs.existsSync(sublevelDir)) {
            extendedLevels.push(sublevelDir);
        }

        nodeConfig.addTech([levels, { levels : extendedLevels }]);
    });

    config.nodes(['desktop.tests/*/*'], function(nodeConfig) {
        var nodeDir = nodeConfig.getNodePath(),
            blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
            sublevelDir = path.join(nodeDir, 'blocks'),
            extendedLevels = [].concat(getDesktopTestLevels(config));

        if(fs.existsSync(blockSublevelDir)) {
            extendedLevels.push(blockSublevelDir);
        }

        if(fs.existsSync(sublevelDir)) {
            extendedLevels.push(sublevelDir);
        }

        nodeConfig.addTech([levels, { levels : extendedLevels }]);
    });

    config.nodes(['touch-pad.examples/*/*', 'touch-pad.pages/*'], function(nodeConfig) {
        var nodeDir = nodeConfig.getNodePath(),
            blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
            sublevelDir = path.join(nodeDir, 'blocks'),
            extendedLevels = [].concat(getTouchPadLevels(config));

        if(fs.existsSync(blockSublevelDir)) {
            extendedLevels.push(blockSublevelDir);
        }

        if(fs.existsSync(sublevelDir)) {
            extendedLevels.push(sublevelDir);
        }

        nodeConfig.addTech([levels, { levels : extendedLevels }]);
    });

    config.nodes(['touch-pad.tests/*/*'], function(nodeConfig) {
        var nodeDir = nodeConfig.getNodePath(),
            blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
            sublevelDir = path.join(nodeDir, 'blocks'),
            extendedLevels = [].concat(getTouchPadTestLevels(config));

        if(fs.existsSync(blockSublevelDir)) {
            extendedLevels.push(blockSublevelDir);
        }

        if(fs.existsSync(sublevelDir)) {
            extendedLevels.push(sublevelDir);
        }

        nodeConfig.addTech([levels, { levels : extendedLevels }]);
    });

    config.nodes(['touch-phone.examples/*/*', 'touch-phone.pages/*'], function(nodeConfig) {
        var nodeDir = nodeConfig.getNodePath(),
            blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
            sublevelDir = path.join(nodeDir, 'blocks'),
            extendedLevels = [].concat(getTouchPhoneLevels(config));

        if(fs.existsSync(blockSublevelDir)) {
            extendedLevels.push(blockSublevelDir);
        }

        if(fs.existsSync(sublevelDir)) {
            extendedLevels.push(sublevelDir);
        }

        nodeConfig.addTech([levels, { levels : extendedLevels }]);
    });

    config.nodes(['touch-phone.tests/*/*'], function(nodeConfig) {
        var nodeDir = nodeConfig.getNodePath(),
            blockSublevelDir = path.join(nodeDir, '..', '.blocks'),
            sublevelDir = path.join(nodeDir, 'blocks'),
            extendedLevels = [].concat(getTouchPhoneTestLevels(config));

        if(fs.existsSync(blockSublevelDir)) {
            extendedLevels.push(blockSublevelDir);
        }

        if(fs.existsSync(sublevelDir)) {
            extendedLevels.push(sublevelDir);
        }

        nodeConfig.addTech([levels, { levels : extendedLevels }]);
    });

    config.nodes(['desktop.pages/*', 'desktop.tests/*/*', 'desktop.examples/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [autoprefixer, {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getDesktopBrowsers()
            }]
        ]);
    });

    config.nodes(['touch-pad.pages/*', 'touch-pad.tests/*/*', 'touch-pad.examples/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [autoprefixer, {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getTouchPadBrowsers()
            }]
        ]);
    });

    config.nodes(['touch-phone.pages/*', 'touch-phone.tests/*/*', 'touch-phone.examples/*/*'], function(nodeConfig) {
        nodeConfig.addTechs([
            [autoprefixer, {
                sourceTarget : '?.noprefix.css',
                destTarget : '?.css',
                browserSupport : getTouchPhoneBrowsers()
            }]
        ]);
    });

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

function getDesktopLibLevels(config) {
    return [
        'common.blocks',
        'desktop.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadLibLevels(config) {
    return [
        'common.blocks',
        'touch.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneLibLevels(config) {
    return [
        'common.blocks',
        'touch.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks',
        'design/desktop.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-pad.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-phone.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopTestLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks',
        'design/desktop.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadTestLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-pad.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneTestLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-phone.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopSpecLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/desktop.blocks', check : false },
        { path : 'libs/bem-pr/spec.blocks', check : false },
        'common.blocks',
        'desktop.blocks',
        'design/common.blocks',
        'design/desktop.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPadSpecLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        { path : 'libs/bem-pr/spec.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-pad.blocks',
        'test.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getTouchPhoneSpecLevels(config) {
    return [
        { path : 'libs/bem-core/common.blocks', check : false },
        { path : 'libs/bem-core/touch.blocks', check : false },
        { path : 'libs/bem-pr/spec.blocks', check : false },
        'common.blocks',
        'touch.blocks',
        'design/common.blocks',
        'design/touch.blocks',
        'design/touch-phone.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}

function getDesktopBrowsers() {
    return [
        'last 2 versions',
        'ie 10',
        'ff 24',
        'opera 12.16'
    ];
}

function getTouchPadBrowsers() {
    return [
        'android 4',
        'ios 5'
    ];
}

function getTouchPhoneBrowsers() {
    return [
        'android 4',
        'ios 6',
        'ie 10'
    ];
}
