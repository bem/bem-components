var BEM = require('bem'),
    VM = require('vm');

exports.baseTechName = 'html';

exports.techMixin = {

    getBemhtml : function(prefix) {
        var path = this.getPath(prefix, 'bh.js');

        return BEM.util.readFile(path)
            .then(function(c) {
                /* global BEMHTML */
                /** @name BEMHTML variable appears after runInThisContext() call */
                VM.runInThisContext(c, path);
                return BEMHTML;
            });
    },

    getDependencies : function() {
        return ['bemjson.js', 'bh.js'];
    }

};
