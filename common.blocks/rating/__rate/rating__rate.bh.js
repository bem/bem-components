module.exports = function(bh) {

    bh.match('rating__rate', function(ctx, json) {
        ctx
            .tag('')
            .content(
            [
                {
                    elem : 'input',
                    attrs : {
                        id : ctx.generateId(),
                        name : ctx.tParam('_name'),
                        value : json.value
                    }
                },
                {
                    elem : 'label',
                    attrs : {
                        for : ctx.generateId(),
                        title : json.content
                    }
                },
            ], true
        );
    });

};
