[{
    mustDeps : { block : 'i-bem', elems : ['dom', 'i18n'] },
    shouldDeps : [
        { block : 'button' },
        { block : 'icon' },
        { elems : ['button', 'control', 'no-file', 'file'] },
        { block : 'jquery', elem : 'event', mods : { type : 'pointer' } },
        { block : 'strings', elem : 'escape' }
    ]
},
{
    tech : 'js',
    shouldDeps : [
        // TODO : нужно что-то придумать с повторением `tech : 'bemhtml'`
        { tech : 'bemhtml', block : 'i-bem' },
        // TODO : почему-то не работает без указания `block : 'attach'`
        {
            tech : 'bemhtml',
            block : 'attach',
            elems : ['control', 'file']
        },
        {
            tech : 'bemhtml',
            block : 'icon'
        }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'attach' }
}]
