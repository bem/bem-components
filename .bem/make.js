/* global MAKE:false */

var PATH = require('path'),
    environ = require('bem-environ')(__dirname);

require('bem-tools-autoprefixer').extendMake(MAKE);
require('./nodes')(MAKE);

try {
    require(environ.getLibPath('bem-pr', 'bem/nodes'))(MAKE);
} catch(e) {
    if(e.code !== 'MODULE_NOT_FOUND')
        throw e;
    require('bem/lib/logger').warn('"bem-pr" is not installer');
}


MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,
    bundlesLevelsRegexp : /^.+?\.pages$/,

    createCustomNodes : function() {
        var SetsNode = MAKE.getNodeClass('SetsNode');

        if(typeof SetsNode.createId === 'undefined') {
            return;
        }

        return SetsNode
            .create({ root : this.root, arch : this.arch })
            .alterArch();
    }

});


MAKE.decl('SetsNode', {

    /**
     * Описание уровней-источников
     * @returns {Object}
     */
    getSets : function() {
        return {
            'desktop' : [
                'common.blocks',
                'design/common.blocks',
                'desktop.blocks',
                'design/desktop.blocks'
            ],
            'touch-pad' : [
                'common.blocks',
                'design/common.blocks',
                'touch.blocks',
                'design/touch.blocks',
                'touch-pad.blocks',
                'design/touch-pad.blocks'
            ],
            'touch-phone' : [
                'common.blocks',
                'design/common.blocks',
                'touch.blocks',
                'design/touch.blocks',
                'design/touch-phone.blocks'
            ]
        };
    },

    getSourceTechs : function() {
        return ['examples', 'specs'];
    }

});


MAKE.decl('BundleNode', {

    /**
     * Технологии сборки бандла / примера
     * @returns {Array}
     */
    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'roole',
            'css',
            'bemhtml',
            'browser.js+bemhtml',
            'html'
        ];
    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'roole']);
    },

    getLevels : function() {
        return [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('bem-core', 'desktop.blocks')
        ].concat([
            'common.blocks',
            'desktop.blocks',
            'design/common.blocks',
            'design/desktop.blocks'
        ].map(function(path) {
            return PATH.resolve(environ.PRJ_ROOT, path);
        }))
        .concat(PATH.resolve(environ.PRJ_ROOT, PATH.dirname(this.getNodePrefix()), 'blocks'));
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('roole');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});


MAKE.decl('AutoprefixerNode', {

    getPlatform : function() {
        return this.output.split('.')[0];
    },

    getBrowsers : function() {
        var platform = this.getPlatform();
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

        return this.__base();
    }

});


MAKE.decl('TargetBundleNode', {

    'desktop-levels' : function() {
        return [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('bem-core', 'desktop.blocks'),
            'common.blocks',
            'desktop.blocks',
            'design/common.blocks',
            'design/desktop.blocks'
        ];
    },

    'touch-pad-levels' : function() {
        return [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('bem-core', 'touch.blocks'),
            'common.blocks',
            'touch.blocks',
            'design/common.blocks',
            'design/touch.blocks',
            'design/touch-pad.blocks'
        ];
    },

    'touch-phone-levels' : function() {
        return [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('bem-core', 'touch.blocks'),
            'common.blocks',
            'touch.blocks',
            'design/common.blocks',
            'design/touch.blocks',
            'design/touch-phone.blocks'
        ];
    },

    /**
     * Уровни переопределения используемые для сборки примера / теста
     */
    getLevels : function() {
        var resolve = PATH.resolve.bind(PATH, this.root),
            getLevels = this.getLevelPath().split('.')[0] + '-levels',
            levels = [];

        if(typeof this[getLevels] === 'function') {
            Array.prototype.push.apply(levels, this[getLevels]());
        }

        if(!levels.length) {
            return [];
        }

        return levels.map(function(level) {
            return resolve(level);
        });
    }

});


MAKE.decl('ExampleNode', {

    getLevels : function() {
        return this.__base()
            .concat(this.rootLevel
                .getTech('blocks')
                .getPath(this.getSourceNodePrefix()));
    }

});


MAKE.decl('SpecNode', {

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'roole',
            'spec.js+browser.js+bemhtml',
            'bemhtml',
            'html',
            'phantomjs'
        ];
    },

    getForkedTechs : function() {
        return ['bemhtml', 'spec.js+browser.js+bemhtml', 'phantomjs'];
    },

    getLevels : function() {
        return this.__base.apply(this, arguments)
            .concat(environ.getLibPath('bem-pr', 'spec.blocks'));
    }

});
