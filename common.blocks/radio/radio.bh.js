module.exports = function(bh) {

    bh.match('radio', function(ctx, json) {
        ctx
            .tag('label')
            .js(true)
            .content([
                {
                    elem : 'box',
                    content : {
                        elem : 'control',
                        checked : ctx.mod('checked'),
                        disabled : ctx.mod('disabled'),
                        name : json.name,
                        val : json.val,
                        ariaLabel : json.ariaLabel,
                        ariaLabelledby : json.ariaLabelledby
                    }
                },
                json.text
            ]);
    });

};
