var PATH = require('path'),
    BEM = require('bem'),
    LOGGER = require('bem/lib/logger'),
    registry = require('bem/lib/nodesregistry'),
    Q = BEM.require('qq'),

    MachineNodeName = exports.MachineNodeName = 'MachineNode',

    SymlinkLibraryNodeName = BEM.require('./nodes/lib').SymlinkLibraryNodeName,
    GitLibraryNodeName = BEM.require('./nodes/lib').GitLibraryNodeName,
    // XXX: development only, use `GitLibraryNodeName` insted
//    LibraryNode = SymlinkLibraryNodeName;
    LibraryNode = GitLibraryNodeName;


Object.defineProperty(exports, MachineNodeName, {
    'get' : function() {
        return registry.getNodeClass(MachineNodeName);
    }
});


/**
 * @namespace Описывает последовательность действий для сборки сайта
 * @name MachineNode
 */
registry.decl(MachineNodeName, LibraryNode, {

    __constructor : function(o) {

        this.__base.apply(this, arguments);

        // XXX: hack
        LibraryNode === 'SymlinkLibraryNode' &&
            (this.npmPackages = false);

        // {String} где искать собственные узлы библиотеки
        this.nodesroot = PATH.join('.bem', 'nodes');

    },

    /**
     * Возвращает путь до собственного модуля с узлами сборки библиотеки
     * @param nodeName {String}
     * @returns {String}
     */
    getNodesPath : function(nodeName) {
        return PATH.join(this.getPath(), this.nodesroot, nodeName);
    },

    /**
     * Настройки для сборки сайта
     * FIXME: hardcode
     * @returns {Object}
     */
    getSiteConf : function() {

        try {
            require('./siteconfig');
        } catch(e) {}

        return {
            'levels' : ['desktop.blocks'],
            'langs'  : ['ru']
        };

    },

    make : function() {

        // XXX: по идее `make` не будет выполняться если `isValid()` вернет `true`
        var _t = this;
        return this.__base.apply(this, arguments)
            .then(function() {
                return _t.ctx.arch.withLock(_t.alterArch(), _t);
            });

    },

    /**
     * Динамически встраиваем нужные узлы в процесс сборки сайта
     * @returns {Function}
     */
    alterArch : function() {

        var _t = this;
        return function() {
            return _t.createMachineMagicNode();
        };

    },

    createMachineMagicNode : function() {

        var arch = this.ctx.arch,
            MachineSiteNode = require(this.getNodesPath('site')).SiteNode,
            siteconf = this.getSiteConf(),
            node = new MachineSiteNode({
                arch : arch,
                root : this.root,
                levels : siteconf.levels,
                langs  : siteconf.langs
            });

        return node.alterArch(null, arch.getParents(this));

    }

});