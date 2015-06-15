module.exports = function(bh) {
    bh.match(['button_togglable_check', 'button_togglable_radio'], function(ctx) {
        ctx
            .applyBase()
            .attr('aria-pressed', ctx.mod('checked') || false);
    });
};
