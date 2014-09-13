[{
    mustDeps : { block : 'i-bem', elem : 'dom' },
    shouldDeps : [
        { elem : 'switcher' },
        {
            block : 'popup',
            mods : {
                autoclosable : true,
                target : 'anchor'
            }
        }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'dropdown' }
},
{
    tech : 'tmpl-spec.js',
    mustDeps : { tech : 'bemhtml', block : 'dropdown', mods : { switcher : ['link', 'button'] } }
}]
