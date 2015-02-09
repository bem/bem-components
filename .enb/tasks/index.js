module.exports = function(config) {
    config.includeConfig(__dirname + '/specs.js');
    config.includeConfig(__dirname + '/tmpl-specs.js');
    config.includeConfig(__dirname + '/tests.js');
    config.includeConfig(__dirname + '/examples.js');
    config.includeConfig(__dirname + '/docs.js');
};
