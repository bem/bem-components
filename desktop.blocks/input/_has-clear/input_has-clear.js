import Input from 'bem:input';

Input.declMod({ modName : 'has-clear', modVal : true }, {
    _onBoxClick : function() {
        this._elem('clear').hasMod('visible') || this.setMod('focused');
    }
}, {
    onInit : function() {
        this._domEvents('box').on('pointerclick', function() {
            this._onBoxClick();
        });

        return this.__base.apply(this, arguments);
    }
});

// Barrel-compatible export (this module is side-effect only)
export default function(x) { return x; };
