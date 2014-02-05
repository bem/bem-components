module.exports = function(bh) {

    bh.match('input_has-clear__box', function(ctx) {
        ctx.content(
            [
                ctx.content(),
                { elem : 'clear', mods : { visible : !!ctx.tParam('_input').val } }
            ],
            true);
    });

};
