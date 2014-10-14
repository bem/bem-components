# BEM Components Library [![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components) [![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)

## What is this?

`bem-components` is a library of blocks providing ready-made form controls and some other blocks.
It contains base realizations of blocks that are abstracted from the design. Few optional design themes are available.

## Usage

You can use any way you are familiar with to include this library into your project.
E.g. you can use `bem-tools` or `ENB`.

## Supported browsers

* Desktop:
  * Firefox 30+
  * Chrome last 2 versions
  * Safari 6.0+
  * Opera 12.1+
  * Internet Explorer 9+
* Touch-pad:
  * Android 4+
  * iOS 5+
* Touch-phone:
  * Android 4+
  * iOS 6+
  * Windows Phone 8+ (Internet Explorer 10+)

## Inside

### Levels

* `common.blocks` — suited for any devices and browsers
* `desktop.blocks` — should be used for desktop browsers
* `touch.blocks` — implement some touch-platforms specifics

### Blocks

* [attach](common.blocks/attach/attach.en.md)
* [button](common.blocks/button/button.en.md)
* [checkbox](common.blocks/checkbox/checkbox.en.md)
* [checkbox-group](common.blocks/checkbox-group/checkbox-group.en.md)
* [control](common.blocks/control/control.en.md)
* [control-group](common.blocks/control-group/control-group.en.md)
* [dropdown](common.blocks/dropdown/dropdown.en.md)
* [icon](common.blocks/icon/icon.en.md)
* [image](common.blocks/image/image.en.md)
* [input](common.blocks/input/input.en.md)
* [link](common.blocks/link/link.en.md)
* [menu](common.blocks/menu/menu.en.md)
* [menu-item](common.blocks/menu-item/menu-item.en.md)
* [popup](common.blocks/popup/popup.en.md)
* [radio](common.blocks/radio/radio.en.md)
* [radio-group](common.blocks/radio-group/radio-group.en.md)
* [select](common.blocks/select/select.en.md)
* [spin](common.blocks/spin/spin.en.md)
* [textarea](common.blocks/textarea/textarea.en.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.en.md)

### Technologies

* [JS](https://bem.info/technology/i-bem/current/i-bem-js/)
* [YModules](https://bem.info/tools/bem/modules/)
* [BEMHTML](https://bem.info/technology/bemhtml/current/reference/)
* [BH](https://bem.info/technology/bh/current/reference/)
* [BEMTREE](https://bem.info/technology/bemtree/current/bemtree/)
* [Stylus](https://learnboost.github.io/stylus/)

## Changelog

You can check the changelog at the [changelog page](CHANGELOG.md).

## Migration

Migartion guide is [here](MIGRATION.md).

## Maintainers

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)

## Development

### Working copy

1. Get the source code:
  ```bash
  $ git clone git://github.com/bem/bem-components.git
  $ cd bem-components
  ```

1. Install the dependencies:
  ```bash
  $ npm install
  ```
  You need `export PATH=./node_modules/.bin:$PATH` or any alternative way to run locally-installed `ENB`.

1.
  Install all necessary libraries:
  ```bash
  $ bower install
  ```

1.
  Build and run tests and examples:
  ```bash
  $ npm run build-all
  ```

1.
  Run development server:
  ```bash
  $ enb server
  ```

1.
  Check the code-style:
  ```bash
  $ npm run lint
  ```

### How to contribute

1. Create an [issue](https://github.com/bem/bem-components/issues/new) with a proper description.
1. Decide which version needs your changes.
1. Create a feature branch with an issue number and a version (`issues/<issue_number>@v<version_number>`) based on a version branch. For example, for an issue #42 and a version 2: `git checkout -b issues/42@v2`. If you need changes for several versions, each of them has to have a feature branch.
1. Commit changes (you can test your changes running `npm test`) and push. `Rebase` your branch on a corresponding version branch if needed.
1. Create a pull request from your feature branch; or several pull requests if you changed several versions.
1. Link your pull request with an issue number any way you like. For example, leave a [comment](https://github.com/blog/1506-closing-issues-via-pull-requests) with the issue number.
1. Wait for your pull request and the issue to be closed ;-)

### Modular testing

#### JavaScript unit tests

To run JS unit tests use `npm run test-specs` command. You may also specify the target, e.g. `enb make specs desktop.specs/input` to run just `input` tests.

All tests will be run automatically using [Travis](https://travis-ci.org) on each pull request.

#### Regrassion tests of layout

We use [gemini](https://github.com/bem/gemini) for layout testing.

Tests for each block are stored in a separate file `block-name.gemini.js` in a directory `gemini/`. All tests could be executed manually or automatically using [Travis](https://travis-ci.org). We use [SauceLabs](https://saucelabs.com) service as a [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2).

Use [OpenSauce](https://saucelabs.com/opensauce) account in SauceLabs and [Sauce Connect](https://saucelabs.com/connect) utility to run tests locally.

Developers of BEM team could use `bem-components` account (we do not publish login and password because of the limit for three concurrent browsers launch; it is much more efficiently to use different free accounts for manual testing).

For tests execution you need the following:

1. Set up environment variables (`SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`).
1. Run `sc` utility (SauceConnect) and wait for a tunnel initialization.
1. Run the tests using `npm run gemini`.
1. To collect new versions of the screenshots use `npm run gemini-gather`.

In case you write new tests for local usage, you can run your own Selenium Server or PhantomJS with WebDriver server. For this:

1. Install and run [selenium-server](http://docs.seleniumhq.org/download/) or [phantomjs](http://phantomjs.org/).
1. Correct `gridUrl` option to `http://localhost:4444/` in `.gemini.yml` file.
1. Run tests (see above).

Detailed description of `gemini` work with different types of backends find [here](https://bem.info/tools/testing/gemini/).

**NB** You have to commit screenshots to the repository from SauceLabs to avoid minor differencies in fonts rendering.

Befor commit some new or modified pattern you have to:

1. Check the validity. If in doubt, use Araxis Merge utility or something like this to see the difference between two versions of the pattern.
2. Compress them using [ImageOptim](http://imageoptim.com/) utility (this is the most effective tool for images compression for May 2014).

#### Tests for templates

Build tools for the library allow you to build and run tests on BEMHTML and BH
block templates.

To add a test for a block, you need to add a directory named `[block name].tmpl-specs` on your definition level. All test files will be stored in it.

Each test consists of a pair of files implemented in following technologies: BEMJSON and HTML. Each block could have more then one pair of such files. You could give any name to the file. But the file names (without extensions) within the one pair for one test must coincide. For example, **10-default**.bemjson.js and **10-default**.html.

For each block:
* BEMJSON file contains an example for a block;
* HTML file contains standard HTML-code – a block sample.

Block sample in HTML is a block implementation result that becomes available after applying a template to the BEMJSON example.

```
desktop.blocks
    └── myblocks
        ├── myblock.bemhtml.js
        ├── myblock.bh.js
        ├── ...
        └── myblock.tmpl-specs
            ├── 10-default.bemjson.js
            ├── 10-default.html
            ├── 20-advanced.bemjson.js
            └── 20-advanced.html
```

To run tests for templates use:

`enb make tmpl-specs` or `npm run test-tmpls`

To run tests for required definition level use:

`enb make tmpl-specs desktop.tmpl-specs`

To run tests for a specific block use:

`enb make tmpl-specs desktop.tmpl-specs/button`

If build procedure is successful, tests will be run automatically. After that you will see all test results.

If the result of applying the template does not match with the block sample in HTML, then you will see errors in the log with description of the difference from the block sample.

All tests will be run automatically using [Travis](https://travis-ci.org) for each pull request.
