[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {
            mods : ['disabled', 'focused'],
            elems : ['box', 'control']
        },
        'control'
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'input' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'input', mods : { type : ['textarea', 'password', 'search'], 'has-clear' : true } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
