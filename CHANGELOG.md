# Changelog

## 2.3.0

### Major changes
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

### Major changes

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
