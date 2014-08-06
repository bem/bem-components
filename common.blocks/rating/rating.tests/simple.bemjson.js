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
            content : [
                {
                    elem : 'label',
                    content : '1'
                },
                {
                    elem : 'label',
                    content : '2'
                },
                {
                    elem : 'label',
                    content : '3'
                },
                {
                    elem : 'label',
                    content : '4'
                },
                {
                    elem : 'label',
                    content : '5'
                }
            ]
        }
    ]
});
