[{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps : [
        'jquery',
        'dom',
        { block : 'functions', elems : 'throttle' },
        { mods : { visible : true } }
    ]
},
{
    tech : 'spec.js',
    mustDeps : { tech : 'bemhtml', block : 'popup' },
    shouldDeps : 'z-index-group'
}]
