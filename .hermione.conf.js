'use strict';

const getGridUrl = () => {
    const { SAUCE_USERNAME, SAUCE_ACCESS_KEY } = process.env;

    if(SAUCE_USERNAME && SAUCE_ACCESS_KEY) {
        console.log('Got envs!');
        return `http://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com/wd/hub`;
    }

    console.warn('No SAUCE_USERNAME and SAUCE_ACCESS_KEY was found. Local grid will be used.');

    return 'http://localhost:4444/wd/hub';
};

module.exports = {
    gridUrl : getGridUrl(),
    baseUrl : 'http://localhost:8000',

    calibrate : true,
    compositeImage : true,
    waitTimeout : 5000,
    screenshotOnRejectTimeout : 5000,
    sessionsPerBrowser : 3,
    retry : 3,

    sets : {
        desktop : {
            files : [
                'hermione/*.hermione.js',
            ],
            browsers : [
                'chrome-latest'
            ]
        }
    },

    browsers : {
        'chrome-latest' : {
            desiredCapabilities : {
                version : '48.0',
                browserName : 'chrome',
                platform : 'LINUX',
                chromeOptions : {
                    prefs : {
                        browser : {
                            enable_spellchecking : false // Disable spellchecker
                        }
                    }
                },
                'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER,
                build : process.env.TRAVIS_BUILD_NUMBER
            }
        }
    },

    plugins : {
        'html-reporter/hermione' : {
            enabled : true,
            path : 'hermione-report',
            defaultView : 'failed'
        }
    }
};
