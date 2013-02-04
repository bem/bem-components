var PATH = require('path'),
    ENV = require('bem/lib/env'),
    GLOBAL_ROOT_NAME = '__root_level_dir';

// XXX: `__root_level_dir` должна быть установлена только один раз
//ENV.getEnv(GLOBAL_ROOT_NAME) ||
//    ENV.setEnv(GLOBAL_ROOT_NAME, PATH.dirname(__dirname));

// FIXME: подумать, как обойтись без `env`
process.env[GLOBAL_ROOT_NAME] ||
    (process.env[GLOBAL_ROOT_NAME] = PATH.dirname(__dirname));


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
