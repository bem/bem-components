block('textarea')(
    js()(true),
    tag()('textarea'),

    // NOTE: mix below is to satisfy interface of `control`
    mix()({ elem : 'control' }),

    attrs()(function() {
        var ctx = this.ctx,
            attrs = {
                id : ctx.id,
                name : ctx.name,
                tabindex : ctx.tabIndex,
                placeholder : ctx.placeholder
            };

        ctx.autocomplete === false && (attrs.autocomplete = 'off');
        this.mods.disabled && (attrs.disabled = 'disabled');

        return attrs;
    }),
    content()(function() {
        return this.ctx.val;
    })
);
