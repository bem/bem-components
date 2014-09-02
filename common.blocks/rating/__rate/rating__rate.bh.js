module.exports = function(bh) {

    bh.match('rating__rate', function(ctx, json) {
        return ctx.content(
            [
                {
                    elem : 'label',
                    attrs : {
                        for : ctx.generateId(),
                        title : json.content
                    }
                },
                {
                    elem : 'input',
                    attrs : {
                        id : ctx.generateId(),

                        value : json.value
                    }
                }
            ], true
        );
    });

};
