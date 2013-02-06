/*global MAKE:true */

require('./nodes/arch');


MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks$/,

    bundlesLevelsRegexp: /^.+?\.pages$/,

    libraries: [ 'bem-bl' ]

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
