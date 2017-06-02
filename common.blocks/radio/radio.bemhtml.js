block('radio')(
    tag()('label'),
    addJs()(true),
    content()(function() {
        var ctx = this.ctx;
        return [
            {
                elem : 'box',
                content : {
                    elem : 'control',
                    checked : this.mods.checked,
                    disabled : this.mods.disabled,
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
