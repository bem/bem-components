module.exports = function(bh) {

    bh.match('select_mode_radio-check', function(ctx, json) {
        ctx
            .applyBase()
            .extend(ctx.js(), { text : json.text });

        var checkedOptions = ctx.tParam('checkedOptions');

        if(checkedOptions[0]) {
            ctx.content([
                {
                    elem : 'control',
                    val : checkedOptions[0].val
                },
                ctx.content()
            ], true);
        }
    });

    bh.match('select_mode_radio-check__button', function(ctx) {
        var checkedOptions = ctx.tParam('checkedOptions');

        ctx.content({
            elem : 'text',
            content : (checkedOptions[0] || ctx.tParam('select')).text
        });
    });

};
