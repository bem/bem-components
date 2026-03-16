import dom from 'bem:dom';
import bemDom from 'bem:i-bem-dom';

export default function(Input) {
return Input.declMod({ modName : 'autofocus', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._domEvents(bemDom.doc).on('keydown', this._onDocKeyDown);
            }
        },

        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.delMod('autofocus');
            }
        }
    },

    _onDocKeyDown : function(e) {
        if(this.hasMod('focused')) return;

        if(isTextKey(e) && !dom.isEditable(dom.getFocused())) {
            const inputDomNode = this._elem('control').domElem[0];
            let val = this.getVal();

            if(val.length && val.substr(val.length - 1, 1) !== ' ') {
                val += ' ';
                this.setVal(val);
            }

            if(inputDomNode.createTextRange) { // IE
                const r = inputDomNode.createTextRange();
                r.collapse(false);
                r.select();
            } else if(inputDomNode.selectionStart) {
                inputDomNode.setSelectionRange(val.length, val.length);
            }

            this.setMod('focused');
        }
    }
});

function isTextKey(e) {
    const keyCode = e.charCode || e.keyCode || e.which || 0;
    if(!e.ctrlKey && !e.altKey && !e.metaKey && (
            (keyCode >= 48 && keyCode <= 57) ||     // isDigit
            (keyCode >= 96 && keyCode <= 105) ||    // isNumpad
            (keyCode >= 65 && keyCode <= 90) ||     // isLetter
            (keyCode >= 1025 && keyCode <= 1071) || // isLetter
            keyCode === 0))                         // isLetter
        return true;
}
};
