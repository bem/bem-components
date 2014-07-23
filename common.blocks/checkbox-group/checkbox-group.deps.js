[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : ['checkbox', 'dom', 'jquery']
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'checkbox-group' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'checkbox-group', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}
]
