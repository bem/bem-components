[{
    mustDeps : {
        block : 'i-bem',
        elems : [{
            name : 'dom',
            mods : { 'elem-instances' : 'yes' }
        }]
    },
    shouldDeps : [{ elem : 'option' }, 'dom']
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'radio' }
}]
