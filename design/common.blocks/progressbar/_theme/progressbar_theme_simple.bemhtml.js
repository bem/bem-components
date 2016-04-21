block('progressbar').mod('theme', 'simple').content()(function() {
    return [
        {
            elem : 'box',
            content : applyNext()
        },
        {
            elem : 'text',
            content : this.ctx.val || 0
        }
    ];
});
