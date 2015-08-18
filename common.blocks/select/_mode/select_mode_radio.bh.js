module.exports = function(bh) {

    bh.match('select_mode_radio', function(ctx) {
        ctx.applyBase();

        var checkedOptions = ctx.tParam('checkedOptions'),
            firstOption = ctx.tParam('firstOption');

        if(firstOption && !checkedOptions.length) {
            firstOption.checked = true;
            checkedOptions = [firstOption];
        }

        ctx
            .tParam('checkedOption', checkedOptions[0])
            .content([
                {
                    elem : 'control',
                    val : checkedOptions[0].val
                },
                ctx.content()
            ], true);
    });

    bh.match('select_mode_radio__button', function(ctx) {
        var checkedText = ctx.tParam('checkedOption').text;

        ctx
            .tParam('checkedText', checkedText)
            .content({
                elem : 'text',
                content : checkedText
            });
    });

};
