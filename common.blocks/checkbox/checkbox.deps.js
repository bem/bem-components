[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {
            elems : ['box', 'control', 'text'],
            mods : { disabled : true, focused : true, checked : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        'control'
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'checkbox' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'checkbox', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}
]
