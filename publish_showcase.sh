#!/usr/bin/env sh

SHOWCASE_NAME="showcase"

ROOT="$(dirname $0)"
REPORTS_ROOT="$ROOT/reports"
SOURCE_SHOWCASE_DIR="$ROOT/desktop.pages/$SHOWCASE_NAME"
PUBLISH_SHOWCASE_DIR="$REPORTS_ROOT/$TRAVIS_BUILD_NUMBER/$SHOWCASE_NAME"

echo '{"freeze_paths" : {"libs/**": ":base64:", "*.blocks/**": ":base64:", "design/*.blocks/**": ":base64:"}}' > .borschik
YENV=production node_modules/.bin/magic make desktop.pages/${SHOWCASE_NAME}

git clone -q --branch gh-pages "https://$GH_TOKEN@github.com/bem/reports.git" "$REPORTS_ROOT"
mkdir -p ${PUBLISH_SHOWCASE_DIR}
for f in ${SHOWCASE_NAME}.html ${SHOWCASE_NAME}.css ${SHOWCASE_NAME}.js; do
    cp ${SOURCE_SHOWCASE_DIR}/${f} ${PUBLISH_SHOWCASE_DIR}
done

cd "$REPORTS_ROOT"
git config user.name "TravisCI"
git config user.email "travis@example.com"
git add -A -f
git commit -q -m "Showcase for Travis Build $TRAVIS_BUILD_NUMBER"
git pull -q --rebase origin gh-pages
git push -q origin gh-pages
cd -

msg="Showcase is [available](http://bem.github.io/reports/$TRAVIS_BUILD_NUMBER/$SHOWCASE_NAME/$SHOWCASE_NAME.html)"
node notify.js --id "showcase" --message "$msg"
