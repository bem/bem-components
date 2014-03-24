 var Vow = require('enb/node_modules/vow'),
    vowFs = require('enb/node_modules/vow-fs'),
    bhClientProcessor = require('bh/lib/bh-client-processor');

module.exports = require('bh/techs/bh-server').buildFlow()
    .name('bh-include')
    .target('target', '?.bh.js')
    .defineOption('jsAttrName', 'data-bem')
    .defineOption('jsAttrScheme', 'json')
    .builder(function(bhFiles) {
        var node = this.node;
        var dependencies = this._dependencies;
        var jsAttrName = this._jsAttrName;
        var jsAttrScheme = this._jsAttrScheme;
        return Vow.all([
            vowFs.read(this._bhFile, 'utf8').then(function(data) {
                return data;
            }),
            Vow.all(bhFiles.map(function(file) {
                return vowFs.read(file.fullname, 'utf8').then(function(data) {
                    var relPath = node.relativePath(file.fullname);
                    return '// begin: ' + relPath + '\n' +
                        bhClientProcessor.process(data) + '\n' +
                        '// end: ' + relPath + '\n';
                });
            })).then(function(sr) {
                return sr.join('\n');
            })
        ]).spread(function(bhEngineSource, inputSources) {
            return [
                bhClientProcessor.build(bhEngineSource, inputSources, dependencies, jsAttrName, jsAttrScheme),
                'module.exports = bh;',
                'bh.BEMHTML = { apply: function(bemjson) { return bh.apply(bemjson); } };'
            ].join('\n');
        });
    })
    .createTech();
