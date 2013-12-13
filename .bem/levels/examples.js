var BEM = require('bem');

exports.baseLevelPath = require.resolve('bem/lib/levels/simple');

exports.getTechs = function() {

    return BEM.util.extend(require('./blocks').getTechs(), {
        'blocks'     : 'level-proto',
        'title.txt'  : 'bem/lib/tech/v2',
        'bemjson.js' : 'bem/lib/tech/v2'
    });

};
