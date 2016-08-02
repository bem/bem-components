# BEM Components Library

[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)
[![Build Status](https://img.shields.io/travis/bem/bem-components/v2.svg?style=flat)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://img.shields.io/coveralls/bem/bem-components/v2.svg?style=flat)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://img.shields.io/david/dev/bem/bem-components.svg?style=flat)](https://david-dm.org/bem/bem-components#info=devDependencies)

## What is this?

BEM is an open-source library that provides a set of ready-made visual components (blocks) for creating web interfaces.

The library provides design themes. This version introduces the "islands" theme, which implements the new Yandex design. Features include supporting multiple themes at once, and creating new themes.

## Contents

* <a href="#levels">Levels</a>
* <a href="#blocks">Blocks</a>
* <a href="#supported-browsers">Supported browsers</a>
* <a href="#techs">Technologies</a>
* <a href="#tools">Tools</a>
* <a href="#usage">Usage</a>
* <a href="#development">Development</a>
* <a href="#maintain">Maintainers</a>
* <a href="#workflow">Workflow</a>

**Additional information**

* [Changelog](/CHANGELOG.md)
* [Migration to future versions](/MIGRATION.md)

<a name="levels"></a>

## Levels

* `common.blocks` — support of any devices and browsers.
* `desktop.blocks` — support of desktop browsers.
* `touch.blocks` — implementation of specific features for touch platforms.
* `touch-phone.blocks` — implementation of specific features for smartphones.
* `touch-pad.blocks` — implementation of specific features for tablets.
* `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — implementation of various designs (themes).

<a name="blocks"></a>

## Blocks

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

<a name="supported-browsers"></a>

## Supported browsers

* **Desktop**
  * Firefox *(the last two stable versions)*
  * Chrome *(the last two stable versions)*
  * Safari *(the last two stable versions)*
  * Yandex *(the last two stable versions)*
  * Opera 12.6+
  * Internet Explorer 9+
  * [Partial support](#ie8) for Internet Explorer 8

* **Touch**
  * Android 4+
  * iOS 5+
  * Internet Explorer 10+

<a name="ie8"></a>

### Support for Internet Explorer 8

To support Internet Explorer 8, you must add

* [es5-shim](https://www.npmjs.com/package/es5-shim);
* style files with the `*.ie.styl` extension to the page. To do this, specify them in the build config (see this [example](https://github.com/bem/bem-components/blob/1f218c8ba10183fda21660e28cfbb280cd8cde54/.enb/make.js#L174)) and add comments in the `page` section (see this [example](https://gist.github.com/innabelaya/904ab01666fd1a19d312)). You can also enable styles for Internet Explorer 8 at the template level.

<a name="techs"></a>

## Technologies

* [YModules](https://en.bem.info/tools/bem/modules/)
* [i-bem.js](https://en.bem.info/tutorials/bem-js-tutorial/)
* [BEMHTML](https://en.bem.info/technology/bemhtml/current/reference/)
* [BH](https://en.bem.info/technology/bh/current/about/)
* [DEPS](https://en.bem.info/technology/deps/about/)
* [Stylus](https://learnboost.github.io/stylus/)

<a name="tools"></a>

## Tools

**Assemblers**

* [bem-tools](https://en.bem.info/tools/bem/bem-tools/)
* [ENB](https://en.bem.info/tools/bem/enb-bem/)
* [borschik](https://en.bem.info/tools/optimizers/borschik/)

**Optimizers**

* [SVGO](https://en.bem.info/tools/optimizers/svgo/svgo/)
* [CleanCSS](http://www.cleancss.com/about.php)
* [ImageOptim](http://imageoptim.com/)

**Code analysis**

* [jshint](http://www.jshint.com/)
* [jscs](https://github.com/jscs-dev/node-jscs)

**Other**

* [Autoprefixer](https://github.com/ai/autoprefixer/) — used during assembly to generate vendor prefixes for supported browsers based on the configuration.

<a name="usage"></a>

## Usage

There are several ways to start work with `bem-components`. The choice of an appropriate way of using depends on the projects' requirements and its compatibility with [the technologies](#techs) and [tools](#tools) of the library, as well as on your experience with BEM projects.

Choose the most suitable method of delivery for your project:

| Dist | Source | Compiled |
|---------|--------|----------|
|Pre-assembled CSS- and JavaScript code and templates of library. It connects to the page by means of links. It does not require assembly and compatibility with your project.| The full source code of the library. To use pre-assembly is required. Requires full project's compatibility with [the technologies](#techs) and [tools](#tools) of the library.| The full source code of the library. To use pre-assembly is required. It differs from the «Source» method, here [Stylus](#techs) is compiled into CSS. It's suitable for projects where [Stylus](https://learnboost.github.io/stylus/) is not used. |

The way of library using defines the order of it connection to the project:

* [The source code library's connection (Source и Compiled)](#source-compiled)
* [Connection of pre-assembled library files (Dist)](#dist)

<a name="source-compiled"></a>
### The source code library's connection (Source и Compiled)

Recommended method of connection is the use of tools [ENB](http://enb-make.info/) or [bem-tools](https://ru.bem.info/tools/bem/bem-tools/).

Use [project-stub](https://en.bem.info/platform/project-stub/), as an example, where the library is activated by default. You can also create a project and connect it to the library using the Yo generator, which allows you to create the necessary project configuration.


<a name="dist"></a>
### Connection of pre-assembled library files (Dist)

The easiest way to connect the library to the project is to download pre-built library files and add them to HTML pages using the `<link>` and`<script>` elements. There are several ways to do it:

* [Connect files with CDN](#files-scheme-connection-with-cdn) — is the fastest way.
* [Download the archive](#loading-gzipped) — ability to choose correct build version.
* [To gather files from the sourse code](#files-collecting-from-the-sourse-code) — ability to build an unreleased version of the library.
* [To install using Bower](#installation-using-bower)

To use connected library files, see [Work with library](#work-with-library).

**Composition of pre-assembled library**

Separate sets' files for three platforms are available:
* desktop
* touch-pad
* touch-phone

Each set includes:
* `bem-components.css` — styles
* `bem-components.ie.css` — styles for IE8 ([read more](#support-for-internet-explorer-8))
* `bem-components.js` — JavaScript
* `bem-components.bemhtml.js` — BEMHTML-templates
* `bem-components.bh.js` — BH-templates
* `bem-components.js+bemhtml.js` — joining JavaScript code and BEMHTML-templates to use templates in the browser
* `bem-components.js+bh.js` — joining JavaScript code and BH-templates to use templates in the browser
* bem-components.no-autoinit.js - JavaScript without automatic initialization.
* bem-components.no-autoinit.js+bemhtml.js
* bem-components.no-autoinit.js+bh.js

Each kit includes similar dev-versions (saving original formatting
and comments).

#### File's scheme connection with CDN

The fastest and easiest way to connect the library to the project is to add the `<link>` and `<script>` elements to HTML pages:

```html
<link rel="stylesheet" href="https://yastatic.net/bem-components/latest/desktop/bem-components.css">
<script src="https://yastatic.net/bem-components/latest/desktop/bem-components.js+bemhtml.js"></script>
```

File's scheme connection with CDN: `//yastatic.net/library-name/version/platform/file-name`.

Example: `//yastatic.net/bem-components/latest/desktop/bem-components.dev.js+bemhtml.js`.

#### Loading gzipped

Select the necessary library version and download the archive. Unzip it. Add files to the page using the `<link>` and `<script>` elements.

```html
<link rel="stylesheet" href="desktop/bem-components.css">
<script src="desktop/bem-components.js+bemhtml.js"></script>
```

#### Files collecting from the sourse code

The library code is on Github: [https://github.com/bem/bem-components](https://github.com/bem/bem-components).

To build follow the commands:

```
# Clone sourse code of the library
git clone https://github.com/bem/bem-components.git
# Go to the library folder
cd bem-components
# Install required dependencies
npm install
# Gather Dist
npm run dist
```

As a result files will be available in the `bem-components-dist` folder.  Connect  files to HTML page:

```html
<link rel="stylesheet" href="bower_components/bem-components-dist/desktop/bem-components.css">
<script src="bower_components/bem-components-dist/desktop/bem-components.js+bemhtml.js"></script>
```

#### Installation using Bower

Provided [Bower](http://bower.io/) is already in your project, run the following command:

```
bower i bem/bem-components-dist
```

As a result files will be available in a `bem-components-dist` folder. The connection doesn't differ from the previous method:

```html
<link rel="stylesheet" href="bower_components/bem-components-dist/desktop/bem-components.css">
<script src="bower_components/bem-components-dist/desktop/bem-components.js+bemhtml.js"></script>
```

#### Work with library in Dist form

Work with library can be organized into two steps:

1. To find  the right block on the library website: [bem.info](https://en.bem.info). For example, [select](https://en.bem.info/libs/bem-components/v3.0.0/desktop/select/#mandatory-single-choice-list-mode-modifier-with-radio-value-1).
2. To the necessary HTML.

The first step is always the same. The second is performed in three different ways which can be randomly combined:

**1 method.** To copy HTML from the example. To do this, go to `HTML` tab in the header of the example.

This option is the easiest, but while upgrading templates in the future versions of the library changes into each updated block will be required to do manually.

**2 method.** To use templating in the browser. Assembly of `Dist` library includes pre-assembled BEMHTML and BH  templates at option.

To do this, copy BEMJSON code from the documentation and paste into HTML page. Use the tab `BEMJSON` in the header of the example.

The HTML page would be like:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>bem-components as a library</title>
    <link rel="stylesheet" href="https://yastatic.net/bem-components/latest/desktop/bem-components.css">
</head>
<body class="page page_theme_islands">
    <form class="form" action="/"></form>
<script src="https://yastatic.net/bem-components/latest/desktop/bem-components.no-autoinit.js+bemhtml.js"></script>
<script>
modules.require(['i-bem__dom', 'BEMHTML', 'jquery'], function(BEMDOM, BEMHTML, $) {
    var html = BEMHTML.apply({
        block : 'select',
        mods : { mode : 'check', theme : 'islands', size : 'm' },
        name : 'select1',
        val : [2, 3],
        text : 'Conference programme',
        options : [
            { val : 1, text : 'Report' },
            { val : 2, text : 'Master class' },
            { val : 3, text : 'Round Table' }
        ]
    });

    BEMDOM.append($('.form'), html);
});
</script>
</body>
</html>
```

To update library to a new version this code won't require any changes in markup, like the first method. However, the client-driven markup may be indexed worse by search engines.

**3 Method.** Execute `{BEMHTML,BH}.apply()` in Node.js and give browser ready HTML:

```js
var BEMHTML = require('./dist/desktop/bem-components.bemhtml.js').BEMHTML;

BEMHTML.apply({
    block : 'select',
    mods : { mode : 'check', theme : 'islands', size : 'm' },
    name : 'select1',
    val : [2, 3],
    text : 'Conference programme',
    options : [
        { val : 1, text : 'Report' },
        { val : 2, text : 'Master class' },
        { val : 3, text : 'Round Table' }
    ]
}); // return HTML line
```

### Library’s principles understanding

#### The block and it conditions

The library consists of blocks, a visual representation of which can be seen on [`bem-components` display](https://en.bem.info/libs/bem-components/v3.0.0/showcase/). The blocks have states that determine its behavioral model. The block’s state is expressed through the modifiers and specialized fields. Modifier’s changing creates an event which can be used to operate with block.

There is no need to create special additional BEM event, if you have opportunity to work with event to change the modifier. Depending on that by means of what component’s state changes (modifier or field), different events are used:

* To respond on changes of `value` fields «status» event `change` is used.
* To respond on installing/removing modifier different events to change the modifier are used.

#### Controls in `bem-components`

Controls in `bem-components` can be used as the base part for creating other components of the libraries. Such controls have no models, as in HTML, and can be used for tasks that don't require the semantics of specific HTML model.

Let’s consider «behavioral model» of [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), which is a higher-level interface, specifically designed to edit data. Blocks of `bem-components` are characterized by the fact that they can be used as the basic part of another library which will solve the same problem. But along with that, they can solve other interface problems which can be used without semantics of an `HTML input`.

#### Particularities of implementation

##### The `focused` modifier

Controls in `bem-components` have two types of focus which are set by modifiers `focused` and `focused-hard`. Type of focus defines the appearance of control.

The choice of modifier occurs automatically, depending on the method of setting the focus:
* `focused` —  set when you click on control by mouse cursor.
* `focused-hard` — set in during transition to control with the keyboard or through JavaScript. Created for a more explicit highlighting of the component when it receives focus. For example, in the theme of islands most of controls get an extra border when you install the modifier `focused-hard`.

<a name="development"></a>

## Development

* <a href="#working-copy">Working copy</a>
* <a href="/CONTRIBUTING.md">How to contribute</a>
* <a href="#modular-tests">Testing</a>
  * <a href="#unit-tests">JavaScript unit tests</a>
  * <a href="#regression-tests">Regression tests for layout</a>
  * <a href="#template-tests">Tests for templates</a>

<a name="working-copy"></a>

### Working copy

Get sources:

``` bash
$ git clone git://github.com/bem/bem-components.git
$ cd bem-components
```

Install dependencies (of tools):

``` bash
$ npm install
```

To then run locally installed tools, use `export PATH=./node_modules/.bin:$PATH` or any alternative method.

Install dependent libraries:

``` bash
$ bower install
```

Build examples and tests:

``` bash
$ npm run build-all
```

Start the development server:

``` bash
$ npm start
$ open http://localhost:8080/
```

**Note:** For information about assembling individual blocks, see the section [Tests for templates](#template-tests).

Code analysis:

``` bash
$ npm run lint
```

<a name="modular-tests"></a>

### Testing

<a name="unit-tests"></a>

#### JavaScript unit tests

The `npm run test-specs` command launches unit tests on JS.

To launch point-based assembly, use the command `enb make specs desktop.specs/<block-name>` (for example, `enb make specs desktop.specs/input`).

Tests will be run automatically on [Travis](https://travis-ci.org) for each pull request.

<a name="regression-tests"></a>

#### Regression tests for layout

[Gemini](https://en.bem.info/tools/testing/gemini/) is used for layout testing.

Tests for each block are stored in a separate `block-name.gemini.js` file in the `gemini/` directory. Locally, test are executed manually. On Travis, tests are executed automatically. For [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2), the [SauceLabs](https://saucelabs.com) service is used.

<a name="run-test"></a>
For executing tests locally, you need to:

1.  Create an [OpenSauce](https://saucelabs.com/opensauce) account in SauceLabs.
2.  Install the [Sauce Connect](https://saucelabs.com/connect) utility.
3.  Set up environment variables (`SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`).
4.  Launch the `src` utility (SauceConnect) and wait for the tunnel to be opened.
5.  Run the tests using `npm run gemini`.
6.  If you need to make new versions of screenshots, use the command `npm run gemini-gather`.

When developing new tests to speed up local execution:

1.  Install and run [Selenium Server](http://docs.seleniumhq.org/download/) or [PhantomJS](http://phantomjs.org/).
2.  In the `.gemini.yml` file, change the `gridUrl` option to `http://localhost:4444/`.
3.  [Run the tests](#run-test).

For more information about using `Gemini` with various backends, read the article [Gemini quick start](https://en.bem.info/tools/testing/gemini/).

**Note:** You need to save screenshots from SauceLabs in the repository. This helps to avoid discrepancies when rendering fonts.

Before commiting new or modified reference images, you must:

1.  Make sure the images are correct. To find differences between the old and new versions, use the Araxis Merge utility or something similar.
2.  Use [ImageOptim](http://imageoptim.com/) to compress the images (this is the most effective tool for compressing images as of May, 2014).

<a name="template-tests"></a>

#### Tests for templates

Build tools for the library allow you to build and run tests on BEMHTML and BH block templates.

**Add a test for a block**

* Create a directory named `[block name].tmpl-specs` in the block's directory at the necessary level. Test files will be stored in this directory.
* Create a pair of BEMJSON and HTML files for each test. The BEMJSON file contains an example for the block, and the HTML file contains the sample HTML code that should
    result after applying the block template to the BEMJSON example.
    File names must match (other than the extensions)
    for the same test. For example, **10-default**.bemjson.js and **10-default**.html.

Multiple tests can be written for a block and, accordingly, each test consists of two files (BEMJSON and HTML) with the same name.

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

To build and run tests, use:

``` bash
magic run tmpl-specs
```

To build tests on the required definition level, use:

``` bash
magic make desktop.tmpl-specs
```

To build tests only for a specific block, use:

``` bash
magic make desktop.tmpl-specs/button
```

If the build procedure is successful, tests are run automatically, and you will see all test results. If the result of applying
the template does not match with the block sample in HTML, you will see an error in the log indicating how it differs from the block sample.

All tests are run automatically using [Travis](https://travis-ci.org) on each pull request.

<a name="maintain"></a>

## Maintainers

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [mishanga](https://github.com/mishanga)
* [narqo](https://github.com/narqo)

<a name="workflow"></a>

## Workflow

Current tasks are listed on a special [Agile Board](https://waffle.io/bem/bem-components).

Task statuses:

* **backlog** — Unsorted tasks that need to be discussed by the team to evaluate them and decide how to implement them. This status also applies to tasks that need additional information.
* **ready** — Tasks that have been investigated and a decision has been made on how to implement them.
* **in progress** — Tasks that have a specific assignee and are currently in progress.
* **done** — Tasks that have been closed over the last seven days (this is a temporary technical limitation of our Agile Board).

## License

Code and documentation © 2012 YANDEX LLC. Code released under the [Mozilla Public License 2.0](LICENSE.txt).
