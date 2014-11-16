module.exports = function(bh) {
    bh.match('calendar__title',
 function(ctx) {
        var getMonthName = function(n){
            return [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ][n];
        };

        var date = ctx.tParam('date');
        var title = getMonthName(date.getMonth()) + ' '  + date.getFullYear();

        ctx.content(title, true);
    });
};
