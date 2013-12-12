[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['box', 'control'],
            mods : { disabled : true, checked : true, focused : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'radio-option' }
}]
