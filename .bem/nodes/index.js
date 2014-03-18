module.exports = function(registry) {
    require('./bundle.js')(registry);
    require('./phantomjs.js')(registry);
};
