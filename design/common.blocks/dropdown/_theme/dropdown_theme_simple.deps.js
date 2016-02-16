[
    {
        shouldDeps : [
            { block : 'popup', mods : { theme : 'simple' } },
        ]
    },
    {
        include : false,
        mods : { switcher : 'link' },
        shouldDeps : { block : 'link', mod : 'theme', val : 'simple' }
    },
    {
        include : false,
        mods : { switcher : 'button' },
        shouldDeps : { block : 'button', mod : 'theme', val : 'simple' }
    }
]
