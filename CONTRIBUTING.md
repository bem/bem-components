# How to contribute

1.  Create an [issue](https://github.com/bem/bem-components/issues/new) with a proper description of changes.
2.  Determine the library version to make changes to.
3.  Create a feature branch with the issue number and version (`issues/<issue_number>@v<version_number>`) based on a version branch.
    For example, for issue \#42 and version 2: `git checkout -b issues/42@v2`. If you are making changes to multiple versions, each of them must have its own feature branch.
4.  Make changes. To check the results of your changes locally for errors, run `npm test`.
5.  Commit your changes and push them to the remote repository. If necessary, `rebase` your branch from the base version branch.
6.  Create a pull request from your feature branch. If you changed multiple versions, create a pull request for each version.
7.  Link your pull request with an issue number (for example, leave a [comment](https://github.com/blog/1506-closing-issues-via-pull-requests) with the issue number).
8.  Wait for the pull request to be accepted and the issue to be closed.

## Contributors

The list of contributors is available at https://github.com/bem/bem-components/graphs/contributors. You may also get it with `git log --pretty=format:"%an <%ae>" | sort -u`.
