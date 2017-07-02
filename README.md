# BEM Components Library

`bem-components` is an open-source library that provides a set of ready-made visual components (blocks) for creating web interfaces.

The library provides design themes. This version introduces the `islands` theme, which implements the new Yandex design. Features include supporting multiple themes at once, and creating new themes.

[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)
[![Build Status](https://img.shields.io/travis/bem/bem-components/v2.svg?style=flat)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://img.shields.io/coveralls/bem/bem-components/v2.svg?style=flat)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://img.shields.io/david/dev/bem/bem-components.svg?style=flat)](https://david-dm.org/bem/bem-components#info=devDependencies)

## Contents

* [Levels](#levels)
* [Blocks](#blocks)
* [Supported browsers](#supported-browsers)
* [Technologies](#techs)
* [Tools](#tools)
* [Usage](#usage)
* [Development](#development)
* [Maintainers](#maintain)
* [Workflow](#workflow)

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

To support Internet Explorer 8, you must add:

* [es5-shim](https://www.npmjs.com/package/es5-shim);
* style files with the `*.ie.styl` extension to the page. To do this, specify them in the build config (see this [example](https://github.com/bem/bem-components/blob/1f218c8ba10183fda21660e28cfbb280cd8cde54/.enb/make.js#L174)) and add comments in the `page` section (see this [example](https://gist.github.com/godfreyd/b715d670bc09b9caf4c4adf44e6604a1)). You can also enable styles for Internet Explorer 8 at the template level.

<a name="techs"></a>
## Technologies

* [YModules](https://en.bem.info/tools/bem/modules/)
* [i-bem.js](https://en.bem.info/tutorials/bem-js-tutorial/)
* [BEMHTML](https://en.bem.info/technology/bemhtml/current/reference/)
* [BH](https://en.bem.info/technology/bh/current/about/)
* [DEPS](https://en.bem.info/technology/deps/about/)
* [PostCSS](http://postcss.org/)

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

There are several ways to start using `bem-components`.  The best approach depends on your project’s requirements and its compatibility with the [technologies](#techs) and [tools](#tools) of the library, as well as on your experience with BEM projects.

Choose the most suitable method for your project:

| Dist | Source | Compiled |
|---------|--------|----------|
| Pre-assembled CSS and JavaScript code and library templates. Integrated by linking to the page. Doesn't require assembly or compatibility with your project.| The full source code of the library. Requires assembly. Your project must be fully compatible with the library’s [technologies](#techs) and [tools](#tools). | The full source code of the library. Requires assembly. Differs from the Source method in that [PostCSS](#techs) is compiled into CSS. Suitable for projects where [PostCSS](http://postcss.org/) is not used. |

The way you are using the library determines how to integrate it into your project:

* [Integrating the library source code (Source and Compiled)](#source-compiled)
* [Integrating the pre-assembled library files (Dist)](#dist)

<a name="source-compiled"></a>
### Integrating the library source code (Source and Compiled)

We recommend using [ENB](http://enb-make.info/) or [bem-tools](https://ru.bem.info/tools/bem/bem-tools/) to integrate the library.

As an example, you can use [project-stub](https://ru.bem.info/tutorials/project-stub/), where the library is enabled by default. You can also create a project and use the [Yo generator](https://ru.bem.info/tools/bem/bem-stub/) to connect the library (this allows you to create the necessary project configuration).


<a name="dist"></a>
### Integrating the pre-assembled library files (Dist)

The easiest way to connect the library to the project is to download the pre-assembled library files and use `<link>` and `<script>` elements to add them to HTML pages. There are several ways to do this:

* [Connect files with CDN](#connecting-files-from-a-cdn) — This is the fastest way.
* [Download the archive](#loading-gzipped) — You can choose the desired build version.
* [Assemble the files from the source code](#assembling-files-from-the-source-code) — You can build an unreleased version of the library.
* [Install using Bower](#installation-using-bower)

For information about how to use the connected library files, see [Working with the library](#working-with-the-library-as-dist).

**Structure of the pre-assembled library**

There are separate sets of files available for three platforms:
* desktop
* touch-pad
* touch-phone

Each set includes:
* `bem-components.css` — Styles;
* `bem-components.ie.css` — Styles for IE8 ([more information](#support-for-internet-explorer-8));
* `bem-components.js` — JavaScript;
* `bem-components.bemhtml.js` — BEMHTML templates;
* `bem-components.bh.js` — BH templates;
* `bem-components.js+bemhtml.js` — Combines JavaScript code and BEMHTML templates for using templates in the browser;
* `bem-components.js+bh.js` — Combines JavaScript code and BH templates for using templates in the browser;
* `bem-components.no-autoinit.js` - JavaScript without automatic initialization.  Use it if you need to write your own code in `i-bem.js`;
* `bem-components.no-autoinit.js+bemhtml.js`;
* `bem-components.no-autoinit.js+bh.js`.

Each set also includes the development versions of the same files (preserving the original formatting and comments).

#### Connecting files from a CDN

The fastest and easiest way to connect the library to the project is to add the `<link>` and `<script>` elements to HTML pages:

```html
<link rel="stylesheet" href="https://yastatic.net/bem-components/latest/desktop/bem-components.css">
<script src="https://yastatic.net/bem-components/latest/desktop/bem-components.js+bemhtml.js"></script>
```

Pattern for connecting a file from the CDN: `//yastatic.net/library-name/version/platform/file-name`.

Example: `//yastatic.net/bem-components/latest/desktop/bem-components.dev.js+bemhtml.js`.

#### Loading gzipped

Select the appropriate library version and download the [archive](https://github.com/bem/bem-components-dist/releases). Unzip it.  Add the files to the page using `<link>` and `<script>` elements:

```html
<link rel="stylesheet" href="desktop/bem-components.css">
<script src="desktop/bem-components.js+bemhtml.js"></script>
```

#### Assembling files from the source code

The library code is on Github: [https://github.com/bem/bem-components](https://github.com/bem/bem-components).

To run the build, use these commands:

```
# Clone the library source code
git clone https://github.com/bem/bem-components.git
# Switch to the library folder
cd bem-components
# Install the required dependencies
npm install
# Build Dist
npm run dist
```

As a result of the build, the files will be available in the `bem-components-dist` folder.  Connect the files in the page's HTML:

```html
<link rel="stylesheet" href="bower_components/bem-components-dist/desktop/bem-components.css">
<script src="bower_components/bem-components-dist/desktop/bem-components.js+bemhtml.js"></script>
```

#### Installation using Bower

Provided [Bower](http://bower.io/) is already in your project, run the following command:

```
bower i bem/bem-components-dist
```

As a result of the build, the files will be available in the `bem-components-dist` folder.  Connect the files the same way as for the previous method:

```html
<link rel="stylesheet" href="bower_components/bem-components-dist/desktop/bem-components.css">
<script src="bower_components/bem-components-dist/desktop/bem-components.js+bemhtml.js"></script>
```

#### Working with the library as Dist

There are two steps to working with the library:

1. Find the right block on the library website: [bem.info](https://en.bem.info). For example, you can use [select](https://en.bem.info/libs/bem-components/v3.0.0/desktop/select/#mandatory-single-choice-list-mode-modifier-with-radio-value-1).
2. Get the necessary HTML.

The first step is always the same. The second step can be performed in three different ways, which you can combine as you wish:

**Method 1.** Copy the HTML from the example.  To do this, go to the `HTML` tab in the header of the example.

This is the easiest approach, but if templates are updated in future versions of the library, you will have to make the changes manually in each updated block.

**Method 2.** Use templating in the browser.  Assembling the `Dist` library includes pre-assembled BEMHTML and BH templates to choose from.

To do this, copy the sample BEMJSON code from the documentation and paste it into the page's HTML code.  Use the `BEMJSON` tab in the header of the example.

The page's HTML code will look like this:


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
modules.require(['i-bem__dom', 'BEMHTML', 'jquery', 'i-bem__dom_init'], function(BEMDOM, BEMHTML, $, init) {
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
    
    // NOTE: explicitly call `init();` if you need to initialize blocks from HTML markup
});
</script>
</body>
</html>
```

In contrast to the first method, this code won't require any changes to the markup when the library is updated to a new version.  However, client-generated markup might not be indexed as well by search engines.

**Method 3**. Execute `{BEMHTML,BH}.apply()` in Node.js and give the browser the prepared HTML:

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
}); // returns HTML line
```

### Library concepts

#### The block and its states

The library consists of blocks, which you can see represented visually in the [`bem-components` showcase](https://ru.bem.info/libs/bem-components/current/showcase/).  Blocks have states that determine the behavioral model.  A block’s state is expressed through modifiers and specialized fields.  Changing a modifier creates an event that can be used for working with the block.

There is no need to create a special BEM event if you can work with the modifier change event.  Depending on what is used for changing a component’s state (a modifier or a field), different events are used:

* To respond to changing the "state" of `value` fields, the `change` event is used.
* To respond to setting or removing a modifier, various modifier change events are used.

#### Controls in `bem-components`

The controls in `bem-components` can be used as the basis for creating other library components.  Such controls don't have models as in HTML, and they can be used for tasks that don't require the semantics of a specific HTML model.

As an example, think of the "behavioral model" for the [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), which is a higher-level interface designed specifically for editing data.  What is different about `bem-components` blocks is that they can be used as the basis of a block in another library that will solve the same problem.  But along with that, they can serve other purposes in the interface that don't require `HTML input` semantics.

#### Implementation details

##### `focused` modifier

Controls in bem-components have two types of focus, which are set using the modifiers `focused` and `focused-hard`.  The type of focus determines the appearance of the control.

The modifier is chosen automatically based on how the focus is set:
* `focused` — Set for a mouse click on the control.
* `focused-hard` — Set when the control is selected using the keyboard or through JavaScript.  It highlights the component more obviously when it gets the focus.  For example, in the `Islands` theme, most of the controls get an extra border when `focused-hard` is set.

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
4.  Launch the `sc` utility (SauceConnect) and wait for the tunnel to be opened.
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
* [tadatuta](https://github.com/tadatuta)

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
