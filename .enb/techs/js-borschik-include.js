module.exports = require('enb-borschik/techs/js-borschik-include').buildFlow()
    .name('js-borschik-include')
    .target('target', '?.browser.js')
    .useFileList(['vanilla.js', 'browser.js', 'js'])
    .createTech();
