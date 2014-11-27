module.exports = function(bh) {

    bh.match('input', function(ctx, json) {
        ctx
            .tag('span')
            .js(true)
            .tParam('_input', json)
            .content({ elem : 'box', content : { elem : 'control' } }, true);
    });

};
