[{
    mustDeps : { block : 'i-bem-dom' },
    shouldDeps : [
        {
            elems : ['box', 'control', 'text'],
            mods : { disabled : true, checked : true, focused : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        'control'
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'radio' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'radio', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
