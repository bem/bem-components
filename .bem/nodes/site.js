var PATH = require('path'),
    BEM = require('bem'),
    registry = BEM.require('./nodesregistry'),

    SiteNodeName = exports.SiteNodeName = 'SiteArch',

    MachineNode = require('./machine').MachineNode,

    SITE_NODE_ID = 'site';


exports.__defineGetter__(SiteNodeName, function() {
    return registry.getNodeClass(SiteNodeName);
});


registry.decl(SiteNodeName, 'Node', {

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

        // FIXME: fix hardcoded urls to `bem-machine` lib
        var MACHINE_TARGET = 'bem-machine',
            MACHINE_URL = PATH.relative(this.root, '../bem-machine'),

            machineNode = new MachineNode({
                root        : this.root,
                target      : MACHINE_TARGET,
                url         : MACHINE_URL
            }),

            arch = this.arch;

        arch.setNode(machineNode, this.getId());

        return machineNode.getId();

    }

}, {

    createId : function(o) {
        // FIXME: hardcode
        return SITE_NODE_ID;
    }

});

