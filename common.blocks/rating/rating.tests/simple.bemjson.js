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
                    {   // Вместо content может быть title? Кастомный content?
                        content : 'Ужасно 1'
                    },
                    {
                        content : 'Плохо 2'
                    },
                    {
                        content : 'Сойдет 3'
                    },
                    {
                        content : 'Хорошо 4'
                    },
                    {
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
