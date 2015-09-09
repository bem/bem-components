module.exports = function(bh) {
    bh.match('icon', function(ctx, json) {
        var attrs = {
                role : 'presentation',
                'aria-hidden' : 'true' // NOTE: JAWS processes role="presentation" wrongly
            },
            url = json.url;
        if(url) attrs.style = 'background-image:url(' + url + ')';
        ctx
            .tag('i')
            .attrs(attrs);
    });
};
