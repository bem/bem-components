module.exports = function(bh) {

    bh.match('menu-item_type_select-option', function(ctx) {
        ctx.attrs({
            role : 'option',
            'aria-checked' : null,
            'aria-selected' : String(!!ctx.mod('checked'))
        }, true);
    });

};
