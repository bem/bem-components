module.exports = function(bh) {

    bh.match('rating__label', function(ctx) {
        ctx
            .tag('label');
    });

};
