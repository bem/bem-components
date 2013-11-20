var PATH = require('path'),
    BEM = require('bem'),
    QFS = require('q-io/fs'),
    autoprefixer = require('autoprefixer'),
    U = BEM.util;

module.exports = function(registry) {

registry.decl('AutoprefixerNode', 'GeneratedFileNode', {

    __constructor : function(o) {
        this.input = o.input;
        this.output = this.getOutputPath(this);

        this.__base(U.extend({ path : this.output }, o));
    },

    make : function() {
        // TODO: options
        var opts = ['last 2 versions'],
            input = PATH.join(this.root, this.input),
            output = this.output;

        this.log('autoprefixer(%s, %s)', JSON.stringify(opts, null, 4), this.input);

        return QFS.read(input).then(function(css) {
            var compiled = autoprefixer(opts).compile(css);
            return QFS.write(output, compiled);
        });
    },

    getOutputPath : function(o) {
        return PATH.join(PATH.dirname(o.input), '_' + PATH.basename(o.input));
    }

});

};
