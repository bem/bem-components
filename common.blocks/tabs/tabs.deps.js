([
    {
        mustDeps : { block : 'i-bem', elems : 'dom' },
        shouldDeps : [
            { block : 'radio-group', mods : { theme : ['islands', 'simple'], type : ['button', 'line'] } },
            { elem : 'box', mods : { selected : true } }
        ]
    },
    {
        tech : 'spec.js',
        mustDeps : { tech : 'bemhtml', block : 'tabs' }
    }
])
