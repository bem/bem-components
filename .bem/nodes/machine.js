var PATH = require('path'),
    BEM = require('bem'),
    Q = BEM.require('qq'),
    LOGGER = BEM.require('./logger'),
    registry = BEM.require('./nodesregistry'),

    MachineNodeName = exports.MachineNodeName = 'MachineNode',

    SymlinkLibraryNodeName = BEM.require('./nodes/lib').SymlinkLibraryNodeName,
    GitLibraryNodeName = BEM.require('./nodes/lib').GitLibraryNodeName,
    // XXX: development only, use `GitLibraryNodeName` insted
    LibraryNode = SymlinkLibraryNodeName,

    BundlesLevelNode = BEM.require('./nodes/level').BundlesLevelNode,

    SITE_NODE_ID = 'site';


exports.__defineGetter__(MachineNodeName, function() {
    return registry.getNodeClass(MachineNodeName);
});


registry.decl(MachineNodeName, LibraryNode, {

    __constructor : function(o) {

        this.__base.apply(this, arguments);

        // XXX: hack
        LibraryNode === 'SymlinkLibraryNode' && (this.relative = o.url);

        // XXX: hardcode
        // {String} where to search lib's local nodes
        this.nodesroot = '.bem/nodes';

    },

    getNodesPath : function(nodeName) {

        return PATH.join(this.getPath(), this.nodesroot, nodeName);

    },

    getSiteConf : function() {

        // FIXME: move to root makefile
        return {
            'levels' : ['desktop.blocks'],
            'langs' : ['ru']
        };

    },

    make : function() {

        return this.__base.apply(this, arguments)
            .then(this.alterArch.bind(this));

    },

    alterArch : function() {

        var _this = this;

        return Q.step(
            function() {
                return Q.call(_this.createMachineMagicNode, _this);
            },

            function(magic) {
                return [
                    magic,
                    Q.call(_this.createMachineBundlesNode, _this, magic)
                ];
            })

            .then(function() {
                LOGGER.info(_this.ctx.arch.toString());
                return _this.ctx.arch;
            });

    },

    createMachineBundlesNode : function(parent) {

        var arch = this.ctx.arch,
            // XXX: hardcode
            siteBundleLevel = PATH.relative(this.root, PATH.join(this.getPath(), 'site.bundles'));

        if(arch.hasNode(siteBundleLevel)) {

            console.log('sd');
            return arch.getNode(siteBundleLevel);

        } else {

            var node = new BundlesLevelNode({
                root    : this.root,
                level   : siteBundleLevel
            });

            arch.setNode(node, parent);

            return node.getId();

        }

    },

    createMachineMagicNode : function() {

        // {String} Use `magic` notation for node id
        var nodeId = this.getId() + '*',
            arch = this.ctx.arch;

        if(arch.hasNode(nodeId)) {

            return arch.getNode(nodeId);

        } else {

            var IntrospectNode = require(this.getNodesPath('introspect')).IntrospectNode,
                siteconf = this.getSiteConf(),

                node = new IntrospectNode({
                    id  : nodeId,
                    root : this.root,
                    siteRoot : this.getPath(),
                    exportLevels : siteconf.levels,
                    langs : siteconf.langs
                });

            arch.setNode(node, arch.getParents(this));

            return node.getId();
        }

    }

});
