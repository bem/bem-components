// TODO: есть проблема с использованием этого до того как получены библиотеки по зависимостям
var environ = require('../environ');
try {
    require(environ.getLibPath('bem-core', '.bem/nodes/bundle.js'));
} catch(e) {}

require('bem/lib/nodesregistry').decl('BundleNode', {

    'create-test.js+browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this.createBorschikOptimizerNode('js', sourceNode, bundleNode);
    }

});
