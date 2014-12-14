module.exports = function(bh) {

    bh.match('checkbox', function(ctx, json) {
        ctx.tag('label')
            .js(true)
            .content([
                {
                    elem : 'box',
                    content : {
                        elem : 'control',
                        id : json.id,
                        checked : ctx.mod('checked'),
                        disabled : ctx.mod('disabled'),
                        tabIndex : json.tabIndex,
                        name : json.name,
                        val : json.val
                    }
                },
                json.text
            ]);
    });

};
