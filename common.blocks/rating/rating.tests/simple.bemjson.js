({
    block : 'page',
    title : 'bem-components: rating',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'rating',
            mods : { theme : 'normal' },
            name : 'rating',
            points : 5,
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
