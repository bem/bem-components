module.exports = function(bh) {

    bh.match('radio-group', function(ctx, json) {
        ctx
            .tag('span')
            .js(true)
            .mix({ block : 'control-group' });

        var mods = ctx.mods(),
            val = String(json.val);

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
                        checked : json.val !== undefined && val === String(option.val),
                        disabled : option.disabled || mods.disabled
                    },
                    name : json.name,
                    val : option.val,
                    text : option.text,
                    title : option.title,
                    icon : option.icon
                }
            ];
        }));
    });

};
