module.exports = function(bh) {

    bh.match('checkbox', function(ctx, json) {
        ctx.tag('label')
            .js(true)
            .content([
                {
                    elem : 'box',
                    content : {
                        elem : 'control',
                        checked : ctx.mod('checked'),
                        disabled : ctx.mod('disabled'),
                        name : json.name,
                        val : json.val
                    }
                },
                json.text && {
                    elem : 'text',
                    content : json.text
                }
            ]);
    });

};
