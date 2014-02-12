module.exports = function(bh) {

    bh.match('input_has-clear__control', function(ctx) {
        ctx.tParam('_input__control', true);
        return {
            elem : 'box',
            content : [
                ctx.json(),
                { elem : 'clear' }
            ]
        };
    });

};
