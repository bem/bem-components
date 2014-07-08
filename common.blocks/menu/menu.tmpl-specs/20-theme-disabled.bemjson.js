({
    block : 'menu',
    mods : { focused : true },
    content : [
        {
            elem : 'group',
            title : 'Group 1',
            content : [
                {
                    block : 'menu-item',
                    content : 'item 1'
                },
                {
                    block : 'menu-item',
                    mods : { type : 'link', disabled : true },
                    val : 1,
                    content : {
                        block : 'link',
                        url : '#',
                        content : 'Google'
                    }
                }
            ]
        }
    ]
})
