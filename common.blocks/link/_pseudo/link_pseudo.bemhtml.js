block('link').mod('pseudo', true).match(function() { return !this.ctx.url; })(
    tag()('span'),
    attrs()(function() {
        return this.extend(applyNext(), { role : 'button' });
    })
);
