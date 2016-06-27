[{
    mustDeps : { block : 'i-bem-dom' },
    shouldDeps : ['radio', 'dom', 'jquery']
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'radio-group' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'radio-group', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
