[
{
    mustDeps : { block : 'i-bem', elems : ['dom', 'i18n'] },
    shouldDeps : [
        {
            block : 'button',
            mods : { 'only-icon' : 'yes' }// TODO : убрать после https ://github.com/bem/bem-tools/pull/424
        },
        { elems : ['button', 'control', 'no-file', 'file'] },
        { block : 'jquery', elem : 'pointerclick' }
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
        }
    ]
}
]
