bem-components contribution guide
=================================

### Contribution policy

* We try to avoid to solve "because we can" problems, until a real world problem occurred
* Until there are no real cases which make block almost unusable, no API changes are welcome

### How to contribute

1. Create an [issue](https://github.com/bem/bem-components/issues/new) with a proper description.
1. Assign the issue to yourself.
1. Decide which version needs your changes.
1. Create a feature branch with an issue number and a version (`issues/<issue_number>@v<version_number>`) based on a version branch. For example, for an issue #42 and a version 2: `git checkout -b issues/42@v2`. If you need changes for several versions, each of them has to have a feature branch.
1. Commit changes (you can test your changes running `npm test`) and push. `Rebase` your branch on a corresponding version branch if needed.
1. Create a pull request from your feature branch; or several pull requests if you changed several versions.
1. Link your pull request with an issue number any way you like. For example, leave a [comment](https://github.com/blog/1506-closing-issues-via-pull-requests) with the issue number.
1. Wait for your pull request and the issue closes ;-)
