BEM Components Library
======================
[![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://david-dm.org/bem/bem-components/dev-status.svg)](https://david-dm.org/bem/bem-components#info=devDependencies)

## What is this?

`bem-components` is a library of blocks that provides ready-made form controls and some other blocks.
The library contains base realizations of the blocks that are abstracted from the design. Few optional design themes are available.

* <a href="#content">Structure</a>
  * <a href="#levels">Levels</a>
  * <a href="#blocks">Blocks</a>
  * <a href="#techs">Technologies</a>
  * <a href="#tools">Tools</a>
  * <a href="#optimize">Optomizers</a>
  * <a href="#linters">Linters</a>
  * <a href="#autopref">Autoprefixer</a>
* <a href="#usage">Usage</a>
* <a href="#supported-browsers">Supported browsers</a>
* <a href="#migration">Migration</a>
* <a href="#changelog">Changelog</a>
* <a href="#maintain">Maintainers</a>
* <a href="#devprinciples">Development principles</a>
  * <a href="#supply">Delivery cases</a>
* <a href="#development">Development</a>
  * <a href="#working-copy">Working copy</a>
  * <a href="#how-to-contribute">How to contribute</a>
  * <a href="#modular-tests">Modular testing</a>
    * <a href="#unit-tests">JavaScript unit tests</a>
    * <a href="#regression-tests">Regression tests of layout</a>
    * <a href="#template-tests">Tests for templates</a>

<a name="content"></a>
## Structure

<a name="levels"></a>
### Levels

* `common.blocks` — support of any devices and browsers.
* `desktop.blocks` — support of desktop browsers.
* `touch.blocks` — implementation of some touch platforms specifics.

<a name="blocks"></a>
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
* [modal](common.blocks/modal/modal.en.md)
* [popup](common.blocks/popup/popup.en.md)
* [progressbar](common.blocks/progressbar/progressbar.en.md)
* [radio](common.blocks/radio/radio.en.md)
* [radio-group](common.blocks/radio-group/radio-group.en.md)
* [select](common.blocks/select/select.en.md)
* [spin](common.blocks/spin/spin.en.md)
* [textarea](common.blocks/textarea/textarea.en.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.en.md)

<a name="techs"></a>
### Technologies

* [JS](https://bem.info/technology/i-bem/current/i-bem-js/)
* [YModules](https://bem.info/tools/bem/modules/)
* [BEMHTML](https://bem.info/technology/bemhtml/current/reference/)
* [BH](https://bem.info/technology/bh/current/reference/)
* [BEMTREE](https://bem.info/technology/bemtree/current/bemtree/)
* [Stylus](https://learnboost.github.io/stylus/)

<a name="tools"></a>
### Tools

* [borschik](https://bem.info/tools/optimizers/borschik/)
* [bem-tools](https://bem.info/tools/bem/bem-tools/)
* [ENB](http://enb-make.info/)

<a name="optimize"></a>
### Optimizers

* [SVGO](https://bem.info/tools/optimizers/svgo/svgo/)
* [CleanCSS](http://www.cleancss.com/about.php)
* [ImageOptim](http://imageoptim.com/)

<a name="linters"></a>
### Linters

* [jshint](http://www.jshint.com/)
* [jscs](https://github.com/jscs-dev/node-jscs)

<a name="autopref"></a>
### Autoprefixer

* [Autoprefixer](https://github.com/ai/autoprefixer/)

<a name="usage"></a>
## Usage

You can use any way you are familiar with to include the library into your project.
For example, you can use [bem-tools](https://bem.info/tools/bem/bem-tools/) or [ENB](http://enb-make.info/). To connect the library to your project use the configuration file of the selected building tool.

If you use [project-stub](https://bem.info/tutorials/project-stub/) to start your project, you do not need to connect the library – it is connected by default.

<a name="supported-browsers"></a>
## Supported browsers

* Desktop:
  * Firefox 24+
  * Chrome last 2 versions
  * Safari last 2 versions
  * Opera 12.6+
  * Internet Explorer 10+
* Touch-pad:
  * Android 4+
  * iOS 5+
* Touch-phone:
  * Android 4+
  * iOS 6+
  * Internet Explorer 10+
*Touch:
  * Android 4+
  * iOS >=5
  * Internet Explorer 10+

<a name="changelog"></a>
## Changelog

Check the changelog details at the [Changelog](CHANGELOG.md) page.

<a name="migration"></a>
## Migration

Check the migration details at the [Migration](MIGRATION.md) page.

<a name="maintain"></a>
## Maintainers

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)

<a name="devprinciples"></a>
## Development principles

The base of all development principles of bem-components is the experience of our development team. For our library we take the best solutions from the past to create a new well-thought-out product called bem-components.

**Open source project**

[GitHub](https://github.com/bem/bem-components) is a platform for bem-components library development. We set all tasks, development raodmap and milestones using GitHub. Any developer could participate in the project: everyone could create an issue with some problems description or send a pull request with some code improvements.

**Automatization**

We try to automize all possible processes: a developer should not perform repetitive actions, there are robots for this.

**Bleeding edge**

We develop our library with a focus on the future: we supports only the latest [browsers](#supported-browsers) and tools. The library must not lose its relevance during the development process.

**Optimization**

We apply the optimization solutions for each block during the development to avoid the optimization of the already released code.

**Muli-themes support**

bem-components supports more then one theme simultaneously. For today the main theme of the library is `islands`. This theme implements the new Yandex design.

There is an additional temporary theme called `simple` in the library design. This theme was created to check the correct work of the library with more then one connected theme.

**Selectors in a theme context**

The library allows you to use different themes within a one page of the project. Besides, you could use native controls of your browser, for this do not use theme design in your project.

**Platforms support**

The library supports the following platforms: `desktop` and `touch` (mobile + tablet). All blocks of the library work correct on all available platforms.

<a name="supply"></a>
### Delivery cases

**Source**

Used for the technically identical projects that use the same preprocessor and template engine.

**Compiled**

Used for the projects that use any other preprocessor or do not use it at all.

**Library**

Used for the possibility to connect the library using links (like jQuery or Bootstrap).

<a name="development"></a>
## Development

<a name="working-copy"></a>
### Working copy

Get the source code:

```bash
$ git clone git://github.com/bem/bem-components.git
$ cd bem-components
```

Install the dependencies:

```bash
$ npm install
```
You need `export PATH=./node_modules/.bin:$PATH` or any alternative way to run locally-installed `ENB`.

Install all necessary libraries:

```bash
$ bower install
```

Build and run tests and examples:

```bash
$ npm run build-all
```

Run development server:

```bash
$ npm start
$ open http://localhost:8080/
```

Check the coding style:

```bash
$ npm run lint
```

<a name="how-to-contribute"></a>
### How to contribute

1. Create an [issue](https://github.com/bem/bem-components/issues/new) with a proper description.
1. Decide which version needs your changes.
1. Create a feature branch with an issue number and a version (`issues/<issue_number>@v<version_number>`) based on a version branch. For example, for an issue #42 and a version 2: `git checkout -b issues/42@v2`. If you need changes for several versions, each of them has to have a feature branch.
1. Commit changes (you can test your changes running `npm test`) and push. `Rebase` your branch on a corresponding version branch if needed.
1. Create a pull request from your feature branch; or several pull requests if you changed several versions.
1. Link your pull request with an issue number any way you like. For example, leave a [comment](https://github.com/blog/1506-closing-issues-via-pull-requests) with the issue number.
1. Wait for your pull request and the issue closes ;-)

<a name="modlar-tests"></a>
### Modular testing

<a name="unit-tests"></a>
#### JavaScript unit tests

To run JS unit tests use `npm run test-specs` command. You may also specify the target, e.g. `enb make specs desktop.specs/input` to run just `input` tests.

All tests will be run automatically using [Travis](https://travis-ci.org) on each pull request.

<a name="regression-tests"></a>
#### Regression tests of layout

We use [Gemini](https://github.com/bem/gemini) for layout testing.

Tests for each block are stored in a separate file `block-name.gemini.js` in a directory `gemini/`. All tests could be executed manually or automatically using [Travis](https://travis-ci.org). We use [SauceLabs](https://saucelabs.com) service as a [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2).

Use [OpenSauce](https://saucelabs.com/opensauce) account in SauceLabs and [Sauce Connect](https://saucelabs.com/connect) utility to run tests locally.

Developers of BEM team could use `bem-components` account (we do not publish login and password because of the limit for three concurrent browsers launch; it is much more efficiently to use different free accounts for manual testing).

For tests execution you need the following:

<a name="run-test"></a>
1. Set up environment variables (`SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`).
1. Run `sc` utility (SauceConnect) and wait for a tunnel initialization.
1. Run the tests using `npm run gemini`.
1. To collect new versions of the screenshots use `npm run gemini-gather`.

In case you write new tests for local usage, you can run your own Selenium Server or PhantomJS with WebDriver server. For this:

1. Install and run [selenium-server](http://docs.seleniumhq.org/download/) or [PhantomJS](http://phantomjs.org/).
1. Correct `gridUrl` option to `http://localhost:4444/` in `.gemini.yml` file.
1. [Run tests](#run-test).

Read a [detailed description](https://bem.info/tools/testing/gemini/) of `Gemini` work with different types of backends for additional information.

**NB** You have to commit screenshots to the repository from SauceLabs to avoid minor differences in fonts rendering.

Before commit some new or modified pattern you have to:

1. Check the validity. If in doubt, use Araxis Merge utility or something like this to see the difference between two versions of the pattern.
2. Compress them using [ImageOptim](http://imageoptim.com/) utility (this is the most effective tool for images compression for May 2014).

<a name="template-tests"></a>
#### Tests for templates

Build tools for the library allow you to build and run tests on BEMHTML and BH
block templates.

To add a test for a block, you need to add a directory named `[block name].tmpl-specs` on your definition level. All test files will be stored in it.

Each test consists of a pair of files implemented in following technologies: BEMJSON and HTML. Each block could have more then one pair of such files. You could give any name to the file. But the file names (without extensions) within the one pair for one test must coincide. For example, **10-default**.bemjson.js and **10-default**.html.

For each block:
* BEMJSON file contains an example for a block;
* HTML file contains standard HTML code – a block sample.

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

```bash
magic run tmpl-specs
```

To run tests for required definition level use:

```bash
magic make desktop.tmpl-specs
```

To run tests for a specific block use:

```bash
magic make desktop.tmpl-specs/button
```

If build procedure is successful, tests will be run automatically. After that you will see all test results.

If the result of applying the template does not match with the block sample in HTML, then you will see errors in the log with description of the difference from the block sample.

All tests will be run automatically using [Travis](https://travis-ci.org) for each pull request.

## License
Code and documentation copyright 2012 YANDEX LLC. Code released under the [Mozilla Public License 2.0](LICENSE.txt).
