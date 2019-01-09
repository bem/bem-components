'use strict';

/**
 * Helper for set focused state on element
 *
 * @param {string} selector - selector for focused state
 * @returns {Hermione}
 */
module.exports = function(selector) {
    return this
        .element(selector)
        .then(({ value: { ELEMENT: id } }) => this.elementIdValue(id, ''));
};
