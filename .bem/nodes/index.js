// XXX: `__root_level_dir` должна быть установлена только один раз
process.env.__root_level_dir ||
    (process.env.__root_level_dir = require('path').dirname(__dirname));

require('./arch.js');
require('./bundle.js');
