module.exports = function(bh) {

    bh.match('select_mode_check', function(ctx, json) {
        ctx
            .applyBase()
            .extend(ctx.js(), { text : json.text });

        var checkedOptions = ctx.tParam('checkedOptions');

        if(checkedOptions[0]) {
            var res = checkedOptions.map(function(option) {
                return {
                    elem : 'control',
                    val : option.val
                };
            });

            ctx.content([
                res,
                ctx.content()
            ], true);
        }
    });

    bh.match('select_mode_check__button', function(ctx) {
        var checkedOptions = ctx.tParam('checkedOptions');

        ctx.content({
            elem : 'text',
            content : checkedOptions.length === 1?
                checkedOptions[0].text :
                checkedOptions.reduce(function(res, option) {
                    return res + (res? ', ' : '') + (option.checkedText || option.text);
                }, '') ||
                    ctx.tParam('select').text
        });
    });

};
