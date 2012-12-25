/*global MAKE:true */

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,

    bundlesLevelsRegexp : /^.+?\.pages/,

    getLibraries : function() {

        var repo = {
                'bem-bl' : {
                    type    : 'git',
                    url     : 'git://github.com/bem/bem-bl.git',
                    treeish : '0.3'
                }
            },
            /**
             * Список библиотек которые нужно подключить
             */
            libs = [];

        process.env.DEV_MODE || libs.push('bem-bl');

        return libs.reduce(function(enabled, lib) {
            repo[lib] && (enabled[lib] = repo[lib]);
            return enabled;
        }, {});

    }

});