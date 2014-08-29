({
    block : 'page',
    title : 'bem-components: rating',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : ['s', 'm'].map(function(size) {
        return [
            { tag : 'h3', content : 'normal ' + size },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, readonly : 'off' },
                name : 'rating' + size,
                total : 4,
                votes : 1,
                points : 4,
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
            { tag : 'h3', content : 'normal ' + size + ' length (stars)' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, readonly : 'off' },
                name : 'rating1' + size,
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10
            },
            { tag : 'h3', content : 'normal ' + size + ' disabled' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, readonly : 'off', disabled : true },
                name : 'rating2' + size,
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10
            },
            { tag : 'h3', content : 'normal ' + size + ' readonly' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, readonly : 'on' },
                name : 'rating2' + size + 'readonly',
                total : 4,
                votes : 1,
                points : 4,
                granulation : 10
            },
            { tag : 'hr' }
        ]
    })
});
