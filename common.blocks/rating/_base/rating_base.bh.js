module.exports = function(bh) {

    bh.match('rating_base', function(ctx, json) {
        var _sizes = {
                's' : 12,
                'm' : 16
            },
            _name = json.name,
            size = ctx.mod('size'),
            rates = [];

        ctx
            .tParam('_name', _name)
            .tag('span')
            .js({
                onceVote : json.onceVote || false,
                total : json.total || 0,
                votes : json.votes || 0,
                points : json.points || 0,
                size : _sizes[size]
            })
            .mix({ elem : 'control' })
            .attrs({
                name : json.name,
                role : 'menuitemradio'
            });

        if(json.granulation) {
            for(var i = 0; i < json.granulation; i++) {
                rates.push({ elem : 'rate', value : i + 1 });
            }
        } else {
            rates = json.content.map(function(rate, i) {
                rate.value = i + 1;
                return rate;
            });
        }

        rates.push({
            elem : 'result',
            attrs : { style : 'width: ' + json.points * _sizes[size] + 'px;' }
        });
        ctx.content(rates.reverse(), true);
    });

};
