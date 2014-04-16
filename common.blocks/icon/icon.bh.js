module.exports = function(bh) {
    bh.match('icon', function(ctx, json) {
        ctx.tag('i');
        json.url && ctx.attr('style', 'background-image:url(' + json.url + ')');
    });
};
