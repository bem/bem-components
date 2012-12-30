var PATH = require('path'),

    /** @type Function */
    join = PATH.join,
    /** @type Function */
    relative = PATH.relative,
    /** @type Function */
    resolve = PATH.resolve.bind(null, __dirname),

    /**
     * Путь до корня проекта
     * @type String
     * @exports PRJ_ROOT
     */
    PRJ_ROOT = exports.PRJ_ROOT = resolve('../'),

    /**
     * Имя директории куда складываем библиотеки
     * @type String
     * @exports LIB_DIR
     */
    LIB_DIR = exports.LIB_DIR = 'lib',

    /**
     * Путь до корня хранилища библиотек
     * @type String
     * @exports LIB_ROOT
     */
    LIB_ROOT = exports.LIB_ROOT = join(PRJ_ROOT, LIB_DIR),

    /**
     * Абсолютный путь до библиотеки `lib`
     * @exports getLibPath
     * @param {String} id библиотеки
     * @returns {String}
     */
    getLibPath = exports.getLibPath = function(lib) {
        return join(LIB_ROOT, lib);
    },

    /**
     * Путь до библиотеки `lib` относительно корня проекта
     * @exports getLibRelPath
     * @param {String} id библиотеки
     * @returns {String}
     */
    getLibRelPath = exports.getLibRelPath = function(lib) {
        return relative(PRJ_ROOT, getLibPath(lib));
    },

    /**
     * Список изветсных библиотек блоков
     * @exports getLibraries
     * @return Object
     */
    getLibraries = exports.getLibraries = function() {
        return require('./conf/current').libraries;
    };


require('bem/lib/nodesregistry').decl('Arch', {

    /**
     * Задает список необходимых библиотек
     * @param {Array} libs Массив идентификаторов необходимых библиотек
     * @return {Object}
     */
    useLibraries : function(libs) {

        var repo = getLibraries();

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
