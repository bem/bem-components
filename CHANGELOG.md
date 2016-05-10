# Changelog

## 3.0.0

### Breaking changes
* [bem-core](https://en.bem.info/libs/bem-core/) library was updated to [3.0.1](https://github.com/bem/bem-core/releases/tag/v3.0.1). With this update [FastClick](https://github.com/ftlabs/fastclick) was removed and new implementation for pointer events was introduced for iOS devices. Also `touch-action: manipulation` property was added to controls ([#1787](https://github.com/bem/bem-components/issues/1787)).
* Dropped support for old `bem-xjst` & `bh` versions ([#1803](https://github.com/bem/bem-components/issues/1803)). [bem-xjst](https://github.com/bem/bem-xjst) 6.3.0+ should be used. Since now there's no need to add dependencies on `i-bem` block for base templates.
* File extentions of `BEMHTML` templates were renamed from `.bemhtml` to `.bemhtml.js` ([#1464](https://github.com/bem/bem-components/issues/1464). Please check that new extention is supported in you build config.
* `onSwitcherClick` method of `dropdown` block was moved to prototype ([#1502](https://github.com/bem/bem-components/issues/1502)).
* `bem-tools` configs were removed ([#1816](https://github.com/bem/bem-components/issues/1816)).

### Bug fixes
* Wrong styling for `dropdown` in `control-group` was fixed ([#1741](https://github.com/bem/bem-components/issues/1741)).

## 2.5.1

### Notable changes
* [bem-core](https://en.bem.info/libs/bem-core/) library was updated to [2.9.1](https://github.com/bem/bem-core/releases/tag/v2.9.1) ([#1789](https://github.com/bem/bem-components/issues/1789)). With this update an issue in `page` was fixed. `<meta name=viewport>` had wrong user-scalable value on the `touch` level.

### Bug fixes
* Fixed a bug in `menu` which led to absence of `tabindex` after disabled state ([#1791](https://github.com/bem/bem-components/pull/1791)).
* Fixed a bug in `control-group` which led to extra border on two or more `button_checked`.

## 2.5.0

### Notable changes
* [bem-core](https://en.bem.info/libs/bem-core/) library was updated to 2.9.0 ([#1755](https://github.com/bem/bem-components/issues/1755)).

### Bug fixes
* Fixed a bug in `select` which led to caching of hidden input on page refresh ([#1752](https://github.com/bem/bem-components/issues/1752)).
* Fixed a bug in `button` which led to `click` event generation after `pointercancel` [#1764](https://github.com/bem/bem-components/pull/1764).
* Fixed a bug in `checkbox` and `radio` which led to wrong form serialization with the help of `jQuery` [#1768](https://github.com/bem/bem-components/issues/1768).
* Fixed a bug in `button` styling with `focused-hard` modifier ([#1721](https://github.com/bem/bem-components/pull/1721)).
* Fixed right border of `button` inside `control-group` ([#1723](https://github.com/bem/bem-components/pull/1723)).
* Fixed borders for autofilled inputs in Blink-based browsers ([#1710](https://github.com/bem/bem-components/issues/1710)).
* Fixed a11y markup in `select` ([#1734](https://github.com/bem/bem-components/issues/1734)).
* Added insufficient dependencies in `select` ([#1667](https://github.com/bem/bem-components/pull/1667))&

### Other changes
* Dist: added client JS bundles without autoinit [#1781](https://github.com/bem/bem-components/pull/1781).
* BEMHTML: implemented support for new versions of `bem-xjst` ([#1745](https://github.com/bem/bem-components/issues/1745)).
* Documentation updated.

## 2.4.0

### Notable changes
* `bem-core` dependency was updated to [2.8.0](https://en.bem.info/libs/bem-core/v2.8.0/changelog/#280).
* Accessibility (a11y) was improved in all blocks ([#1206](https://github.com/bem/bem-components/issues/1206)).
* `dist` build is now uses `bem-xjst@next`, which gives possibility to add templates in runtime.

### Other changes
* `dropdown` does not generate extra wrapper around `switcher` and `popup` any more ([#1392](https://github.com/bem/bem-components/issues/1392)).
* Misused `<i>` element replaced with neutral `<span>` in all blocks ([#1668](https://github.com/bem/bem-components/issues/1668)).
* Multiline comments in stylus files, which break source maps, replaced with singleline ([#1702](https://github.com/bem/bem-components/issues/1702)).

## 2.3.0

### Notable changes
* `bem-core` dependency was updated to [2.7.0](https://en.bem.info/libs/bem-core/v2.7.0/changelog/#270).
* BH 4.x support added ([#1587](https://github.com/bem/bem-components/issues/1587)).
* BEM-XJST 2.x support added ([#1495](https://github.com/bem/bem-components/pull/1495)).
* Theme-specific styles of the `_width_available` modifier of `input`, `textarea` and `select` blocks were moved back from `common` level to `design` ([#1548](https://github.com/bem/bem-components/issues/1548)).

### Bug fixes
* An issue in `checkbox` was fixed. The block didn't work in MSIE 11/Edge ([#1590](https://github.com/bem/bem-components/issues/1590)).
* An issue in `attach` was fixed. The block didn't work in MSIE 11/Edge ([#1596](https://github.com/bem/bem-components/issues/1596)).
* An ability to use HTML tags other than `button` was added ([#1566](https://github.com/bem/bem-components/issues/1566)).
* An issue in `textarea` was fixed. The block didn't resolve it's own dependencies properly ([#1565](https://github.com/bem/bem-components/issues/1565)).

### Other changes
* The English version of library description was updated ([#1552](https://github.com/bem/bem-components/pull/1552)).
* New “Understanding of the library principles” section was added to the russian documentation ([#1613](https://github.com/bem/bem-components/pull/1613)).
* The information about `dist` was added to the russian documentation ([#1584](https://github.com/bem/bem-components/pull/1584)).
* Images in CSS files are freezed in the development version of the `dist` now ([#1568](https://github.com/bem/bem-components/issues/1568)).
* The initialization of `select` was boosted ([#1595](https://github.com/bem/bem-components/pull/1595)).
* The view of `input_theme_islands` without `_has-clear` modifier was improved ([#1610](https://github.com/bem/bem-components/issues/1610)).
* Selected text representation of `input_theme_islands` was fixed ([#1608](https://github.com/bem/bem-components/issues/1608)).

## 2.2.1

### Bug fixes
* The issue in `checkbox` which leads to impossible toggle by click in most browsers was fixed ([#1538](https://github.com/bem/bem-components/issues/1538)).

## 2.2.0

### Bug fixes
* The issue in `select` which prevented it to be opened with `space` button was fixed ([#1486](https://github.com/bem/bem-components/issues/1486)).
* The issue in `checkbox` on touch devices was fixed ([#1472](https://github.com/bem/bem-components/issues/1472)).

### Other changes
* Now there is an ability to prevent native behaviour in `link` block ([#1485](https://github.com/bem/bem-components/issues/1485)).
* Additional check for existance of a group in templates of `menu` was added ([#1513](https://github.com/bem/bem-components/issues/1513)).
* BH bundles in `dist` now mimic to BEMHTML ([#1530](https://github.com/bem/bem-components/issues/1530)).
* Small fixes in documentation were added.

## 2.1.1

### Bug fixes
* The regression of keyboard support in `select` was fixed ([#1456](https://github.com/bem/bem-components/issues/1456)).

### Other changes
* Now the `val` field is assigned to zero in `progressbar` by default ([#1468](https://github.com/bem/bem-components/issues/1468)).
* Description of `button_view_plain` was added to documentation ([#1454](https://github.com/bem/bem-components/issues/1454)).

## 2.1.0

### Notable changes

* Optional support for Internet Explorer 8 in graceful degradation way was implemented ([#1205](https://github.com/bem/bem-components/issues/1205)). For more info please refer [notes in README](/README.md#support-ie8).
* `bem-core` dependency was updated to [2.6.0](https://github.com/bem/bem-core/blob/v2/CHANGELOG.md#260).


### Bug fixes

* An issue with resize in `textarea` block was fixed ([#1330](https://github.com/bem/bem-components/issues/1330)).
* An issue with `select` transition which led to scrollbars flash was fixed ([#1323](https://github.com/bem/bem-components/issues/1323)).
* Controls highlight on touch devices was removed ([#1390](https://github.com/bem/bem-components/issues/1390)).
* Appearance of `button_view_plain` in disabled state was fixed ([#1378](https://github.com/bem/bem-components/issues/1378)).
* An issue with `input` block behaviour in Chrome was fixed ([#1382](https://github.com/bem/bem-components/issues/1382)).
* An issue with visible content of hidden `modal` was fixed ([#1372](https://github.com/bem/bem-components/issues/1372)).
* An issue with extra bounding to `keydown` handler in `menu` block was fixed ([#1381](https://github.com/bem/bem-components/issues/1381)).
* Event propagation in `select` block when `escape` is pressed is now stopped ([#1367](https://github.com/bem/bem-components/issues/1367)).
* `link` inside disabled `menu-item_type_link` is now disabled as well ([#1353](https://github.com/bem/bem-components/issues/1367)).

### Other changes

* Ability to use modifier `_width_available` in `input`, `select` and `textarea` without theme was added ([#1404](https://github.com/bem/bem-components/issues/1404)).
* Config to build library distribution was improved ([#1411](https://github.com/bem/bem-components/issues/1411)).
* `menu` block will throw descriptive error in case of wrong content provided ([#1320](https://github.com/bem/bem-components/issues/1320)).
* Documentation was updated.
