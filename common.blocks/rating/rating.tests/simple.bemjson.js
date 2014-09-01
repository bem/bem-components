({
    block : 'page',
    title : 'bem-components: rating',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : ['m', 's'].map(function(size) {
        return [
            { tag : 'h3', content : 'normal ' + size },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, base : true },
                name : 'rating' + size,
                total : 4, // the total sum of the rating
                votes : 1, // the total number of votes
                points : 4, // result now
                content : [
                    {
                        elem : 'rate',
                        content : 'Ужасно 1'
                    },
                    {
                        elem : 'rate',
                        content : 'Плохо 2'
                    },
                    {
                        elem : 'rate',
                        content : 'Сойдет 3'
                    },
                    {
                        elem : 'rate',
                        content : 'Хорошо 4'
                    },
                    {
                        elem : 'rate',
                        content : 'Отлично 5'
                    }
                ]
            },
            { tag : 'h3', content : 'normal ' + size + ' granulation' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, base : true },
                name : 'rating1' + size,
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10 // if not content, granulation(count) generate stars
            },
            { tag : 'h3', content : 'normal ' + size + ' onceVote' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, base : true },
                name : 'rating2' + size + 'onceVote',
                onceVote : true, // can vote only once
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10
            },
            { tag : 'h3', content : 'normal ' + size + ' readonly' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, readonly : true },
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10
            },
            { tag : 'h3', content : 'normal ' + size + ' disabled' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, base : true, disabled : true },
                name : 'rating2' + size,
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10
            },
            { tag : 'hr' }
        ]
    })
});
