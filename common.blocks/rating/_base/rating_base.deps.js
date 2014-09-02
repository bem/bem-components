[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        'control',
        { block : 'keyboard', elem : 'codes' },
        { mods : { focused : true } },
        {
            elems : ['input', 'label', 'rate']
        }
    ]
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'rating', mods : { base : true } }
    ]
}]
