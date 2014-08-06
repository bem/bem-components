#!/usr/bin/env sh

ROOT="$(dirname $0)"
REPORTS_ROOT="$ROOT/reports"
SOURCE_REPROT_DIR="$ROOT/gemini-report"
PUBLISH_REPORT_DIR="$ROOT/reports/$TRAVIS_BUILD_NUMBER"

git clone -q --branch gh-pages "https://$GH_TOKEN@github.com/bem/reports.git" "$REPORTS_ROOT"
mkdir -p "$PUBLISH_REPORT_DIR"
cp -R "$SOURCE_REPROT_DIR" "$PUBLISH_REPORT_DIR"

cd "$REPORTS_ROOT"
git config user.name "TravisCI"
git config user.email "travis@example.com"
git add -A -f
git commit -q -m "Report for Travis Build $TRAVIS_BUILD_NUMBER"
git push -q origin gh-pages

echo "Report is available at http://bem.github.io/reports/$TRAVIS_BUILD_NUMBER/gemini-report"
