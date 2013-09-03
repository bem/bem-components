var environ = require('bem-environ');

exports.extendMake = function(MAKE) {
    require(environ.getLibPath('bem-core', '.bem/nodes/bundle.js')).extendMake(MAKE);
};
