module.exports = {
    options : {
        expr : true,
        eqeqeq : true,
        undef : true,
        boss : true,
        sub : true,
        supernew : true,
        loopfunc : true,
        onecase : true,
        quotmark : 'single'
    },

    groups : {
        vanillajs : {
            options : {
                predef : ['modules']
            },
            includes : ['**/*.vanilla.js']
        },

        browserjs : {
            options : {
                browser : true,
                predef : ['modules']
            },
            includes : ['**/*.js'],
            excludes : [
                '**/*.vanilla.js',
                '**/*.test.js',
                '**/*.node.js',
                '**/*.deps.js'
            ]
        },

        testjs : {
            options : {
                browser : true,
                predef : [
                    'modules',
                    'describe',
                    'it',
                    'before',
                    'beforeEach',
                    'after',
                    'afterEach'
                ]
            },
            includes : ['**/*.test.js']
        }
    }
};