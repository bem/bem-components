var BEM = require('bem');

exports.baseLevelPath = require.resolve('bem/lib/levels/simple');

exports.getTechs = function() {

    return BEM.util.extend(require('./blocks').getTechs(), {
        'blocks' : 'level-proto'
    });

};
