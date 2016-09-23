var fs = require('fs'),
    glob = require('glob'),
    postcss = require('postcss'),
    plugins = require('./.enb/techs').postcss.plugins;

glob('**/*.post.css', function(err, files) {
    // TODO: replace with Promise.all after upgrade to new version of node.js
    var total = files.length;

    files.forEach(function(file) {
        var target = file.replace(/\.post\.css$/, '.css');

        postcss(plugins('> 0.5%'))
            .process(fs.readFileSync(file, 'utf8'), { from : file, to : target })
                .then(function (result) {
                    fs.writeFileSync(target, result.css);
                    if(result.map) fs.writeFileSync(target + '.map', result.map);
                    total--;
                    if(!total) console.log('done');
                });
    });
});
