module.exports = function(bh) {
    bh.match('calendar', function(ctx) {
        var switchers = ctx.param('switcher') || ['prev', 'next'];
        var date = ctx.param('date') || new Date();

        ctx.js({
            date : date,
            switchers : switchers
        });
        ctx.content({
            block : 'calendar',
            elem : 'content',
            date : date,
            switchers : switchers
        }, true);
    });
};
