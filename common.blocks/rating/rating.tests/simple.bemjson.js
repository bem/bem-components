({
    block : 'page',
    title : 'bem-components: rating',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' }
      //  { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'rating',
            mods : { theme : 'normal' },
            name : 'rating',
            points : 4.6,
            length : '7', // строка, либо число, если убрать - сгенерирует по контенту
            content : [
                {
                    elemName : 'label',
                    content : '1'
                },
                {
                    elemName : 'label',
                    content : '2'
                },
                {
                    elemName : 'label',
                    content : '3'
                },
                {
                    elemName : 'label',
                    content : '4'
                },
                {
                    elemName : 'label',
                    content : '5'
                }
            ]
        }
    ]
});
