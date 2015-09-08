module.exports = function(bh) {

    bh.match('radio-group', function(ctx, json) {
        ctx
            .tag('span')
            .attrs({ role : 'radiogroup' })
            .js(true)
            .mix({ block : 'control-group' });

        var mods = ctx.mods(),
            isValDef = typeof json.val !== 'undefined';

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
                        checked : isValDef && json.val === option.val,
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
