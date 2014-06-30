'use strict';

exports.baseTechPath = require.resolve('bem/lib/techs/v2/styl');

exports.techMixin = {

    getBuildSuffixesMap : function() {
        return {
            'styl.css' : ['styl', 'css']
        };
    }

};
