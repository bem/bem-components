/*global MAKE */

var BEM = require('bem'),
    PATH = require('path'),

    Q = BEM.require('qq'),
    LOGGER = BEM.require('./logger'),

    EXPORT_LEVELS = ['desktop'],
    SITE_NODE_ID = 'site',
    SITE_BUNDLES = 'site',

    BEM_I18N_LANGS = ['ru'];


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

    createCustomNodes : function(common, libs, blocks, bundles) {

        var node = new (MAKE.getNodeClass('Site'))({
                root    : this.root,
                arch    : this.arch
            }),
            arch = this.arch;

        arch.setNode(node, bundles.concat(libs));

        return node.alterArch();

    }

});


MAKE.decl('Site', 'Node', {

    __constructor : function(o) {

        this.__base.apply(this, arguments);

        this.root = o.root;
        this.arch = o.arch;

    },

    alterArch : function(arch) {

        /**
         * TODO:
         *
         * create `lib/bem-machine` node
         * create `site*` node (import `introspectNodes` from bem-machine)
         * getPrjStruct()   -> [project structure] as {Object}
         * createLevel()    -> site.bundles/.bem/level.js
         * createBlocks()   -> bemdecl.js (index, catalogue)
         * buildBlocks()    -> bemhtml.js, bemtree.js (index, catalogue)
         * createHtml()     -> html
         */

        return this.createMachineNode();

    },

    createMachineNode : function(parent) {

        var MACHINE_TARGET = 'bem-machine',
            MACHINE_URL = PATH.relative(this.root, '../bem-machine'),

            machineNode = new (MAKE.getNodeClass('Machine'))({
                root        : this.root,
                target      : MACHINE_TARGET,
                relative    : MACHINE_URL,
                npmPackages : false
            }),

            arch = this.arch;

        arch.setNode(machineNode, this.getId());

        return machineNode.getId();

    }

}, {

    createId : function(o) {
        return SITE_NODE_ID;
    }

});


MAKE.decl('Machine', 'SymlinkLibraryNode', {

    make : function() {

        return this.__base.apply(this, arguments)
            .then(this.alterArch.bind(this));

    },

    alterArch : function() {

        var ctx = this.ctx,
            arch = ctx.arch,
            nodeId = SITE_NODE_ID + '*',
            site;

        if(arch.hasNode(nodeId)) {

            site = arch.getNode(nodeId);

        } else {

            var introspectNodes = require(PATH.join(this.getPath(), '.bem/nodes/introspect'));

            site = new introspectNodes.IntrospectNode({
                id : nodeId,
                root : this.root,
                exportLevels : EXPORT_LEVELS,
                siteBundleName : SITE_BUNDLES,
                langs : BEM_I18N_LANGS
            });

            arch.setNode(site, arch.getParents(this));

        }

        return site.getId();

    }

});
