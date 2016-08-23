[{
    mustDeps : { block : 'i-bem', elem : 'dom' },
    shouldDeps : [
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
    shouldDeps : { tech : 'bemhtml', block : 'dropdown' }
},
{
    tech : 'tmpl-spec.js',
    shouldDeps : { tech : 'bemhtml', block : 'dropdown', mods : { switcher : ['link', 'button'] } }
}]
