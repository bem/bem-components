// XXX: `__root_level_dir` должна быть установлена только один раз
process.env.__root_level_dir ||
    (process.env.__root_level_dir = require('path').dirname(__dirname));

var environ = require('../environ');

// TODO: есть проблема с использованием этого до того как получены библиотеки по зависимостям
try {
    require(environ.getLibPath('bem-core', '.bem/nodes'));
} catch(e) {}
