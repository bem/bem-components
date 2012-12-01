var PATH = require('path'),
    BEM = require('bem'),
    registry = BEM.require('./nodesregistry'),

    SiteNodeName = exports.SiteNodeName = 'SiteArch',

    MachineNode = require('./machine').MachineNode,

    SITE_NODE_ID = 'site';


exports.__defineGetter__(SiteNodeName, function() {
    return registry.getNodeClass(SiteNodeName);
});


/**
 * @namespace Узел описывает входную точку для архитектуры сборки сайта
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

        // FIXME: fix hardcoded urls to `bem-machine` lib
        var MACHINE_TARGET = 'bem-machine',
            MACHINE_URL = PATH.relative(this.root, '../bem-machine'),

            machineNode = new MachineNode({
                root        : this.root,
                target      : MACHINE_TARGET,
                url         : MACHINE_URL
            });

        this.arch.setNode(machineNode, this.getId());

        return machineNode.getId();

    }

}, {

    createId : function(o) {
        // FIXME: hardcode
        return SITE_NODE_ID;
    }

});

