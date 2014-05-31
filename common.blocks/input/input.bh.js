module.exports = function(bh) {

    bh.match('input', function(ctx, json) {
        ctx.tag('span')
            .js(true)
            .tParam('_input', json);

        if(typeof ctx.content() === 'undefined') {
            ctx.content({ elem : 'box', content : { elem : 'control' } });
        }
    });

};
