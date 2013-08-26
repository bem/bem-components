[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['box', 'control'],
            mods : { disabled : 'yes' }
        },
        'pointer-events'
    ]
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'radio-option' }
}]