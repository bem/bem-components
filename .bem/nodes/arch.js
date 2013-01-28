var environ = require('../environ');

require('bem/lib/nodesregistry').decl('Arch', {

    /**
     * Задает список необходимых библиотек
     * @param {Array} libs Массив идентификаторов необходимых библиотек
     * @return {Object}
     */
    useLibraries : function(libs) {

        // список изветсных библиотек блоков
        var repo = environ.getConf().libraries,
            getLibRelPath = environ.getLibRelPath;

        return libs.reduce(function(enabled, lib) {

            if(repo[lib] == null)
                throw new Error('Library ' + lib + ' is not registered!');

            enabled[getLibRelPath(lib)] = repo[lib];
            return enabled;

        }, {});

    },

    /**
     * @returns {Object}
     * @override
     */
    getLibraries : function() {

        var libs = this.libraries;
        return Array.isArray(libs)?
                this.useLibraries(libs) : libs;

    }

});
