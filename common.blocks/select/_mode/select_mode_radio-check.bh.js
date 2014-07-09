module.exports = function(bh) {

    bh.match('select_mode_radio-check', function(ctx, json) {
        ctx
            .applyBase()
            .extend(ctx.js(), { text : json.text });

        var checkedOptions = json._checkedOptions;

        ctx
            .tParam('_select', json)
            .tParam('_checkedOption', checkedOptions[0])
            .tParam('_checkedOptions', checkedOptions);

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
        ctx.content({
            elem : 'text',
            content : (ctx.tParam('_checkedOption') || ctx.tParam('_select')).text
        });
    });

};
