module.exports = function(bh) {

    bh.match('textarea', function(ctx, json) {
        ctx
            .js(true)
            .tParam('_textarea', json)
            .content({ elem : 'control' }, true);
    });

};
