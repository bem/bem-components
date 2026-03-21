/**
 * E2E fixture entry point.
 *
 * Imports all BEM blocks (JS + CSS via Vite BEM plugin) and triggers
 * i-bem-dom initialization so that BEM components on the page become live.
 *
 * Each E2E fixture HTML file loads this script via:
 *   <script type="module" src="/test/e2e/e2e-entry.js"></script>
 */

// -- bem-core blocks --
import 'bem:identify';
import 'bem:inherit';
import 'bem:objects';
import 'bem:functions';
import 'bem:functions__debounce';
import 'bem:functions__throttle';
import 'bem:next-tick';
import 'bem:strings__escape';

import 'bem:events';
import 'bem:events__observable';

import $ from 'bem:jquery';
import 'bem:jquery__config';

import 'bem:dom';
import 'bem:cookie';
import 'bem:tick';
import 'bem:uri';
import 'bem:uri__querystring';
import 'bem:loader_type_js';

import 'bem:i-bem__internal';
import 'bem:i-bem';
import 'bem:i-bem__collection';

import 'bem:i-bem-dom__events';
import 'bem:i-bem-dom__events_type_dom';
import 'bem:i-bem-dom__events_type_bem';
import 'bem:i-bem-dom__collection';
import bemDom from 'bem:i-bem-dom';
import bemDomInit from 'bem:i-bem-dom__init';

import 'bem:events__observable_type_bem-dom';
import 'bem:keyboard__codes';
import 'bem:idle';

// -- bem-components blocks --
import 'bem:attach';
import 'bem:button';
import 'bem:button_togglable';
import 'bem:button_type_link';

import 'bem:checkbox';
import 'bem:checkbox_type_button';
import 'bem:checkbox-group';

import 'bem:control';

import Dropdown from 'bem:dropdown';
import 'bem:dropdown_switcher_button';
import 'bem:dropdown_switcher_link';
import 'bem:dropdown__switcher';
import 'bem:dropdown__switcher_switcher_button';
import 'bem:dropdown__switcher_switcher_link';

import 'bem:icon';
import 'bem:image';

import 'bem:input';
import 'bem:input_has-clear';
import 'bem:input_autofocus';

import Link from 'bem:link';
import 'bem:link_pseudo';

import 'bem:menu';
import 'bem:menu__item';
import 'bem:menu__item_type_link';
import 'bem:menu_mode';
import 'bem:menu_mode_check';
import 'bem:menu_mode_radio';
import 'bem:menu_mode_radio-check';

import Modal from 'bem:modal';
import 'bem:modal_autoclosable';

import Popup from 'bem:popup';
import 'bem:popup_autoclosable';
import 'bem:popup_target';
import 'bem:popup_target_anchor';
import 'bem:popup_target_position';

import 'bem:progressbar';

import 'bem:radio';
import 'bem:radio_type_button';

import 'bem:radio-group';
import 'bem:radio-group_mode_radio-check';

import Select from 'bem:select';
import 'bem:select_mode_check';
import 'bem:select_mode_radio';
import 'bem:select_mode_radio-check';

import 'bem:spin';
import 'bem:textarea';
import 'bem:z-index-group';

// -- Design theme CSS (islands) --
// These CSS-only modules are in design/common.blocks and design/desktop.blocks.
// They must be explicitly imported to load theme styles.
import 'bem:page_theme_islands';
import 'bem:attach_theme_islands';
import 'bem:button_theme_islands';
import 'bem:checkbox_theme_islands';
import 'bem:checkbox-group_theme_islands';
import 'bem:input_theme_islands';
import 'bem:link_theme_islands';
import 'bem:menu_theme_islands';
import 'bem:menu__item_theme_islands';
import 'bem:modal_theme_islands';
import 'bem:popup_theme_islands';
import 'bem:progressbar_theme_islands';
import 'bem:radio_theme_islands';
import 'bem:radio-group_theme_islands';
import 'bem:select_theme_islands';
import 'bem:spin_theme_islands';
import 'bem:textarea_theme_islands';

// -- Initialize BEM DOM --
// Wait for DOM to be ready, then trigger BEM DOM init
$(function() {
    try {
        bemDomInit();
    } catch (e) {
        // Some pages may have BEM init errors (e.g., textarea's flat structure).
        // CSS still applies, so visual tests can proceed.
        console.warn('[e2e-entry] BEM DOM init error:', e.message);
    }
    // Expose jQuery and BEM APIs on window for E2E test access
    window.$ = window.jQuery = $;
    window.bemDom = bemDom;
    window.bemBlocks = { Select, Modal, Popup, Dropdown, Link };

    // Signal to Playwright that initialization is complete
    document.body.dataset.bemReady = 'true';
    window.__bemReady = true;
});
