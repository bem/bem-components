var BEM = require('bem'),
    BH = require('bh/lib/bh-client-processor'),

    readFile = BEM.util.readFile;

exports.API_VER = 2;

exports.techMixin = {

    getBuildResultChunk : function(relPath, path) {
        return readFile(path)
            .then(function(c) {
                return [
                    '/* ' + path + ': start */',
                    BH.process(c),
                    '/* ' + path + ': end */',
                    '\n'
                ].join('\n');
            });
    },

    getBuildResult : function(files, suffix, output, opts) {
        var _t = this;
        return this.__base(files, suffix, output, opts)
            .then(_t.getCompiledResult.bind(_t));
    },

    getCompiledResult : function(sources) {
        sources = sources.join('\n');

        return readFile(require.resolve('bh/lib/bh.js'))
            .then(function(bh) {
                return [
                    bh,
                    'var bh = new BH(),',
                    '    BEMHTML = bh;',
                    'bh.setOptions({jsAttrName: \'data-bem\', jsAttrScheme: \'json\'});',
                    sources
                ].join('\n');
            });
    },

    getBuildSuffixesMap : function() {
        return {
            'bh.js' : ['bh.js']
        };
    },

    getCreateSuffixes : function() {
        return ['bh.js'];
    }
};
