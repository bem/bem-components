[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['box', 'control', 'tick'],
            mods : { disabled : true, focused : true, checked : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } }
    ]
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'checkbox' }
}]