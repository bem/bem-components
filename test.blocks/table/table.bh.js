module.exports = function(bh) {

    bh.match('table', function(ctx) {
        ctx.tag('table');
    });

    bh.match('table__row', function(ctx) {
        ctx.tag('tr');
    });

    bh.match('table__title', function(ctx) {
        ctx.tag('th');
    });

    bh.match('table__cell', function(ctx) {
        ctx.tag('td');
    });

};
