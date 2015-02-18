module.exports = {
    bem : require('enb-bem-techs'),
    css : require('enb-stylus/techs/css-stylus-with-autoprefixer'),
    files : {
        copy : require('enb/techs/file-copy'),
        merge : require('enb/techs/file-merge')
    },
    browser : {
        js : require('enb-diverse-js/techs/browser-js'),
        ym : require('enb-modules/techs/prepend-modules')
    },
    engines : {
        bemhtml : require('enb-bemxjst/techs/bemhtml-old'),
        bhServer : require('enb-bh/techs/bh-server-include'),
        bhClient : require('enb-bh/techs/bh-client-module')
    },
    html : {
        bemhtml : require('enb-bemxjst/techs/html-from-bemjson'),
        bh : require('enb-bh/techs/html-from-bemjson')
    },
    process : require('enb-borschik/techs/borschik')
};
