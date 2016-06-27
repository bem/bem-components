({
    block : 'menu',
    mods : { focused : true },
    content : [
        {
            elem : 'group',
            title : 'Group 1',
            content : [
                {
                    elem : 'item',
                    content : 'item 1'
                },
                {
                    elem : 'item',
                    elemMods : { type : 'link', disabled : true },
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
