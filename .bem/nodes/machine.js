var PATH = require('path'),
    BEM = require('bem'),
    LOGGER = require('bem/lib/logger'),
    registry = require('bem/lib/nodesregistry'),
    Q = BEM.require('qq'),

    MachineNodeName = exports.MachineNodeName = 'MachineNode',

    SymlinkLibraryNodeName = require('bem/lib/nodes/lib').SymlinkLibraryNodeName,
    GitLibraryNodeName = require('bem/lib/nodes/lib').GitLibraryNodeName,
    // XXX: development only, use `GitLibraryNodeName` insted
//    LibraryNode = SymlinkLibraryNodeName,
    LibraryNode = GitLibraryNodeName,

    BundlesLevelNode = require('bem/lib/nodes/level').BundlesLevelNode,

    MKDIRP = BEM.require('mkdirp');

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

            function(magic) {
                return [magic, _this.createMachineBundles()];
            },

            // NOTE: добавляем узел `bem-machine* -> bem-machine/site.bundles`
            function(magic, bundles) {
                return Q.all([
                    magic,
                    Q.call(_this.createMachineBundlesNode, _this, magic, bundles)
                ]);
            })

            .then(function() {
                LOGGER.info(_this.ctx.arch.toString());
                return _this.ctx.arch;
            });

    },

    /**
     * Добавляет узел про сборку структуры проекта (см. bem-machine/.bem/nodes/introspect.js)
     * на основе данных конфига для сайта `MachineNode::getSiteConf()`
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
                    siteRoot : this.root,
                    exportLevels : siteconf.levels,
                    langs : siteconf.langs
                });

            // XXX: перетираем конфиг сборки примеров из `bem-machine`
            require('./examples.js');

            arch.setNode(node, arch.getParents(this));

            return node.getId();
        }

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
            siteBundleLevel = PATH.relative(this.root, 'site.bundles');

        if(arch.hasNode(siteBundleLevel)) {

            return arch.getNode(siteBundleLevel);

        } else {

            var node = new BundlesLevelNode({
                root : this.root,
                level : siteBundleLevel
            });

            // bem-machine* -> site.bundles*
            arch.setNode(node, parent);

            return node.getId();

        }

    },

    /**
     * Создает корневой уровень для сборки сайта (siteRoot)
     *
     * FIXME: hardcode
     *
     * @returns
     */
    createMachineBundles : function() {

        var _this = this,
            siteRoot = PATH.join(this.root, 'site.bundles');

        return this.createSiteRoot(siteRoot).then(function() {

            var level = BEM.createLevel(siteRoot),
                proto = BEM.createLevel(PATH.join(_this.getPath(), 'site.bundles'));

            return Q.all(['catalogue', 'index'].map(function(block) {

                var src = proto.getPathByObj({ block: block }, 'bemdecl.js'),
                    dest = level.getPathByObj({ block: block }, 'bemdecl.js');

                return BEM.util.readFile(src).then(function(decl) {

                    MKDIRP.sync(PATH.dirname(dest));

                    return BEM.util.writeFile(dest, decl);

                });

            }));

        });

    },

    /**
     * FIXME: hardcode
     */
    createSiteRoot : function(path) {

        var opts = {
                outputDir : PATH.dirname(path),
                level : PATH.resolve(__dirname, '../levels/site'),
                force : true
            },
            names = [ PATH.basename(path) ];

        return BEM.api.create.level(opts, { names: names });

    }

});
