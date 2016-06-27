[{
    mustDeps : { block : 'i-bem-dom' },
    shouldDeps : ['checkbox', 'dom', 'jquery']
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'checkbox-group' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'checkbox-group', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}
]
