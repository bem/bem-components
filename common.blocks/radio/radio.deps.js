[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
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
    mustDeps : { tech : 'bemhtml', block : 'radio' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'radio', mods : { type : 'button' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
