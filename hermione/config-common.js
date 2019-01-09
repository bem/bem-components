'use strict';

const path = require('path'),
    serverPort = 8067;

module.exports = {
    gridUrl : getGridUrl(),
    baseUrl : `http://localhost:${serverPort}`,

    calibrate : true,
    compositeImage : true,
    waitTimeout : 5000,
    screenshotOnRejectTimeout : 5000,
    sessionsPerBrowser : 3,
    retry : 3,

    browsers : {
        'firefox-latest' : {
            desiredCapabilities : {
                version : '45.0',
                browserName : 'firefox',
                platform : 'LINUX',
                'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER
            }
        },
        'chrome-latest' : {
            desiredCapabilities : {
                version : '48.0',
                browserName : 'chrome',
                platform : 'LINUX',
                'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER,
                chromeOptions : {
                    prefs : {
                        browser : {
                            enable_spellchecking : false // Disable spellchecker
                        }
                    }
                }
            }
        }
    },

    screenshotsDir : test => path.join(path.dirname(test.file), 'screens', test.id(), test.browserId),

    plugins : {
        'html-reporter/hermione' : {
            enabled : true,
            path : 'hermione-report',
            defaultView : 'failed'
        },
        'custom-server' : {
            enabled : true,
            port : serverPort
        }
    },

    prepareBrowser : function(browser) {
        browser.addCommand('setFocusedState', require('./commands/setFocusedState'));
    }
};

function getGridUrl() {
    const { SAUCE_USERNAME, SAUCE_ACCESS_KEY } = process.env;

    if(SAUCE_USERNAME && SAUCE_ACCESS_KEY) {
        return `http://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com/wd/hub`;
    }

    console.warn('No SAUCE_USERNAME and SAUCE_ACCESS_KEY env was found. Local grid will be used.');

    return 'http://localhost:4444/wd/hub';
}
