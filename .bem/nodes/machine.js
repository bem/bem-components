var PATH = require('path'),
    BEM = require('bem'),
    Q = BEM.require('qq'),
    LOGGER = BEM.require('./logger'),
    registry = BEM.require('./nodesregistry'),

    MachineNodeName = exports.MachineNodeName = 'MachineNode',

    SymlinkLibraryNodeName = BEM.require('./nodes/lib').SymlinkLibraryNodeName,
    GitLibraryNodeName = BEM.require('./nodes/lib').GitLibraryNodeName,
    // XXX: development only, use `GitLibraryNodeName` insted
//    LibraryNode = SymlinkLibraryNodeName,
    LibraryNode = GitLibraryNodeName,

    BundlesLevelNode = BEM.require('./nodes/level').BundlesLevelNode,

    SITE_NODE_ID = 'site';


exports.__defineGetter__(MachineNodeName, function() {
    return registry.getNodeClass(MachineNodeName);
});


/**
 * @namespace Описывает последовательность действий для сборки сайта:
 *
 *  site -> bem-machine
 *      (выкачать bem-machine)
 *
 *  site -> bem-machine*
 *  bem-machine* -> bem-machine/site.bundles*
 *      (собрать бандлы в библиотеке)
 *
 *  bem-machine* -> introspect
 *      (собрать структуру проекта, собрать статичный HTML)
 *
 * @name MachineNode
 */
registry.decl(MachineNodeName, LibraryNode, {

    __constructor : function(o) {

        this.__base.apply(this, arguments);

        // XXX: hack
        LibraryNode === 'SymlinkLibraryNode' && (this.relative = o.url);

        // {String} где искать собственные узлы библиотеки
        this.nodesroot = PATH.join('.bem', 'nodes');

    },

    /**
     * Возвращает путь до собственного модуля с узлами сборки библиотеки.
     * @param nodeName {Stirng}
     * @returns {String}
     */
    getNodesPath : function(nodeName) {

        return PATH.join(this.getPath(), this.nodesroot, nodeName);

    },

    /**
     * Настройки для сборки сайта
     * FIXME: hardcode
     * TODO: sets
     * @returns {Object}
     */
    getSiteConf : function() {

        // FIXME: move to root makefile
        return {
            'levels' : ['desktop.blocks'],
            'langs' : ['ru']
        };

    },

    make : function() {

        // XXX: кажется это нужно делать через `Arch::withLock()`?
        // XXX: по идее `make` не будет выполняться если `isValid()` вернет `true`
        return this.__base.apply(this, arguments)
            .then(this.alterArch.bind(this));

    },

    /**
     * Динамически встраиваем нужные узлы в процесс сборки сайта
     * @return {Promise}
     */
    alterArch : function() {

        var _this = this;

        return Q.step(
            // NOTE: добавляем узел `bem-machine*`
            function() {
                return Q.call(_this.createMachineMagicNode, _this);
            },

            // NOTE: добавляем узел `bem-machine* -> bem-machine/site.bundles`
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

    /**
     * Создает узел для сборки банла с сайтом
     * NOTE: К моменту сборки HTML нам нужны файлы `bemhtml.js` и `bemtree.js`
     *
     * @param {Node} parent
     * @returns {String}
     */
    createMachineBundlesNode : function(parent) {

        var arch = this.ctx.arch,
            // XXX: hardcode
            siteBundleLevel = PATH.relative(this.root, PATH.join(this.getPath(), 'site.bundles'));

        if(arch.hasNode(siteBundleLevel)) {

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

    /**
     * Добавляет узел про сборку структуры проекта (см. bem-machine/.bem/nodes/introspect.js)
     * на основе данных конфига для сайта `MachineNode::getSiteConf()`
     *
     * FIXME: сейчас сайт собирается в банды `bem-machine`, вместо собственного `output`.
     *
     * @returns {String}
     */
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
