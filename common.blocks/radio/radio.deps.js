[{
    mustDeps : {
        block : 'i-bem',
        elems : [{
            name : 'dom',
            mods : ['elem-instances']
        }]
    },
    shouldDeps : [{ elem : 'option' }, 'dom']
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'radio' }
}]
