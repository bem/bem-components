[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        {
            elems : ['text'],
            mods : { focused : 'yes', hovered : 'yes', disabled : 'yes', pressed : 'yes' }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointers' } }
    ]
},
{
    tech : 'test.js',
    mustDeps : { tech : 'bemhtml', block : 'button' }
}]
