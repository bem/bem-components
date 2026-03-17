/**
 * Browser test entry point for bem-components.
 *
 * 1. Sets up mocha (BDD globals: describe, it, before, after, beforeEach, afterEach)
 * 2. Imports all bem-core + bem-components blocks and registers them via the modules shim
 * 3. Imports all *.spec.js files (they call modules.define('spec', ...))
 * 4. Resolves the 'spec' module (runs all spec factories, registering mocha tests)
 * 5. Runs mocha and writes window.__testResults
 */

// -- 1. Mocha browser setup --------------------------------------------------
// mocha.js is loaded as a classic <script> tag in index.html (UMD build).
mocha.setup({ ui: 'bdd', reporter: 'html' });

// -- 2. Test helpers ----------------------------------------------------------
import * as chai from 'chai';
import sinon from 'sinon';
import * as sinonChai from 'sinon-chai';

const sinonChaiPlugin = sinonChai.default ?? sinonChai;
chai.use(sinonChaiPlugin);
chai.should();

// -- 3. bem-core blocks -------------------------------------------------------
import identify from 'bem:identify';
import inherit from 'bem:inherit';
import objects from 'bem:objects';
import functions from 'bem:functions';
import functionsDebounce from 'bem:functions__debounce';
import functionsThrottle from 'bem:functions__throttle';
import nextTick from 'bem:next-tick';
import stringsEscape from 'bem:strings__escape';

import events from 'bem:events';
import eventsObservable from 'bem:events__observable';

import $ from 'jquery';
import 'bem:jquery__config';

import dom from 'bem:dom';
import cookie from 'bem:cookie';
import tick from 'bem:tick';
import uri from 'bem:uri';
import uriQuerystring from 'bem:uri__querystring';
import loaderTypeJs from 'bem:loader_type_js';

import bemInternal from 'bem:i-bem__internal';
import bem from 'bem:i-bem';
import bemCollection from 'bem:i-bem__collection';

import 'bem:i-bem-dom__events';
import 'bem:i-bem-dom__events_type_dom';
import 'bem:i-bem-dom__events_type_bem';
import bemDomCollection from 'bem:i-bem-dom__collection';
import bemDom from 'bem:i-bem-dom';
import bemDomInit from 'bem:i-bem-dom__init';

import eventsObservableBemDom from 'bem:events__observable_type_bem-dom';

import keyboardCodes from 'bem:keyboard__codes';

// -- 4. bem-components blocks -------------------------------------------------
import attach from 'bem:attach';
import button from 'bem:button';
import 'bem:button_togglable';
import 'bem:button_type_link';

import checkbox from 'bem:checkbox';
import 'bem:checkbox_type_button';

import checkboxGroup from 'bem:checkbox-group';

import control from 'bem:control';

import dropdown from 'bem:dropdown';
import 'bem:dropdown_switcher_button';
import 'bem:dropdown_switcher_link';

import icon from 'bem:icon';
import image from 'bem:image';

import input from 'bem:input';
import 'bem:input_has-clear';

import link from 'bem:link';
import 'bem:link_pseudo';

import menu from 'bem:menu';
import menuItem from 'bem:menu__item';
import 'bem:menu__item_type_link';
import 'bem:menu_mode';
import 'bem:menu_mode_check';
import 'bem:menu_mode_radio';
import 'bem:menu_mode_radio-check';

import modal from 'bem:modal';
import 'bem:modal_autoclosable';

import popup from 'bem:popup';
import 'bem:popup_autoclosable';
import 'bem:popup_target';
import 'bem:popup_target_anchor';
import 'bem:popup_target_position';

import progressbar from 'bem:progressbar';

import radio from 'bem:radio';
import 'bem:radio_type_button';

import radioGroup from 'bem:radio-group';
import 'bem:radio-group_mode_radio-check';

import select from 'bem:select';
import 'bem:select_mode_check';
import 'bem:select_mode_radio';
import 'bem:select_mode_radio-check';

import spin from 'bem:spin';
import textarea from 'bem:textarea';
import zIndexGroup from 'bem:z-index-group';

// -- 5. BEMHTML shim ----------------------------------------------------------
import BEMHTML from './bemhtml-shim.js';

// -- 6. Modules shim ----------------------------------------------------------
import { createModulesShim } from './modules-shim.js';

window.modules = createModulesShim({
    // bem-core blocks
    identify,
    inherit,
    objects,
    functions,
    'functions__debounce': functionsDebounce,
    'functions__throttle': functionsThrottle,
    'next-tick': nextTick,
    'strings__escape': stringsEscape,
    events,
    'events__observable': eventsObservableBemDom,
    'events__observable_type_bem-dom': eventsObservableBemDom,
    dom,
    cookie,
    tick,
    uri,
    'uri__querystring': uriQuerystring,
    'loader_type_js': loaderTypeJs,
    'i-bem__internal': bemInternal,
    'i-bem': bem,
    'i-bem__collection': bemCollection,
    'i-bem-dom': bemDom,
    'i-bem-dom__collection': bemDomCollection,
    'i-bem-dom__init': bemDomInit,
    'keyboard__codes': keyboardCodes,
    jquery: $,

    // bem-components blocks
    attach,
    button,
    checkbox,
    'checkbox-group': checkboxGroup,
    control,
    dropdown,
    icon,
    image,
    input,
    link,
    menu,
    'menu__item': menuItem,
    modal,
    popup,
    progressbar,
    radio,
    'radio-group': radioGroup,
    select,
    spin,
    textarea,
    'z-index-group': zIndexGroup,

    // Test helpers
    chai,
    sinon,
    'sinon-chai': sinonChaiPlugin,
    BEMHTML,
});

// Register mocha as a module
window.modules.define('mocha', function(provide) {
    provide(window.mocha);
});

// Bootstrap 'spec': individual spec files will add more 'spec' definitions after this one.
window.modules.define('spec', function(provide) {
    provide();
});

// -- 7. Import all spec files -------------------------------------------------
// Use lazy glob so spec files are imported AFTER window.modules is set up.
// Each spec file calls modules.define('spec', ...) as a side effect.
const specLoaders = import.meta.glob([
    '/common.blocks/**/*.spec.js',
    '/desktop.blocks/**/*.spec.js',
]);

Promise.all(Object.values(specLoaders).map(load => load())).then(() => {
    // -- 8. Run mocha ---------------------------------------------------------
    // Resolve 'spec' module -> runs all spec factories -> registers describe/it.
    window.modules.require(['spec'], function() {
        const runner = mocha.run(function(failures) {
            window.__testResults = {
                failures,
                total: runner.stats.tests,
                passed: runner.stats.passes,
                pending: runner.stats.pending,
            };
        });
        window.__testFailures = [];
        runner.on('fail', function(test, err) {
            window.__testFailures.push({
                title: test.fullTitle(),
                err: err.message,
            });
        });
    });
});
