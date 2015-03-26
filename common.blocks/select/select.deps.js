[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        { mods : { focused : true } },
        { elems : ['control', 'button', 'menu'] },
        {
            block : 'popup',
            mods : {
                autoclosable : true,
                target : 'anchor'
            }
        },
        { block : 'keyboard', elem : 'codes' },
        { block : 'strings', elem : 'escape' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'select' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : [
        { tech : 'bemhtml', block : 'select', mods : { mode : ['radio', 'check', 'radio-check'] } },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
