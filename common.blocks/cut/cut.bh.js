module.exports = function(bh) {

    bh.match('cut', function(ctx, json) {
        ctx
            .js(true)
            .content([
                { elem : 'container', content : json.content },
                {
                    block : 'link',
                    mods : { pseudo : true, theme : 'islands' },
                    mix : { block : 'cut', elem : 'switcher' },
                    content : json.switcher || 'Show'
                }
            ], true);
    });

};
