module.exports = function(bh) {

    bh.match('select_mode_radio', function(ctx, json) {
        ctx.applyBase();

        var checkedOptions = json._checkedOptions,
            firstOption = json._firstOption;

        if(!checkedOptions.length) {
            firstOption.checked = true;
            checkedOptions.push(firstOption);
        }

        ctx
            .tParam('_select', json)
            .tParam('_checkedOption', checkedOptions[0])
            .tParam('_checkedOptions', checkedOptions); // TODO: разобраться с tParam во всех mode'ах

        ctx.content([
            {
                elem : 'control',
                val : checkedOptions[0].val
            },
            ctx.content()
        ], true);
    });

    bh.match('select_mode_radio__button', function(ctx) {
        ctx.content({
            elem : 'text',
            content : ctx.tParam('_checkedOption').text
        });
    });

};
