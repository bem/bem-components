[{
    mustDeps : { block : 'i-bem', elems : ['dom', 'i18n'] },
    shouldDeps : [
        { block : 'control' },
        { block : 'button' },
        { block : 'icon' },
        { elems : ['button', 'control', 'no-file', 'file'] },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        { block : 'strings', elem : 'escape' }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'attach' }
}]
