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
            length : '20',
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
