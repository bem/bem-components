module.exports = function(bh) {
    bh.match('control-group', function(ctx) {
        ctx.attrs({
            role : 'group',
            'aria-label' : '.' // NOTE: workaround for JAWS (look #1522 discussion for details)
        });
    });
};
