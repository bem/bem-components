[{
    mustDeps : 'i-bem-dom',
    shouldDeps : [
        {
            mods : ['disabled', 'focused']
        },
        'control',
        // NOTE: no proper support for depsByTech in current build tools,
        // so we can't (easily) use `textarea.js->input.js` dependency here (see #1565 for discussion)
        'input'
    ]
},
{
    tech : 'spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'textarea' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'textarea' },
        { tech : 'bemhtml', block : 'icon' }
    ]
}]
