var fs = require('fs'),
    path = require('path'),
    walk = require('bem-walk'),
    borschik = require('borschik').api,
    sets = require('./config').sets,
    platforms = Object.keys(sets),
    fixturesDir = path.join(__dirname, 'fixtures'),
    blocksDir = path.resolve('libs/bem-pr/spec.blocks'),
    asset = fs.readFileSync(path.join(__dirname, 'assets', 'test.html'), 'utf-8');

if(!fs.existsSync(fixturesDir)) {
    fs.mkdirSync(fixturesDir);
}

[
    'mocha.css',
    'mocha.js',
    'chai.js',
    'sinon.js',
    'sinon-chai.js'
].map(function (basename) {
    var name = basename.split('.')[0];

    borschik({
        input : path.join(blocksDir, name, basename),
        output : path.join(fixturesDir, basename)
    });
});

platforms.forEach(function (platform) {
    var levels = sets[platform].filter(fs.existsSync),
        config = {
            levels : levels.map(function (levelname) {
                return { path : levelname };
            })
        },
        walker = walk(levels, config),
        specs = [];

    walker.on('data', function (data) {
        if(data.tech === 'spec.js') {
            specs.push(data.path);
        }
    });

    walker.on('end', function () {
        html = buildHTML(platform, specs);

        fs.writeFileSync(path.join(fixturesDir, platform + '.html'), html, 'utf-8');
    });
});

function buildHTML(platform, specs) {
    return asset
        .replace(/\${ platform }/g, platform)
        .replace(/\${ scripts }/g, specs.map(function (url) {
            return '        <script src="../../../' + url + '"></script>';
        }).join('\n'));
}
