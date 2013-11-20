var BORSCHIK_CSS_TECH = require('borschik/lib/techs/css'),
    ROOLE = require('roole'),
    Q = require('q');

exports.API_VER = 2;

exports.techMixin = {

    getBuildResultChunk : function(relPath) {
        return '@import url(' + relPath + ');\n';
    },

    getBuildSuffixesMap : function() {
        return {
            css : ['roo', 'css']
        };
    },

    compileBuildResult : function(res) {
        var defer = Q.defer();

        ROOLE.compile(res, {
            filename : './',
            out : './',
            prefixes : []
        }, function(err, res) {
            err?
                defer.reject(err) :
                defer.resolve([res]);
        });

        return defer.promise;
    },

    getBuildResult : function(filteredFiles, destSuffix, output, opts) {
        return this.__base.apply(this, arguments)
            .then(function(res) {
                var tech = new BORSCHIK_CSS_TECH.Tech({
                        comments : true,
                        freeze : false,
                        minimize : false
                    }),
                    file = new BORSCHIK_CSS_TECH.File(tech, output, 'include');

                file.content = file.parse(res.join(''));

                return this.compileBuildResult(file.process(output));
            }.bind(this));
    }

};
