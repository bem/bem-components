module.exports = function(bh) {

    bh.match('menu-item_type_select-option', function(ctx, json) {
        ctx.attrs({
            role : 'option',
            id : json.id,
            'aria-checked' : null,
            'aria-selected' : String(!!ctx.mod('checked'))
        }, true);
    });

};
