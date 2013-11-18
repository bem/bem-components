module.exports = {
    options : {
        boss : true,
        eqeqeq : true,
        evil : true,
        expr : true,
        forin : true,
        immed : true,
        loopfunc : true,
        maxdepth : 4,
        maxlen : 120,
        newcap : true,
        noarg : true,
        noempty : true,
        nonew : true,
        onecase : true,
        quotmark : 'single',
        sub : true,
        supernew : true,
        trailing : true,
        undef : true,
        unused : true
    },

    groups : {
        browserjs : {
            options : {
                browser : true,
                predef : ['modules']
            },
            includes : ['*.blocks/**/*.js'],
            excludes : [
                '**/*.i18n/*.js',
                '**/_*.js',
                '**/*.test.js',
                '**/*.deps.js',
                '**/*.bemjson.js'
            ]
        },

        testjs : {
            options : {
                browser : true,
                maxlen : 150,
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
            includes : ['*.blocks/**/*.test.js']
        },

        bemjsonjs : {
            options : {
                asi : true
            },
            includes : ['*.pages/**/*.bemjson.js']
        }
    }
};
