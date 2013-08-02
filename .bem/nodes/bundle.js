// TODO: есть проблема с использованием этого до того как получены библиотеки по зависимостям
var environ = require('bem-environ');
try {
    require(environ.getLibPath('bem-core', '.bem/nodes/bundle.js'));
} catch(e) {}
