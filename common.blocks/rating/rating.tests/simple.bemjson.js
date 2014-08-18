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
                mods : { theme : 'normal', size : size },
                name : 'rating' + size,
                points : 4,
                content : [
                    {
                        elemName : 'label',
                        content : 'Ужасно 1'
                    },
                    {
                        elemName : 'label',
                        content : 'Плохо 2'
                    },
                    {
                        elemName : 'label',
                        content : 'Сойдет 3'
                    },
                    {
                        elemName : 'label',
                        content : 'Хорошо 4'
                    },
                    {
                        elemName : 'label',
                        content : 'Отлично 5'
                    }
                ]
            },
            { tag : 'h3', content : 'normal ' + size + ' length (stars)' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size },
                name : 'rating1' + size,
                points : 4,
                length : 10
            },
            { tag : 'h3', content : 'normal ' + size + ' disabled' },
            {
                block : 'rating',
                mods : { theme : 'normal', size : size, disabled : true },
                name : 'rating2' + size,
                points : 4,
                length : '7'
            },
            { tag : 'hr' }

        ]
    })
});
