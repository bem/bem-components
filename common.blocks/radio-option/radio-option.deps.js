[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['box', 'control'],
            mods : { disabled : true, checked : true, focused : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointers' } }
    ]
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'radio-option' }
}]