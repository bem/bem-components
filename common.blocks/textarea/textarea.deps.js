[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {
            mods : ['disabled', 'focused'],
            elems : ['control']
        },
        'control'
    ]
},
{
    tech : 'js',
    shouldDeps : { tech : 'js', block : 'input' }
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'textarea' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'textarea' },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
