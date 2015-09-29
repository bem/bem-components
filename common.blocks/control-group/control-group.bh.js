module.exports = function(bh) {
    bh.match('control-group', function(ctx) {
        ctx.attrs({ role : 'group' });
    });
};
