block('menu').elem('group')(
    attrs()({ role : 'group' }),
    match(function() { return typeof this.ctx.title !== 'undefined'; })(
        attrs()(function() {
            return this.extend(applyNext(), {
                'aria-label' : undefined,
                'aria-labelledby' : this.generateId()
            });
        }),
        content()(function() {
            return [
                {
                    elem : 'group-title',
                    attrs : {
                        role : 'presentation',
                        id : this.generateId()
                    },
                    content : this.ctx.title
                },
                applyNext()
            ];
        })
    )
);
