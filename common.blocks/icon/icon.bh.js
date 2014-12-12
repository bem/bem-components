module.exports = function(bh) {
    bh.match('icon', function(ctx, json) {
        var attrs = { 'aria-hidden' : 'true' },
            url = json.url;
        if(url) attrs.style = 'background-image:url(' + url + ')';
        ctx
            .tag('i')
            .attrs(attrs);
    });
};
