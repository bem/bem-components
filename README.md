# BEM Components Library [![Build Status](https://travis-ci.org/bem/bem-components.svg?branch=v2)](https://travis-ci.org/bem/bem-components) [![Coverage Status](https://coveralls.io/repos/bem/bem-components/badge.png?branch=v2)](https://coveralls.io/r/bem/bem-components?branch=v2)

## What is this?

`bem-components` is a library of blocks that provides ready made form controls and some other blocks.
It contains base realizations of blocks that are abstracted from the design. Few optional design themes are available.

## Usage

You can use any way you are familiar with to include this library into your project.
E.g. you can use [bem-tools](http://bem.info/tools/bem/bem-tools/) or `ENB`. For this add name, version and path to the library to the configuration file of selected assembler.

If you use [project-stub](http://bem.info/tutorials/project-stub/) as a base of your project, you do not need to include `bem-components` manually. It is added to the project by default.

<a name="supported-browsers"></a>

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

* `common.blocks` — suited for any devices and browsers.
* `desktop.blocks` — should be used for desktop browsers.
* `touch.blocks` — implement some touch platforms specifics.

### Blocks

* [attach](common.blocks/attach/attach.en.md)
* [control](common.blocks/control/control.en.md)
* [control-group](common.blocks/control-group/control-group.en.md)
* [input](common.blocks/input/input.en.md)
* [button](common.blocks/button/button.en.md)
* [checkbox](common.blocks/checkbox/checkbox.en.md)
* [checkbox-group](common.blocks/checkbox-group/checkbox-group.en.md)
* [icon](common.blocks/icon/icon.en.md)
* [image](common.blocks/image/image.en.md)
* [input](common.blocks/input/input.en.md)
* [spin](common.blocks/spin/spin.en.md)
* [dropdown](common.blocks/dropdown/dropdown.en.md)
* [link](common.blocks/link/link.en.md)
* [menu-item](common.blocks/menu-item/menu-item.en.md)
* [menu](common.blocks/menu/menu.en.md)
* [popup](common.blocks/popup/popup.en.md)
* [radio-group](common.blocks/radio-group/radio-group.en.md)
* [radio](common.blocks/radio/radio.en.md)
* [z-index-group](common.blocks/z-index-group/z-index-group.en.md)

### Technologies

* [i-bem.js](https://bem.info/technology/i-bem/current/i-bem-js/)
* [YModules](https://bem.info/tools/bem/modules/)
* [BEMHTML](https://bem.info/technology/bemhtml/current/reference/)
* [BH](http://bem.info/technology/bh/)
* [BEMTREE](https://bem.info/technology/bemtree/current/bemtree/)
* [Stylus](https://learnboost.github.io/stylus/)

### Tools

* [borschik](http://bem.info/tools/optimizers/borschik/)
* [bem-tools](http://bem.info/tools/bem/bem-tools/)
* [ENB](http://enb-make.info/)

### Optimisers

* [svgo](https://github.com/svg/svgo)
* [clean-css](http://www.cleancss.com/about.php)
* [ImageOptim](http://imageoptim.com/)

### Linters

* [jshint](http://www.jshint.com/)
* [jscs](https://github.com/jscs-dev/node-jscs)

### Autoprefixer

* [Autoprefixer](https://github.com/ai/autoprefixer/)

It is applied during build procedure to generate vendor-specific prefixes for supported browsers based on the configuration.

## Changelog

You can check a changelog at the [changelog page](CHANGELOG.md).

## Migration

You can check a migration guide [here](MIGRATION.md).

## Maintainers

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)

## Development principles

The principles of `bem-components` development is based on our experience in internal libaries development. We want to take the best from the previous libraries and do not repeat the weak points.

**Open source project**

We develop the library on [GitHub](https://github.com/bem/bem-components). Here, you can track all issues, milestones and roadmap or send pull requests with corrections or your own code.

**Automatization**

We automatize all possible processes: a developer should not repeat any actions more then once, we have robots for this.

**Bleeding edge**

We develop `bem-components` to be relevant for future purposes: for the latest [browsers versions](#supported-browsers) and the newest tools. The library should not lose its relevance during the development process.

**Optimization**

We investigate the optimization solutions for each block and implement them during development process.

**Selectors within a theme context**

In your project, you can create new or add existing themes for the blocks. You can mix different block themes on one page. It is also possible to completely eliminate the theme usage in your project. In this case all blocks will be represented as native browser controls that already have templates and JavaScript implementation.

**Support of several themes**

The library provides simultaneous support of the different themes. Now the main theme of `bem-components` is `normal` theme. It implements a new Yandex services design. The library has additional theme called `simple`. It is an auxiliary theme that is developed to control the correct work of the library with more then one implemented theme design.

**Support of platforms**

The library provides support of the following platforms: `desktop`, `touch` and `mobile`. All blocks of the library are developed to have a correct representation and behavior on all platform types.

### Delivery types of the library

The library could be delivered:

* **Source**

as a **source** code for technically identical services that uses the same preprocessor and template engine.

* **Compiled**

as a **compiled** version for services that use the other preprocessor or do not use any one at all.

* **Library**

as a complete **library** like Bootstrap or jQuery to provide the ability to include the library into your project by links.

## Development

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

You need `export PATH=./node_modules/.bin:$PATH` or any alternative way to run locally installed `ENB`.

Install all necessary libraries:

```bash
$ bower install
```

Build and run tests and examples:

```bash
$ npm run build-all
```

Run a development server:

```bash
$ enb server
```

Check the code style:

```bash
$ npm run lint
```

### How to contribute

1. Create an [issue](https://github.com/bem/bem-components/issues/new) with a proper description.
1. Decide which version needs your changes.
1. Create a feature branch with an issue number and a version (`issues/<issue_number>@v<version_number>`) based on a version branch. For example, for an issue #42 and a version 2: `git checkout -b issues/42@v2`. If you want to make changes for several versions, you must create a feature branch for each version.
1. Commit changes (you can test your changes with `npm test`) and push. `Rebase` your branch on a corresponding version branch if needed.
1. Create a pull request from your feature branch. If you changed several versions, do not forget to create several pull requests.
1. Link your pull request with an issue number any way you like. For example, leave a [comment](https://github.com/blog/1506-closing-issues-via-pull-requests) with the issue number.
1. Wait until your pull request and the issue will be closed ;-)

### Modular testing

#### JavaScript unit tests

To run JS unit tests use `npm run test-specs` command. You could also specify the target, e.g. `enb make specs desktop.specs/input` to run just `input` tests.

All tests will run automatically by [Travis](https://travis-ci.org) on each pull request.

#### Regression tests of layout

We use [gemini](https://github.com/bem/gemini) for layout tests.

Tests for each block are stored in a separate file `block-name.gemini.js` in a directory `gemini/`. All tests could be executed manually or automatically using [Travis](https://travis-ci.org). We use [SauceLabs](https://saucelabs.com) service as a [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2).

Use [OpenSauce](https://saucelabs.com/opensauce) account in SauceLabs and [Sauce Connect](https://saucelabs.com/connect) utility to run tests locally.

BEM developers could use `bem-components` account. We do not publish login and password because of the limit for three concurrent browsers launch. It is much more efficiently to use different free accounts for manual testing.

For tests execution you need the following:

1. Set up environment variables (`SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`).
1. Run `sc` utility (SauceConnect) and wait for a tunnel initialization.
1. Run the tests using `npm run gemini`.
1. To collect new versions of the screenshots use `npm run gemini-gather`.

In case you write new tests for local usage, you can run your own Selenium Server or PhantomJS with WebDriver server. For this:

1. Install and run [selenium-server](http://docs.seleniumhq.org/download/) or [phantomjs](http://phantomjs.org/).
1. Correct `gridUrl` option to `http://localhost:4444/` in `.gemini.yml` file.
1. Run the tests (see above).

Detailed description of `gemini` work with different types of backends find [here](https://bem.info/tools/testing/gemini/).

**NB** You must commit screenshots to the repository from SauceLabs to avoid minor differences in fonts rendering.

Before you commit some new or modified pattern, you have to:

1. Check validity. If in doubt, use Araxis Merge utility or something like this to see the difference between two versions of the pattern.
2. Compress them with [ImageOptim](http://imageoptim.com/) utility (this is the most effective tool for images compression for May 2014).

#### Tests for templates

Build tools for the library allow you to build and run tests on BEMHTML and BH
block templates.

To add a test for a block, you need to add a directory named `[block name].tmpl-specs` on your definition level. All test files will be stored in it.

Each test consists of a pair of files implemented in following technologies: BEMJSON and HTML. Each block could have more then one pair of such files. You could give any name to the file. But the file names (without extensions) within the one pair for one test must coincide. For example, **10-default**.bemjson.js and **10-default**.html.

For each block:

* BEMJSON file contains an example for a block.
* HTML file contains standard HTML-code – a block sample.

A block sample in HTML is a block implementation result that becomes available after a template application to a BEMJSON example.

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

If build procedure is successful, tests will run automatically. After that you will see all test results.

If the result of the template application does not match the block sample in HTML, you will see errors in the log with description of the difference from the block sample.

All tests will run automatically by [Travis](https://travis-ci.org) for each pull request.
