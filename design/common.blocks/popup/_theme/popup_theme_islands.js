import objects from 'bem:objects';
import Popup from 'bem:popup';

Popup.declMod({ modName : 'theme', modVal : 'islands' }, {
    _getDefaultParams : function() {
        return objects.extend(
            this.__base(),
            {
                mainOffset : 5,
                viewportOffset : 10
            });
    }
});
// Side-effect only - modifier is registered on import
export default function() {};
