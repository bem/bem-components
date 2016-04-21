block('button').mod('type', 'link')(
    tag()('a'),

    attrs()(function() {
        var ctx = this.ctx,
            attrs = { role : 'link' };

        ctx.target && (attrs.target = ctx.target);
        this.mods.disabled?
            attrs['aria-disabled'] = 'true' :
            attrs.href = ctx.url;

        return this.extend(applyNext(), attrs);
    }),

    mod('disabled', true)
        .js()(function() {
            return this.extend(applyNext(), { url : this.ctx.url });
        })
);
