/*global MAKE */

var BEM = require('bem'),
    PATH = require('path'),

    // {Node} Базовый узел про построение сайта
    SiteNode = require('./nodes/site').SiteArch;


MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,

    bundlesLevelsRegexp : /^.+?\.pages$/,

    getLibraries : function() {

        return {
            'bem-bl' : {
                type        : 'git',
                url         : 'git://github.com/bem/bem-bl.git',
                treeish     : '0.3'
            },
            'bem-json' : {
                type        : 'git',
                url         : 'git://github.com/delfrrr/bem-json.git',
                npmPackages : false
            }
        };

    },

    createCustomNodes : function(common, libs, blocks) {

        var arch = this.arch,
            site = new SiteNode({
                arch    : arch,
                root    : this.root
            });

        /**
         * site -> {libs, blocks}
         *
         * в общем случае сайт должен зависеть от подключаемых библиотек
         * и сборки блоков собственных блоков библиотеки:
         */
        arch.setNode(site, null, libs.concat(blocks));

        /**
         * Изменяем архитектуру сборки, добавляем дочернии узлы
         *
         * site -> {lib/bem-machine, lib/bem-machine*}
         * lib/bem-machine* -> lib/bem-machine/bundles*
         *
         * FIXME: сейчас сайт собирается непосредственно в директорию `bem-machine/site.bundles`.
         * Нужно придумать, как создавать `output` с правильными конфигами уровней
         * и заполненными `bemdecl.js` для `index` и `catalogue`.
         */
        return site.alterArch();

    }

});


/**
 * TODO: разобраться почему не работает переопределение собственных узов
 *
 * Хочется иметь возможность в проектном `make.js` переопределить узел (MachineNode),
 * с собственными настройками для сайта.
 * По аналогии с другими публичными узлами (Arch, BundleNode, пр.)
 */
MAKE.decl('MachineNode', {

    siteconf : {

        'levels' : ['desktop.blocks'],
        'langs' : ['ru'],
        // TODO: sets
        'sets' : {
            'desktop.blocks' : {
                'examples' : [
                    'bem-bl/blocks-common',
                    'bem-bl/blocks-desktop',
                    'desktop.blocks'
                ]
            }
        }

    }

});


/**
 * FIXME: Далее хардкод про то, как собирать бандл с сайтом.
 *
 * Нужно придумать, как запускать предварительную сборку выкаченной библиотеки.
 * Т.е. нужен аналог
 *
 *  > make -C lego/ -B pages-desktop
 *
 * У библиотеки могут быть:
 *  - свои зависимости (`bem-machine` зависит от `bem-json`)
 *  - свои наборы технологий, `BundleNode::getTechs()`
 *    сейчас сборка падает с
 *    `Tech module with path '[...]/bl-controls/bem-machine/lib/bem-html/.bem/techs/bemhtml.js' not found on require search paths`
 *  - свои правила сборки технологий, `BundleNode::getLevels()`
 *  - пр. магия
 *
 * NOTE: смотреть в строну `cp.fork`-воркеров?
 */
MAKE.decl('BundleNode', {

    isSiteBundle : function() {
        return this.getLevelPath() === 'bem-machine/site.bundles';
    },

    getTechs : function() {

        if(this.isSiteBundle()) {
            return [
                'bemdecl.js',
                'deps.js',
                'bemhtml',
                'bemtree.js',
                'css',
                'js'
            ];
        }

        return this.__base();

    },

    getLevels : function() {

        if(this.isSiteBundle()) {
            return [
                    'lib/bem-html/common.blocks',
                    'common.blocks',
                    'site.blocks'
                ].map(function(path) {
                    return PATH.resolve(this.root, 'bem-machine', path);
                }, this);
        }

        return this.__base();

    },

    'create-bemtree.js-node' : function(tech, bundleNode, magicNode) {
        return this.createDefaultTechNode.apply(this, arguments);
    },

    'create-bemtree.js-optimizer-node' : function() {
        return this['create-js-optimizer-node'].apply(this, arguments);
    }

});
