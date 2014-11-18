module.exports = function(bh) {
    bh.match('calendar__grid', function(ctx) {

        var getDaysInMonth = function(year, mount){
            return new Date(year, mount + 1, 0).getDate();
        };

        var isDayOfPrevMonth = function(dayNum, monthStartDay, weekNum){
            return dayNum < monthStartDay && weekNum === 0;
        };

        var getGrid = function(date){
            var grid = [],
                selected = ctx.tParam('selected') !== 'no';

            var year = date.getFullYear(),
                month = date.getMonth(),
                day = date.getDate();

            var daysOnWeek = 7,
                daysInMonth = getDaysInMonth(year, month),
                weekOnMonth = Math.ceil(daysInMonth / daysOnWeek),
                dayNum = 1,
                dayOfWeek = new Date(year, month, 1).getDay(),
                monthEnd = false,
                weekNum, daysCounter;

            for(weekNum = 0; weekNum <= weekOnMonth; weekNum++) {
                var row = [];
                for(daysCounter = 1; daysCounter <= daysOnWeek; daysCounter++) {
                    var cellState = false,
                        val;

                    if(isDayOfPrevMonth(daysCounter, dayOfWeek, weekNum)) {
                        val = new Date(year, month, daysCounter - dayOfWeek + 1).getDate();
                        cellState = 'disable';
                    } else {
                        if(dayNum > daysInMonth) {
                            dayNum = 1;
                            monthEnd = true;
                        }

                        val = dayNum++;
                    }

                    cellState =  cellState || monthEnd? 'disable' : '';

                    if(selected && !isDayOfPrevMonth(daysCounter, dayOfWeek, weekNum) && day === val && !monthEnd) {
                        cellState = 'active';
                    }

                    row.push({
                        elem : 'cell',
                        content : val,
                        date : new Date(year, month, val),
                        mods : { state : cellState }
                    });
                }

                grid.push({
                    elem : 'row',
                    content : row
                });
            }

            return grid;
        };

        var grid = getGrid(ctx.tParam('date'));

        ctx.content(grid, true);
        ctx.tag('table');
    });
};
