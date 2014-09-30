({
    shouldDeps : [
        { block : 'popup', mods : { theme : 'islands' } },
        {
            include : false,
            mods : { switcher : 'link' },
            shouldDeps : { block : 'link', mod : 'theme', val : 'islands' }
        },
        {
            include : false,
            mods : { switcher : 'button' },
            shouldDeps : { block : 'button', mod : 'theme', val : 'islands' }
        }
    ]
})
