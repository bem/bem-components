#!/usr/bin/env sh

ROOT="$(dirname $0)"
REPORTS_ROOT="$ROOT/reports"
SOURCE_REPORT_DIR="$ROOT/desktop.pages/showcase"
PUBLISH_REPORT_DIR="$ROOT/reports/$TRAVIS_BUILD_NUMBER"

echo '{"freeze_paths" : {"libs/**": ":base64:","*.blocks/**": ":base64:","design/*.blocks/**": ":base64:"}}' >> .borschik
YENV=production node_modules/.bin/magic make desktop.pages/showcase

git clone -q --branch gh-pages "https://$GH_TOKEN@github.com/bem/reports.git" "$REPORTS_ROOT"
mkdir -p "$PUBLISH_REPORT_DIR"
cp -R "$SOURCE_REPORT_DIR" "$PUBLISH_REPORT_DIR"

cd "$REPORTS_ROOT"
git config user.name "TravisCI"
git config user.email "travis@example.com"
git add -A -f
git commit -q -m "Report for Travis Build $TRAVIS_BUILD_NUMBER"
git push -q origin gh-pages

echo "Report is available at http://bem.github.io/reports/$TRAVIS_BUILD_NUMBER/showcase/showcase.html"
