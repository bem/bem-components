var PATH = require('path'),
    environ = require('bem-environ'),
    resolve = PATH.resolve.bind(null, __dirname),
    PRJ_TECHS = resolve('../techs/'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs'),
    BEMPR_TECHS = environ.getLibPath('bem-pr', 'bem/techs');

function resolveTechs(registry, prefix) {
    return function(name) {
        return registry[name] = PATH.join(prefix, name + '.js');
    };
}

exports.getTechs = function() {
    var techs = {
        'deps.js' : 'v2/deps.js',
        'js'      : 'v2/js-i',
        'css'     : 'v2/css',
        'ie.css'  : 'v2/ie.css',
        'ie6.css' : 'v2/ie6.css',
        'ie7.css' : 'v2/ie7.css',
        'ie8.css' : 'v2/ie8.css',
        'ie9.css' : 'v2/ie9.css'
    };

    ['bemhtml', 'vanilla.js', 'browser.js'].forEach(resolveTechs(techs, BEMCORE_TECHS));

    ['sets', 'test.js', 'test.js+browser.js+bemhtml'].forEach(resolveTechs(techs, BEMPR_TECHS));

    ['roole', 'examples', 'tests'].forEach(resolveTechs(techs, PRJ_TECHS));

    return techs;
};

exports.defaultTechs = ['css', 'js', 'bemhtml'];

exports.resolveTechs = resolveTechs;
