/**
 * @usage
 *  › enb make tests desktop.tests/select/bench/bench.bh.html -n
 *  › enb make tests desktop.tests/select/bench/bench.html -n
 *  › node bench.js
 */

var fs = require('fs'),
    vm = require('vm');

function readBemjson(bemjsonPath) {
    return vm.runInNewContext(fs.readFileSync(bemjsonPath, 'utf8'));
}

function apply(tmpl, data) {
    return tmpl.apply(data);
}

function runBench(benchId, tmpl, data) {
    var i = 100;

    console.time(benchId);
    while(--i) {
        apply(tmpl, data);
    }
    console.timeEnd(benchId);
}

function run() {
    var bemhtml = require('./desktop.tests/select/bench/bench.bemhtml.js').BEMHTML;
    var bh = require('./desktop.tests/select/bench/bench.bh.js');
    var bemjson = readBemjson(__dirname + '/desktop.tests/select/bench/bench.bemjson.js');

    var n = 10, i = 0;

    //for(i = 0; i < n; i++) {
    //    runBench('do bench (bemhtml) ' + i, bemhtml, bemjson);
    //}

    for(i = 0; i < n; i++) {
        runBench('do bench (bh) ' + i, bh, bemjson);
    }
}

run();
