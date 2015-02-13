module.exports = function(bh) {

    bh.match('radio__control', function(ctx, json) {
        ctx.tag('input');

        // NOTE: don't remove autocomplete attribute, otherwise js and DOM may be desynced
        var attrs = {
                type : 'radio',
                autocomplete : 'off',
                name : json.name,
                value : json.val,
                'aria-label' : json.ariaLabel,
                'aria-labelledby' : json.ariaLabelledby
            };

        json.checked && (attrs.checked = 'checked');
        json.disabled && (attrs.disabled = 'disabled');

        ctx.attrs(attrs);
    });

};
