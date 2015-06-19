module.exports = function(bh) {

    bh.match('link', function(ctx, json) {
        ctx
            .tag('a')
            .mix({ elem : 'control' }); // satisfy interface of `control`

        var url = typeof json.url === 'object'? // url could contain bemjson
                bh.apply(json.url) :
                json.url,
            isDisabled = !!ctx.mod('disabled'),
            attrs = {
                role : 'link',
                'aria-disabled' : isDisabled
            },
            tabIndex;

        if(!isDisabled) {
            if(url) {
                attrs.href = url;
                tabIndex = json.tabIndex;
            } else {
                tabIndex = json.tabIndex || 0;
            }
            ctx.js(true);
        } else {
            ctx.js(url? { url : url } : true);
        }

        typeof tabIndex === 'undefined' || (attrs.tabindex = tabIndex);

        json.title && (attrs.title = json.title);
        json.target && (attrs.target = json.target);

        ctx.attrs(attrs);
    });

};
