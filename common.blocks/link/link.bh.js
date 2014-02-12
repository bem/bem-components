module.exports = function(bh) {

    bh.match('link', function(ctx, json) {
        ctx.tag('a');

        var attrs = {},
            url = json.url,
            typeOfUrl = typeof url;

        typeOfUrl !== 'undefined' && (attrs.href = typeOfUrl === 'string'?
            url :
            url); // TODO: реализовать возможность отдавать bemjson в url

        json.title && (attrs.title = json.title);
        json.target && (attrs.target = json.target);

        ctx.attrs(attrs);
    });

};
