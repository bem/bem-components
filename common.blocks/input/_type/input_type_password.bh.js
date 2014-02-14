module.exports = function(bh) {
    bh.match('input_type_password__control', function(ctx) {
        ctx.attr('type', 'password');
    });
};
