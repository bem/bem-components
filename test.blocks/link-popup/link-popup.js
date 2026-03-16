import bemDom from 'bem:i-bem-dom';
import Link from 'bem:link';
import Popup from 'bem:popup';

export default bemDom.declBlock('link-popup', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                const link = this.findChildBlock(Link),
                    popup = this.findChildBlock(Popup);

                popup.setAnchor(link);

                this._events(link).on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
});
