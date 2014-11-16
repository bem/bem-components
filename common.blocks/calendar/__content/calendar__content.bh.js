module.exports = function(bh) {
    bh.match('calendar__content', function(ctx) {
        var date = ctx.param('date');
        var switchers = ctx.param('switchers');

        ctx.tParam('date', date);
        ctx.tParam('selected', ctx.param('selected') || true);

        ctx.content([
            { block : 'calendar', elem : 'switcher', mods : { dest : 'prev' }, content : switchers[0] },
            { block : 'calendar', elem : 'title' },
            { block : 'calendar', elem : 'switcher', mods : { dest : 'next' }, content : switchers[1] },
            { block : 'calendar', elem : 'grid' }
        ], true);
    });
};
