module.exports = function(bh) {

    bh.match('checkbox-group', function(ctx, json) {
        ctx
            .tag('span')
            .js(true);

        var mods = ctx.mods();
        ctx.content((json.options || []).map(function(option, i) {
            return [
                !!i && !ctx.mods().type && { tag : 'br' },
                {
                    block : 'checkbox',
                    mods : {
                        type : mods.type,
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
