block('checkbox-group')(
    tag()('span'),

    attrs()({ role : 'group' }),

    js()(true),

    mix()([{ block : 'control-group' }]),

    content()(function() {
        var mods = this.mods,
            ctx = this.ctx,
            val = ctx.val,
            isValDef = typeof val !== 'undefined';

        if(isValDef && !Array.isArray(val)) throw Error('checkbox-group: val must be an array');

        return (ctx.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                {
                    block : 'checkbox',
                    mods : {
                        type : mods.type,
                        theme : mods.theme,
                        size : mods.size,
                        checked : isValDef && val.indexOf(option.val) > -1,
                        disabled : option.disabled || mods.disabled
                    },
                    name : ctx.name,
                    val : option.val,
                    text : option.text,
                    title : option.title,
                    icon : option.icon
                }
            ];
        });
    })
);
