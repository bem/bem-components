[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['box', 'control', 'tick', 'label'],
            mods : { disabled : 'yes', focused : 'yes', checked : 'yes' }
        },
        'pointer-events'
    ]
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'checkbox' }
}]