module.exports = function(bh) {

    bh.match('radio', function(ctx, json) {
        ctx.tParam('_radio', json);

        ctx.tag('span');

        var js = ctx.js() || {};
        js === true && (js = {});
        js.id || (js.id = json.id || 'radio-' + json.name);
        ctx.js(js, true);

        var curVal = json.val,
            mods = ctx.mods(),
            checked;
        ctx.content((json.options || []).map(function(option) {
            checked = typeof option.val !== 'undefined' && (option.val === curVal);
            return {
                block : 'radio-option',
                mods : {
                    type : mods.type,
                    theme : mods.theme,
                    size : mods.size,
                    checked : checked,
                    disabled : option.disabled || mods.disabled
                },
                name : json.name,
                val : option.val,
                text : option.text,
                icon : option.icon
            };
        }));
    });

};
