var CP = require('child_process'),
    URL = require('url'),
    BEM = require('bem'),
    Q = require('q'),
    LOGGER = BEM.logger,
    // FIXME
    MOCHA_PHANTOM_BIN = require.resolve('../../libs/bem-pr/node_modules/mocha-phantomjs/bin/mocha-phantomjs'),
    mochaReporter = process.env.MOCHA_PHANTOM_REPORTER || 'spec';

module.exports = function(registry) {

registry.decl('PhantomJsNode', 'FileNode', {

    make : function() {
        var path = this.path,
            url = URL.format({
                protocol : 'file',
                host : '/',
                pathname : this.getPath()
            }),
            defer = Q.defer();

        CP.exec(
            [MOCHA_PHANTOM_BIN, '--reporter', mochaReporter, url].join(' '),
            function(err, stdout, stderr) {
                var report = [
                    'Tests results for "' + path + '"',
                    stdout,
                    stderr? 'Stderr: ' + stderr : ''
                ]
                .join('\n');

                LOGGER.info(report);

                if(err === null) {
                    defer.resolve();
                    return;
                }
                LOGGER.error('Tests failed:', err);
                defer.reject(err);
            });

        LOGGER.info('[i] Page was sent to Phantom (' + url + ')');

        return defer.promise;
    },

    isValid : function() {
        return Q.resolve(false);
    }

}, {
    createId : function(o) {
        return this.__base(o) + '.phantomjs';
    }
});

};
