module.exports = function(bh) {

    bh.match('radio-group_mode_radio-check', function(ctx) {
        if(ctx.mod('type') !== 'button')
            throw Error('Modifier mode=radio-check can be only with modifier type=button');
    });

};
