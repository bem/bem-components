module.exports = function(bh) {
    bh.match('checkbox__text', function(ctx) {
        ctx
            .tag('span')
            .attrs({ role : 'presentation' });
    });
};
