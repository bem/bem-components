[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['box', 'control'],
            mods : { disabled : true, checked : true, focused : true }
        },
        'pointer-events'
    ]
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'radio-option' }
}]