module.exports = function(bh) {

    bh.match('cut', function(ctx, json) {
        ctx.js(true);

        ctx.content([
           { elem : 'container', content : json.content },
           { elem : 'switcher', content : json.switcher || 'Show' }
        ], true);
    });

};
