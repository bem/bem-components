module.exports = function(bh) {
    bh.match('page__head', function(ctx) {
        ctx.content([
            {
                elem : 'conditional-comment',
                condition : '< IE 9',
                content : { elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' }
            },
            ctx.content()
        ], true);
    });
};
