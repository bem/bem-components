/**
 * @module modal
 */

/**
 * @exports
 * @class modal
 * @bem
 */
import Modal from 'bem:modal';

Modal.declMod({ modName : 'theme', modVal : 'islands' }, /** @lends modal.prototype */{
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
// Side-effect only - modifier is registered on import
export default function() {};
