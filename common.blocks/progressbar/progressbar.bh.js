module.exports = function(bh) {

    bh.match('progressbar', function(ctx, json) {
        var val = json.val || 0;

        ctx
            .js({ val : val })
            .attrs({
                role : 'progressbar',
                tabindex : json.tabIndex || 0,
                'aria-label' : json.ariaLabel,
                'aria-labelledby' : json.ariaLabelledby,
                'aria-valuemin' : 0,
                'aria-valuemax' : 100,
                'aria-valuenow' : val
            })
            .content({
                elem : 'bar',
                attrs : { style : 'width:' + val + '%' }
            });
    });
};
