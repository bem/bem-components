var environ = require('bem-environ');

module.exports = function(registry) {

// TODO: есть проблема с использованием этого до того как получены библиотеки по зависимостям
try {
    require(environ.getLibPath('bem-core', '.bem/nodes/bundle.js'));
} catch(e) {}

registry.decl('BundleNode', {

    createAutoprefixerOptimizerNode : function(tech, sourceNode, bundleNode) {
        var nodes = this.createBorschikOptimizerNode.call(this, tech, sourceNode, bundleNode);

        return nodes.map(function(borschikNode) {
            var node = new (registry.getNodeClass('AutoprefixerNode'))({
                root   : this.root,
                input  : borschikNode.getPath(),
                forked : true
            });

            this.ctx.arch
                .setNode(node)
                .addParents(node, bundleNode)
                .addChildren(node, borschikNode);

            return node;
        }, this);
    },

    'create-roole-optimizer-node' : function(tech, sourceNode, bundleNode) {
        return this.createAutoprefixerOptimizerNode(tech, sourceNode, bundleNode);
    }

});

};
