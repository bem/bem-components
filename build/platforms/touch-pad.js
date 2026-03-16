/**
 * Entry point for the touch-pad platform build.
 *
 * This file imports all BEM blocks for the touch-pad platform.
 * The vite-plugin-bem-levels plugin resolves `bem:*` imports to actual files
 * from the level chain: bem-core/{common,touch}.blocks →
 * {common,touch}.blocks → design/common.blocks
 */

// attach
import 'bem:attach';
import 'bem:attach_theme_islands';
import 'bem:attach_theme_simple';

// button
import 'bem:button';
import 'bem:button_theme_islands';
import 'bem:button_theme_simple';
import 'bem:button_togglable';
import 'bem:button_type_link';

// checkbox
import 'bem:checkbox';
import 'bem:checkbox_theme_islands';
import 'bem:checkbox_theme_simple';
import 'bem:checkbox_type_button';

// checkbox-group
import 'bem:checkbox-group';
import 'bem:checkbox-group_theme_islands';
import 'bem:checkbox-group_theme_simple';

// control
import 'bem:control';

// dropdown
import 'bem:dropdown';
import 'bem:dropdown__switcher';
import 'bem:dropdown__switcher_switcher_button';
import 'bem:dropdown__switcher_switcher_link';
import 'bem:dropdown_switcher_button';
import 'bem:dropdown_switcher_link';

// icon
import 'bem:icon';

// image
import 'bem:image';

// input
import 'bem:input';
import 'bem:input_has-clear';
import 'bem:input_theme_islands';
import 'bem:input_theme_simple';

// link
import 'bem:link';
import 'bem:link_pseudo';
import 'bem:link_theme_islands';
import 'bem:link_theme_simple';

// menu
import 'bem:menu';
import 'bem:menu__item';
import 'bem:menu__item_theme_islands';
import 'bem:menu__item_theme_simple';
import 'bem:menu__item_type_link';
import 'bem:menu_mode';
import 'bem:menu_mode_check';
import 'bem:menu_mode_radio';
import 'bem:menu_mode_radio-check';
import 'bem:menu_theme_islands';
import 'bem:menu_theme_simple';

// modal
import 'bem:modal';
import 'bem:modal_autoclosable';
import 'bem:modal_theme_islands';
import 'bem:modal_theme_simple';

// page
import 'bem:page_theme_islands';

// popup
import 'bem:popup';
import 'bem:popup_autoclosable';
import 'bem:popup_target';
import 'bem:popup_target_anchor';
import 'bem:popup_target_position';
import 'bem:popup_theme_islands';
import 'bem:popup_theme_simple';

// progressbar
import 'bem:progressbar';
import 'bem:progressbar_theme_islands';
import 'bem:progressbar_theme_simple';

// radio
import 'bem:radio';
import 'bem:radio_theme_islands';
import 'bem:radio_theme_simple';
import 'bem:radio_type_button';

// radio-group
import 'bem:radio-group';
import 'bem:radio-group_mode_radio-check';
import 'bem:radio-group_theme_islands';
import 'bem:radio-group_theme_simple';

// select
import 'bem:select';
import 'bem:select_mode_check';
import 'bem:select_mode_radio';
import 'bem:select_mode_radio-check';
import 'bem:select_theme_islands';

// spin
import 'bem:spin';
import 'bem:spin_theme_islands';
import 'bem:spin_theme_simple';

// textarea
import 'bem:textarea';
import 'bem:textarea_theme_islands';
import 'bem:textarea_theme_simple';

// z-index-group
import 'bem:z-index-group';
