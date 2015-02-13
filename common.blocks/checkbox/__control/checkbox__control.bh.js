module.exports = function(bh) {

    bh.match('checkbox__control', function(ctx, json) {
        ctx.tag('input');

        // NOTE: don't remove autocomplete attribute, otherwise js and DOM may be desynced
        var attrs = { type : 'checkbox', autocomplete : 'off' };

        attrs.name = json.name;
        attrs.value = json.val;
        attrs['aria-label'] = json.ariaLabel;
        attrs['aria-labelledby'] = json.ariaLabelledby;

        json.checked && (attrs.checked = 'checked');
        json.disabled && (attrs.disabled = 'disabled');

        ctx.attrs(attrs);
    });

};
