({
    shouldDeps : [
        { block : 'popup', mods : { theme : 'normal' } },
        {
            include : false,
            mods : { switcher : 'link' },
            shouldDeps : { block : 'link', mod : 'theme', val : 'normal' }
        },
        {
            include : false,
            mods : { switcher : 'button' },
            shouldDeps : { block : 'button', mod : 'theme', val : 'normal' }
        }
    ]
})
