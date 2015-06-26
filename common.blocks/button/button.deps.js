[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {
            elems : ['text'],
            mods : { focused : true, hovered : true, disabled : true, pressed : true }
        },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        { block : 'keyboard', elem : 'codes' },
        'functions',
        'events',
        'control'
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'button' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'button', mods : { type : 'link' } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
