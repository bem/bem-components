module.exports = function(bh) {
    bh.match('button__text', function(ctx) {
        ctx.tag('span');

        var _button = ctx.tParam('_button');
        _button && _button.textMaxWidth &&
            ctx.attr('style', 'max-width:' + _button.textMaxWidth + 'px');
    });
};
