module.exports = {
    files : {
        provide : require('enb/techs/file-provider'),
        copy : require('enb/techs/file-copy'),
        merge : require('enb/techs/file-merge')
    },
    bem : require('enb-bem-techs'),
    css : {
        stylus : require('enb-stylus/techs/css-stylus'),
        stylusWithAutoprefixer : require('enb-stylus/techs/css-stylus-with-autoprefixer')
    },
    js : require('./techs/js-borschik-include'),
    ym : require('enb-modules/techs/prepend-modules'),
    engines : {
        bemhtml : require('enb-bemxjst/techs/bemhtml-old'),
        bhServer : require('enb-bh/techs/bh-server'),
        bhServerInclude : require('enb-bh/techs/bh-server-include'),
        bhClient : require('enb-bh/techs/bh-client-module')
    },
    html : {
        bemhtml : require('enb-bemxjst/techs/html-from-bemjson'),
        bh : require('enb-bh/techs/html-from-bemjson')
    },
    borschik : require('enb-borschik/techs/borschik')
};
