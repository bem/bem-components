({
    block : 'page',
    title : 'Drag and drop',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_dragndrop.css' },
        { elem : 'js', url : '_dragndrop.js' }
    ],
    content : [
        {
            block : 'dragndrop',
            mods : { nose : true }
        },
        {
            block : 'dragndrop',
            attrs : { style : 'top: 80px;' },
            mods : { eye : true }
        },
        {
            block : 'dragndrop',
            attrs : { style : 'top: 215px;' },
            mods : { mouth : true }
        },
        {
            block : 'dragndrop',
            attrs : { style : 'top: 275px;' },
            mods : { eye : true }
        }
    ]
})
