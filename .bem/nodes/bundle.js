var environ = require('bem-environ');

module.exports = function(registry) {
    // TODO: есть проблема с использованием этого до того как получены библиотеки по зависимостям
    try {
        require(environ.getLibPath('bem-core', '.bem/nodes/bundle.js'))(registry);
    } catch(e) {}
};
