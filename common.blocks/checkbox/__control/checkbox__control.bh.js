module.exports = function(bh) {

    bh.match('checkbox__control', function(ctx, json) {
        ctx.tag('input');

        // NOTE: don't remove autocomplete attribute, otherwise js and DOM may be desynced
        var attrs = { type : 'checkbox', autocomplete : 'off' };

        attrs.name = json.name;
        attrs.value = json.val;
        json.id && (attrs.id = json.id);
        json.checked && (attrs.checked = 'checked');
        json.disabled && (attrs.disabled = 'disabled');
        json.tabIndex && (attrs.tabindex = json.tabIndex);

        ctx.attrs(attrs);
    });

};
