(function() {

/**
 * Хелпер для определения типа нажатой клавиши
 * возвращает true в случае, если нажатая клавиша вводит текст
 */
var isTextKey = function(e) {
    var keyCode = e.charCode || e.keyCode || e.which || 0;
    if (!e.ctrlKey && !e.altKey && !e.metaKey && (
            (keyCode >= 48 && keyCode <= 57) ||     //isDigit
            (keyCode >= 96 && keyCode <= 105) ||    //isNumpad
            (keyCode >= 65 && keyCode <= 90) ||     //isLetter
            (keyCode >= 1025 && keyCode <= 1071) || //isLetter (кирилица в Opera)
            keyCode === 0))                         //isLetter (кирилица в FF)
        return true;
}

BEM.DOM.decl({name : 'input', modName : 'autofocus', modVal : 'yes'}, {

    onSetMod : {

        'js' : function() {
            this.__base.apply(this, arguments);

            this.bindToDoc('keydown', this._autoFocusBind);

        },

        'autofocus' : {

            'yes' : function() {

                this.bindToDoc('keydown', this._autoFocusBind);
            },

            '' : function() {
                this.unbindFromDoc('keydown');
            }
        }
    },

    _autoFocusBind : function(e) {

        if (this.hasMod('focused', 'yes'))
            return;

        var activeElTag;
        try { activeElTag = document.activeElement.tagName.toLowerCase() } catch (e) {}

        if (isTextKey(e) && activeElTag !== 'input' && activeElTag !== 'textarea') {
            //ставим курсор в конец строки и добавляем пробел
            var inputElem = this.elem('input')[0],
                val = this.val();

            if (val.length > 0 && val.substr(val.length-1,1) !== ' ') {
                val += ' ';
                this.val(val);
            }

            if (inputElem.createTextRange) {
                // ie
                var r = inputElem.createTextRange();
                r.collapse(false);
                r.select();
            } else if (inputElem.selectionStart) { //браузеры
                inputElem.setSelectionRange(val.length,val.length);
            }

            this.setMod('focused', 'yes');
        }
    }

});

} ());
