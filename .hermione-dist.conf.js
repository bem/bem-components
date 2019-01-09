'use strict';

const baseConfig = require('./hermione/config-common');

module.exports = Object.assign({}, baseConfig, {
    sets : {
        desktop : {
            files : [
                'test/dist/*.hermione.js'
            ],
            browsers : [
                'firefox-latest',
                'chrome-latest'
            ]
        }
    }
});
