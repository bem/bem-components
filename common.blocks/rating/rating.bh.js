module.exports = function(bh) {

    bh.match('rating', function(ctx, json) {
        var conf = {
                's' : 12,
                'm' : 16
            },
            rates = [],
            size = ctx.mod('size'),
            len = json.length;

        ctx
            .tag('span')
            .js({
                'points' : json.points,
                'size' : conf[size]
            })
            .mix({ elem : 'control' })
            .attrs({
                name : json.name,
                role : 'rating'
            });

        if(len && Number(len) > 0) {
            for(var i = 0; i < len; i++) {
                rates.push(
                    {
                        elem : 'input',
                        attrs : {
                            id : ctx.generateId() + i,
                            name : json.name,
                            value : i + 1
                        }
                    },
                    {
                        elem : 'label',
                        attrs : {
                            for : ctx.generateId() + i
                        }
                    }
                );
            }
        } else {
            rates = ctx.content.map(function(rate, i) {
                return [
                    {
                        elem : 'input',
                        attrs : {
                            id : ctx.generateId() + i,
                            name : json.name,
                            value : i + 1
                        }
                    },
                    {
                        elem : rate.elemName,
                        attrs : {
                            for : ctx.generateId() + i,
                            title : rate.content
                        }
                    }
                ];
            }, this);
        }

        rates.push({
            elem : 'labelCut',
            attrs : { style : 'width: ' + Number(json.points) * conf[size] + 'px;' }
        });
        ctx.content(rates.reverse());
    });

};
