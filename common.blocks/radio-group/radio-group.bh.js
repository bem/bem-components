module.exports = function(bh) {

    bh.match('radio-group', function(ctx, json) {
        ctx
            .tag('span')
            .js(true)
            .mix({ block : 'control-group' });

        var mods = ctx.mods();
        ctx.content((json.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                {
                    block : 'radio',
                    mods : {
                        type : mods.type,
                        mode : mods.mode,
                        theme : mods.theme,
                        size : mods.size,
                        checked : option.checked,
                        disabled : option.disabled || mods.disabled
                    },
                    name : json.name,
                    val : option.val,
                    text : option.text,
                    icon : option.icon
                }
            ];
        }));
    });

};
