/*global MAKE:true */

var PATH = require('path'),
    environ = require('bem-environ')(__dirname);

environ.extendMake(MAKE);

require('./nodes');

try {
    var setsNodes = require(environ.getLibPath('bem-pr', 'bem/nodes/sets'));
} catch(e) {
    if(e.code !== 'MODULE_NOT_FOUND')
        throw e;

    require('bem/lib/logger').warn('"bem-pr" is not installer');
}

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks$/,

    bundlesLevelsRegexp: /^.+?\.pages$/,

    libraries: [ 'bem-core', 'bem-pr@origin/v0.2' ],

    createCustomNodes: function(common, libs, blocks) {
        if(!setsNodes) return;

        // Сборка примеров
        return setsNodes.SetsNode
            .create({ root : this.root, arch : this.arch })     // создаем экземпляр узла
            .alterArch(null, libs);                             // расширяем процесс сборки новыми узлами из bem-pr
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
            ],
        };
    }

});


MAKE.decl('ExampleNode', {

    /**
     * Технологии сборки примера
     * @returns {Array}
     */
    getTechs : function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'css',
            'bemhtml',
            'browser.js+bemhtml',
            'html'
        ];
    },

    'desktop-levels' : function() {
        return [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('bem-core', 'desktop.blocks'),
            'common.blocks',
            'design/common.blocks',
            'desktop.blocks',
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
    * Уровни переопределения используемые для сборки примера
    */
    getLevels : function() {
        var type = this.getNodePrefix().split('.')[0],
            resolve = PATH.resolve.bind(null, this.root),
            levels = [ ],
            getLevels = this[(type.indexOf(environ.getConf().siteOutputFolder) === 0? 'desktop' : type) + '-levels'];

        getLevels && (levels = levels.concat(getLevels()));

        levels.push(
            this.getSourceNodePrefix() // Подключаем директорию blocks из папки с примерами блока
                .split('/')
                .slice(0, -1)
                .concat([ 'blocks' ])
                .join('/'),
            this.rootLevel // Подключаем %examplename%.blocks из папки с примерами блока
                .getTech('blocks')
                .getPath(this.getSourceNodePrefix()));

        return levels.map(function(level) {
            return resolve(level);
        });
    }

});


MAKE.decl('TestNode', {

    getLevels : function() {
        return this.__base().concat([
            environ.getLibPath('bem-pr', 'test.blocks')
        ]);
    },

    getTechs : function() {
        return this.__base().concat([
            'test.js+browser.js+bemhtml',
            'phantomjs'
        ]);
    }
});
