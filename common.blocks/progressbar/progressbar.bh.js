module.exports = function(bh) {

    bh.match('progressbar', function(ctx, json) {
        var val = json.val || 0;

        ctx
            .js({ val : json.val })
            .attrs({
                role : 'progressbar',
                'aria-label' : json.ariaLabel,
                'aria-labelledby' : json.ariaLabelledBy,
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
