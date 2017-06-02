block('input')(
    tag()('span'),
    addJs()(true),
    def()(function() {
        return applyNext({ _input : this.ctx });
    }),
    content()({ elem : 'box', content : { elem : 'control' } })
);
