block('checkbox')(
    tag()('label'),

    addJs()(true),

    content()(function() {
        var ctx = this.ctx,
            mods = this.mods;

        return [
            {
                elem : 'box',
                content : {
                    elem : 'control',
                    checked : mods.checked,
                    disabled : mods.disabled,
                    name : ctx.name,
                    val : ctx.val
                }
            },
            ctx.text && {
                elem : 'text',
                content : ctx.text
            }
        ];
    })
);
