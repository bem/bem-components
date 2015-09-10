module.exports = function(bh) {

    bh.match('radio-group_type_button', function(ctx) {
        ctx.attrs({
            tabindex : 0,
            'aria-label' : 'Search engine'
        });
    });

};
