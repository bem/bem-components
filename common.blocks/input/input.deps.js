[{
    mustDeps : 'i-bem-dom',
    shouldDeps : [
        {
            mods : { disabled : true, focused : true },
            elems : ['box', 'control']
        },
        'control'
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'input' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'input', mods : { type : ['textarea', 'password', 'search'], 'has-clear' : true } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
