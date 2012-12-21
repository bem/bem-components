var PATH = require('path'),
    register = require('bem/lib/nodesregistry'),

    BundleNodeName = require('bem/lib/nodes/bundle').BundleNodeName;


/**
 * @name
 */
registry.decl('ExampleNode', BundleNodeName, {

    /**
     * Overriden
     *
     * Список технологий для сборки примеров
     *
     * @returns {Array}
     */
    getTechs : function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'css',
            'ie.css',
            'js',
            'html'
        ];

    },

    /**
     * Overriden
     *
     * FIXME: список уровней для сборки примеров
     *
     * @returns
     */
    getLevels : function() {

        return ([
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop',
                'desktop.blocks'
            ])
            .map(function(level) {
                return PATH.resolve(this.root, level);
            }, this)
            .concat([PATH.resolve(this.root, PATH.dirname(this.getNodePrefix()), 'blocks')]);

    }

});