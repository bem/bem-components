BEM Components Library
======================

[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)
[![Build Status](https://img.shields.io/travis/bem/bem-components/v2.svg?style=flat)](https://travis-ci.org/bem/bem-components)
[![Coverage Status](https://img.shields.io/coveralls/bem/bem-components/v2.svg?style=flat)](https://coveralls.io/r/bem/bem-components?branch=v2)
[![devDependency Status](https://img.shields.io/david/dev/bem/bem-components.svg?style=flat)](https://david-dm.org/bem/bem-components#info=devDependencies)

What is this?
-------------

BEM is an open-source library that provides a set of ready-made visual components (blocks) for creating web interfaces.

The library provides design themes. This version introduces the "islands" theme, which implements the new Yandex design. Features include supporting multiple themes at once, and creating new themes.

Contents
--------

-   <a href="#levels">Levels</a>
-   <a href="#blocks">Blocks</a>
-   <a href="#supported-browsers">Supported browsers</a>
-   <a href="#techs">Technologies</a>
-   <a href="#tools">Tools</a>
-   <a href="#usage">Usage</a>
-   <a href="#supply">Library distributions</a>
-   <a href="#development">Development</a>
-   <a href="#maintain">Maintainers</a>
-   <a href="#workflow">Workflow</a>

**Additional information**

-   [Changelog](/CHANGELOG.md)
-   [Migration to future versions](/MIGRATION.md)

<a name="levels"></a>

Levels
------

-   `common.blocks` — support of any devices and browsers.
-   `desktop.blocks` — support of desktop browsers.
-   `touch.blocks` — implementation of specific features for touch platforms.
-   `touch-phone.blocks` — implementation of specific features for smartphones.
-   `touch-pad.blocks` — implementation of specific features for tablets.
-   `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — implementation of various designs (themes).

<a name="blocks"></a>

Blocks
------

-   [attach](common.blocks/attach/attach.en.md)
-   [button](common.blocks/button/button.en.md)
-   [checkbox](common.blocks/checkbox/checkbox.en.md)
-   [checkbox-group](common.blocks/checkbox-group/checkbox-group.en.md)
-   [control](common.blocks/control/control.en.md)
-   [control-group](common.blocks/control-group/control-group.en.md)
-   [dropdown](common.blocks/dropdown/dropdown.en.md)
-   [icon](common.blocks/icon/icon.en.md)
-   [image](common.blocks/image/image.en.md)
-   [input](common.blocks/input/input.en.md)
-   [link](common.blocks/link/link.en.md)
-   [menu](common.blocks/menu/menu.en.md)
-   [menu-item](common.blocks/menu-item/menu-item.en.md)
-   [modal](common.blocks/modal/modal.en.md)
-   [popup](common.blocks/popup/popup.en.md)
-   [progressbar](common.blocks/progressbar/progressbar.en.md)
-   [radio](common.blocks/radio/radio.en.md)
-   [radio-group](common.blocks/radio-group/radio-group.en.md)
-   [select](common.blocks/select/select.en.md)
-   [spin](common.blocks/spin/spin.en.md)
-   [textarea](common.blocks/textarea/textarea.en.md)
-   [z-index-group](common.blocks/z-index-group/z-index-group.en.md)

<a name="supported-browsers"></a>

Supported browsers
------------------

-   **Desktop**
-   Firefox *(the last two stable versions)*
-   Chrome *(the last two stable versions)*
-   Safari *(the last two stable versions)*
-   Yandex *(the last two stable versions)*
-   Opera 12.6+
-   Internet Explorer 9+
-   [Partial support](#ie8) for Internet Explorer 8

-   **Touch**
-   Android 4+
-   iOS 5+
-   Internet Explorer 10+

<a name="ie8"></a>

### Support for Internet Explorer 8

To support Internet Explorer 8, you must add

-   [es5-shim](https://www.npmjs.com/package/es5-shim);
-   style files with the `*.ie.styl` extension to the page. To do this, specify them in the build config (see this [example](https://github.com/bem/bem-components/blob/1f218c8ba10183fda21660e28cfbb280cd8cde54/.enb/make.js#L174)) and add comments in the `page` section (see this [example](https://gist.github.com/innabelaya/904ab01666fd1a19d312)). You can also enable styles for Internet Explorer 8 at the template level.

<a name="techs"></a>

Technologies
------------

-   [YModules](https://en.bem.info/tools/bem/modules/)
-   [i-bem.js](https://en.bem.info/tutorials/bem-js-tutorial/)
-   [BEMHTML](https://en.bem.info/technology/bemhtml/current/reference/)
-   [BH](https://en.bem.info/technology/bh/current/about/)
-   [DEPS](https://en.bem.info/technology/deps/about/)
-   [Stylus](https://learnboost.github.io/stylus/)

<a name="tools"></a>

Tools
-----

**Assemblers**

-   [bem-tools](https://en.bem.info/tools/bem/bem-tools/)
-   [ENB](https://en.bem.info/tools/bem/enb-bem/)
-   [borschik](https://en.bem.info/tools/optimizers/borschik/)

**Optimizers**

-   [SVGO](https://en.bem.info/tools/optimizers/svgo/svgo/)
-   [CleanCSS](http://www.cleancss.com/about.php)
-   [ImageOptim](http://imageoptim.com/)

**Code analysis**

-   [jshint](http://www.jshint.com/)
-   [jscs](https://github.com/jscs-dev/node-jscs)

**Other**

-   [Autoprefixer](https://github.com/ai/autoprefixer/) — used during assembly to generate vendor prefixes for supported browsers based on the configuration.

<a name="usage"></a>

Usage
-----

Use [bem-tools](https://en.bem.info/tools/bem/bem-tools/) or [ENB](http://enb-make.info/) to connect the library to the project. Specify the library name and version in the configuration file for your chosen assembly tool.

For projects developed on [project-stub](https://en.bem.info/tutorials/project-stub/), the library is enabled by default.

<a name="supply"></a>

Library distributions
---------------------

**Source**

For technically identical services and projects that use a preprocessor and template engine listed in the [Tools](#tools) section.

**Compiled**

For services and projects that do not use a preprocessor or use one that is not listed in the [Tools](#tools) section.

**Library**

To include the library by linking to a page, similar to jQuery or Bootstrap.

To choose this method, execute `npm run dist` in the library root after setting up `npm` dependencies. As a result, bundles are generated in the `dist` folder.

<a name="development"></a>

Development
-----------

-   <a href="#working-copy">Working copy</a>
-   <a href="/CONTRIBUTING.md">How to contribute</a>
-   <a href="#modular-tests">Testing</a>
-   <a href="#unit-tests">JavaScript unit tests</a>
-   <a href="#regression-tests">Regression tests for layout</a>
-   <a href="#template-tests">Tests for templates</a>

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

-   Create a directory named `[block name].tmpl-specs` in the block's directory at the necessary level. Test files will be stored in this directory.
-   Create a pair of BEMJSON and HTML files for each test. The BEMJSON file contains an example for the block, and the HTML file contains the sample HTML code that should
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

Maintainers
-----------

-   [veged](https://github.com/veged)
-   [dfilatov](https://github.com/dfilatov)
-   [mishanga](https://github.com/mishanga)
-   [narqo](https://github.com/narqo)

<a name="workflow"></a>

Workflow
--------

Current tasks are listed on a special [Agile Board](https://waffle.io/bem/bem-components).

Task statuses:

-   **backlog** — Unsorted tasks that need to be discussed by the team to evaluate them and decide how to implement them. This status also applies to tasks that need additional information.
-   **ready** — Tasks that have been investigated and a decision has been made on how to implement them.
-   **in progress** — Tasks that have a specific assignee and are currently in progress.
-   **done** — Tasks that have been closed over the last seven days (this is a temporary technical limitation of our Agile Board).

License
-------

Code and documentation © 2012 YANDEX LLC. Code released under the [Mozilla Public License 2.0](LICENSE.txt).
