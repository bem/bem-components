import objects from 'bem:objects';

export default function(Popup) {
return Popup.declMod({ modName : 'theme', modVal : 'islands' }, {
    _getDefaultParams : function() {
        return objects.extend(
            this.__base(),
            {
                mainOffset : 5,
                viewportOffset : 10
            });
    }
});
};
