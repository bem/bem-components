[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : ['radio', 'dom', 'jquery']
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'radio-group' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'radio-group', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
