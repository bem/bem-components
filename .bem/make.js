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
     * Описание уровней-источников для сетов
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
        return ['examples', 'tests', 'specs'];
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

    /**
     * Список технологий которые необходимо собирать в отдельном процессе
     * @returns {Array}
     */
    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'roole']);
    },

    /**
     * Возвращает список уровней переопределения по названию бандла
     *
     * @returns {Object}
     */
    getLevelsMap : function() {
        return {
            'desktop' : [
                'libs/bem-core/common.blocks',
                'libs/bem-core/desktop.blocks',
                'common.blocks',
                'desktop.blocks',
                'design/common.blocks',
                'design/desktop.blocks'
            ],
            'touch-pad' : [
                'libs/bem-core/common.blocks',
                'libs/bem-core/touch.blocks',
                'common.blocks',
                'touch.blocks',
                'design/common.blocks',
                'design/touch.blocks',
                'design/touch-pad.blocks'
            ],
            'touch-phone' : [
                'libs/bem-core/common.blocks',
                'libs/bem-core/touch.blocks',
                'common.blocks',
                'touch.blocks',
                'design/common.blocks',
                'design/touch.blocks',
                'design/touch-phone.blocks'
            ]
        };
    },

    /**
     * Возвращает список уровней переопределения для сборки бандла
     * @returns {Array}
     */
    getLevels : function() {
        var resolve = PATH.resolve.bind(PATH, this.root),
            buildLevel = this.getLevelPath().split('.')[0],
            levels = this.getLevelsMap()[buildLevel] || [];

        return levels
            .map(function(path) { return resolve(path); })
            .concat(resolve(PATH.dirname(this.getNodePrefix()), 'blocks'));
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


MAKE.decl('SpecNode', {

    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'roole',
            'css',
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
