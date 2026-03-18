# How to contribute

1.  Create an [issue](https://github.com/bem/bem-components/issues/new) with a proper description of changes.
2.  Create a feature branch with the issue number (`issues/<issue_number>`) based on the `v7` branch.
    For example, for issue \#42: `git checkout -b issues/42 v7`.
3.  Make changes. Verify locally:
    ```bash
    npm run lint          # code analysis (ESLint)
    npm run test:browser  # browser tests (Playwright)
    npm run build         # build all platforms (Vite)
    ```
4.  Commit your changes accordingly to [CLA](CLA.md) and push them to the remote repository. If necessary, `rebase` your branch from the `v7` branch.
5.  Create a pull request from your feature branch.
6.  Link your pull request with an issue number (for example, leave a [comment](https://github.com/blog/1506-closing-issues-via-pull-requests) with the issue number).
7.  Wait for the pull request to be accepted and the issue to be closed.

## Contributors

The list of contributors is available at https://github.com/bem/bem-components/graphs/contributors. You may also get it with `git log --pretty=format:"%an <%ae>" | sort -u`.
