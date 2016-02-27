var argv = require('minimist')(process.argv.slice(2)),

    token = process.env.GH_TOKEN,
    repoSlug = process.env.TRAVIS_REPO_SLUG,
    number = process.env.TRAVIS_PULL_REQUEST,

    reporter = require('pull-github-notify')(token, repoSlug, number);

if(argv.hasOwnProperty('clear')) {
    reporter.clear();
} else {
    reporter.report(argv.id, argv.message);
}
