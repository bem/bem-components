var PATH = require('path'),
    BEM = require('bem'),
    registry = require('bem/lib/nodesregistry'),
    environ = require('../environ'),

    SiteNodeName = exports.SiteNodeName = 'SiteArch',
    MachineNode = require('./machine').MachineNode;


Object.defineProperty(exports, SiteNodeName, {
    'get' : function() {
        return registry.getNodeClass(SiteNodeName);
    }
});


/**
 * @namespace Узел описывает входную точку в архитектуру сборки сайта
 * @name SiteArch
 */
registry.decl(SiteNodeName, 'Node', {

    __constructor : function(o) {

        this.__base.apply(this, arguments);

        this.root = o.root;
        this.arch = o.arch;

    },

    alterArch : function(arch) {
        return this.createMachineNode();
    },

    /**
     * Динамически создаем узел про выкачку библиотеки `bem-machine`
     *
     * NOTE: при сборке сайта мы используем узлы которые приезжают из внешней библиотеки,
     * поэтому узлы описывающие процесс сборки должны «появляться» после того,
     * как выполнится `make` для `bem-machine`
     *
     * @returns {String}
     */
    createMachineNode : function() {

        try {
            var repo = require('../repo'),
                name = 'bem-gen-doc',
                meta = repo[name];
        } catch(e) {
            BEM.require('./logger').warn('Could not resolve "bem-gen-doc" meta description. Terminating!');
            return;
        }

        var node = new MachineNode(
                BEM.util.extend(
                        { root : this.root },
                        meta,
                        { target : environ.getLibRelPath(name) }));

        this.arch.setNode(node, this.getId());

        return node.getId();

    }

}, {

    createId : function(o) {
        // FIXME: hardcode
        return 'site*';
    }

});
