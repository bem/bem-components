#/usr/bin/sh

[ -z "$TRAVIS_REPO_SLUG" ] && echo "No TRAVIS_REPO_SLUG provided" && exit 1
[ -z "$TRAVIS_PULL_REQUEST" ] && echo "No TRAVIS_PULL_REQUEST provided" && exit 2
[ -z "$GH_TOKEN" ] && echo "No GH_TOKEN provided" && exit 3

GH_PR_COMMENTS_URI=https://api.github.com/repos/$TRAVIS_REPO_SLUG/issues/$TRAVIS_PULL_REQUEST/comments

new_comment() {
  printf '{"body": "%s"}' "$(echo $@)" \
    | curl -s "$GH_PR_COMMENTS_URI?access_token=$GH_TOKEN" --data @-
}

new_comment "$@"
