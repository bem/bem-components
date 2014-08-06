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
            //name : 'rating1',
            //points : 0,
            content : [
                {
                    elem : 'input'
                },
                {
                    elem : 'label',
                    text : '1'
                },
                {
                    elem : 'input',
                },
                {
                    elem : 'label',
                    text : '2'
                },
                {
                    elem : 'input'
                },
                {
                    elem : 'label',
                    text : '3'
                },
                {
                    elem : 'input'
                },
                {
                    elem : 'label',
                    text : '4'
                },
                {
                    elem : 'input'
                },
                {
                    elem : 'label',
                    text : '5'
                }
            ]
        }
    ]
});
