module.exports = function(config) {
    config.node('desktop.pages/index', function(nodeConfig) {
        nodeConfig.addTechs([
            [require('enb/techs/levels'), { levels : getLevels() }],
            [require('enb/techs/file-provider'), { target : '?.bemjson.js' }],
            require('enb/techs/bemdecl-from-bemjson'),
            require('enb/techs/deps-old'),
            require('enb/techs/files'),
            require('enb/techs/css'),
            require('enb/techs/js'),
            require('./techs/bh-include'),
            require('./techs/html')
        ]);

        nodeConfig.addTech([require('./techs/bemhtml'), { devMode : false }]);

        nodeConfig.addTargets([
            '_?.css',
            '_?.js',
            '?.bemhtml.js',
            '?.bh.js',
            '?.html'
        ]);

        nodeConfig.addTechs([
            [require('enb/techs/borschik'), { sourceTarget : '?.css', destTarget : '_?.css' }],
            [require('enb/techs/borschik'), { sourceTarget : '?.js', destTarget : '_?.js' }]
        ]);

        function getLevels() {
            return [
                { path : 'libs/bem-core/common.blocks', check : true },
                { path : 'libs/bem-core/desktop.blocks', check : true },
                { path : './common.blocks', check : true },
                { path : './desktop.blocks', check : true },
                { path : './design/common.blocks', check : true },
                { path : './design/desktop.blocks', check : true }
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}
