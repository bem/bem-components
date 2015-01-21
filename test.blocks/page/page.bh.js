module.exports = function(bh) {
    bh.match('page__head', function(ctx) {
        ctx.content([
            '<!--[if lt IE 9]>',
            { elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
            '<![endif]-->',
            ctx.content()
        ], true);
    });
};
