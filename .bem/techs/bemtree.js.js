var PATH = require('path'),

    BEMJSON_ROOT = PATH.resolve(__dirname, '../../bem-json/i-bem/__json'),
    BEMJSON_CORE = PATH.join(BEMJSON_ROOT, 'i-bem__json.js');

exports.baseTechName = 'js';

exports.techMixin = {

    getBuildSuffixes : function() {
        return ['bemtree.js'];
    },

    getBuildResult : function(prefixes, suffix, outputDir, outputName) {

        var _this = this;
        return this.__base.apply(this, arguments).then(function(res) {
            res.unshift(_this.getBemjsonCore(outputDir))
            return res;
        });

    },

    getBemjsonCore : function(outputDir) {
        return this.getBuildResultChunk(PATH.relative(outputDir, BEMJSON_CORE));
    }

}
