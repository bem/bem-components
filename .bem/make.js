/*global MAKE:false */

var PATH = require('path'),
    environ = require('bem-environ')(__dirname);

environ.extendMake(MAKE);

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

    'create-roole-optimizer-node' : function() {
        return this['create-css-optimizer-node'].apply(this, arguments);
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
            'design/common.blocks',
            'touch.blocks',
            'design/touch.blocks',
            'touch-pad.blocks',
            'design/touch-pad.blocks'
        ];
    },

    'touch-phone-levels' : function() {
        return [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('bem-core', 'touch.blocks'),
            'common.blocks',
            'design/common.blocks',
            'touch.blocks',
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
        return this.__base()
            .concat([
                'spec.js+browser.js+bemhtml',
                'phantomjs'
            ]);
    },

    getLevels : function() {
        return this.__base.apply(this, arguments)
            .concat(environ.getLibPath('bem-pr', 'spec.blocks'));
    }

});
