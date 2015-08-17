module.exports = function(bh) {
    bh.match(['button_togglable_check', 'button_togglable_radio'], function(ctx) {
        ctx.attr('aria-pressed', String(!!ctx.mod('checked')));
    });
};
