module.exports = function(bh) {
    bh.match('image', function(ctx, json) {
        ctx
            .tag('i')
            .attrs({
                src : json.url,
                width : json.width,
                height : json.height,
                alt : json.alt,
                title : json.title
            });
    });
};
