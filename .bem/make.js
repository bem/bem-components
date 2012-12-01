/*global MAKE */

var BEM = require('bem'),
    PATH = require('path'),

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
            node = new SiteNode({
                arch    : arch,
                root    : this.root
            });

        arch.setNode(node, null, libs.concat(blocks));

        return node.alterArch();

    }

});


/**
 * TODO: разобраться почему не работает переопределение собственных узов
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
