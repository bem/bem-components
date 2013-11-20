module.exports = function(registry) {
    ['autoprefixer', 'bundle'].forEach(function(module) {
        require('./' + module)(registry);
    });
};
