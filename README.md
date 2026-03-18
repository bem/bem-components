# BEM Components Library

`bem-components` is an open-source library that provides a set of ready-made visual components ([blocks](https://en.bem.info/methodology/key-concepts/#block)) for creating web interfaces.

The library provides design themes. This version introduces the `islands` theme, which implements the new Yandex design. Features include supporting multiple themes at once, and creating new themes.

[![GitHub Release](https://img.shields.io/github/release/bem/bem-components.svg?style=flat)](https://github.com/bem/bem-components/releases)

## Contents

* [Levels](#levels)
* [Blocks](#blocks)
* [Supported browsers](#supported-browsers)
* [Technologies](#technologies)
* [Tools](#tools)
* [Usage](#usage)
* [Development](#development)
* [Maintainers](#maintainers)
* [Workflow](#workflow)

**Additional information**

* [Changelog](./CHANGELOG.md)
* [Migration to future versions](./MIGRATION.md)

## Levels

* `common.blocks` — support of any devices and browsers.
* `desktop.blocks` — support of desktop browsers.
* `touch.blocks` — implementation of specific features for touch platforms.
* `touch-phone.blocks` — implementation of specific features for smartphones.
* `touch-pad.blocks` — implementation of specific features for tablets.
* `design/<common|desktop|touch|touch-phone|touch-pad>.blocks` — implementation of various designs (themes).

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

## Supported browsers

* **Desktop**
  * Firefox *(the last two stable versions)*
  * Chrome *(the last two stable versions)*
  * Safari *(the last two stable versions)*
  * Yandex *(the last two stable versions)*

* **Touch**
  * Android 5+
  * iOS 12+


## Technologies

* [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [i-bem.js](https://en.bem.info/tutorials/bem-js-tutorial/)
* [BEMHTML](https://en.bem.info/technology/bemhtml/current/reference/)
* [DEPS](https://en.bem.info/technology/deps/about/)
* [PostCSS](http://postcss.org/)

## Tools

**Build**

* [Vite](https://vite.dev/) — build tool and dev server
* [PostCSS](http://postcss.org/) — CSS processing (via Vite)
* [Autoprefixer](https://github.com/ai/autoprefixer/) — vendor prefixes

**Code analysis**

* [ESLint 10](https://eslint.org/) — JavaScript linting

**Testing**

* [Playwright](https://playwright.dev/) — browser regression testing

## Usage

### Installation

```bash
npm install bem-components
```

**Requirements:** Node.js >= 20

**Peer dependencies:**
* `bem-core` ^5.0.0
* `jquery` ^4.0.0

### Building from source

```bash
git clone https://github.com/bem/bem-components.git
cd bem-components
npm install
npm run build
```

The build produces output for three platforms in the `dist/` directory:
* `dist/desktop/`
* `dist/touch-pad/`
* `dist/touch-phone/`

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

## Development

* [Working copy](#working-copy)
* [How to contribute](./CONTRIBUTING.md)
* [Testing](#testing)

### Working copy

Get sources:

```bash
git clone git://github.com/bem/bem-components.git
cd bem-components
```

Install dependencies:

```bash
npm install
```

Build all platforms:

```bash
npm run build
```

Start the development server:

```bash
npm run dev
```

Code analysis:

```bash
npm run lint
```

### Testing

#### Browser regression tests

[Playwright](https://playwright.dev/) is used for browser testing.

```bash
npm run test:browser        # run tests headless
npm run test:browser:ui     # run tests with Playwright UI
```

#### Run all checks

```bash
npm test                    # runs lint + test:browser
```

Tests are run automatically on GitHub Actions for each pull request.

## Maintainers

* [veged](https://github.com/veged)
* [dfilatov](https://github.com/dfilatov)
* [tadatuta](https://github.com/tadatuta)

## Workflow

Current tasks are tracked via [GitHub Issues](https://github.com/bem/bem-components/issues).

## License

Code and documentation © 2012 YANDEX LLC. Code released under the [Mozilla Public License 2.0](LICENSE.txt).
