/**
 * @module modal
 */

/**
 * @exports
 * @class modal
 * @bem
 */
export default function(Modal) {
return Modal.declMod({ modName : 'theme', modVal : 'islands' }, /** @lends modal.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                this
                    // Apply the animation only at first opening, otherwise the animation will be played when block
                    // initialized.
                    .setMod('has-animation')
                    .__base.apply(this, arguments);
            }
        }
    }
});
};
