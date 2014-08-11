({
    block : 'page',
    title : 'bem-components: rating',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        { tag : 'h3', content : 'normal', },
        {
            block : 'rating',
            mods : { theme : 'normal' },
            name : 'rating',
            points : 4,
            //length : '7', // строка, либо число, если убрать - сгенерирует по контенту
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
        { tag : 'h3', content : 'normal disabled' },
        {
            block : 'rating',
            mods : { theme : 'normal', disabled : true },
            name : 'rating',
            points : 4,
            //length : '7', // строка, либо число, если убрать - сгенерирует по контенту
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
        }
    ]
});
