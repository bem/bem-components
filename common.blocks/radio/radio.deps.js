[{
    mustDeps : [
        { block : 'jquery', elem : 'pointer-events' },
        { block : 'i-bem', elems : ['dom'] }
    ],
    shouldDeps : {
        elems : ['label', 'box', 'control'],
        mods : { disabled : 'yes' }
    }
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'radio' }
}]
