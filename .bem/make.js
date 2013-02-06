/*global MAKE:true */

require('./nodes/arch');

var siteNodes = require('./nodes/site');

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks$/,

    bundlesLevelsRegexp: /^.+?\.pages$/,

    libraries: [ 'bem-bl', 'bem-json' ],

    createCustomNodes: function(common, libs) {

        var node = new siteNodes.SiteArch({ root : this.root, arch : this.arch });
        this.arch.setNode(node, null, libs);

        return node.alterArch();

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'js',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'bemhtml',
            'html'
        ];
    }

});
