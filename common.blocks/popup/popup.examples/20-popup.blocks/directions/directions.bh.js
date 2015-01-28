module.exports = function(bh) {

bh
    .match('directions', function(ctx) {
        ctx.tag('table');
    })
    .match('directions__row', function(ctx) {
        ctx.tag('tr');
    })
    .match('directions__cell', function(ctx) {
        ctx.tag('td');
    });

};
