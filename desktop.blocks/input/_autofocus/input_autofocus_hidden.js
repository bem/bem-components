modules.define('i-bem__dom', function(provide, DOM) {

/**
 * Хелпер для определения типа нажатой клавиши
 * возвращает true в случае, если нажатая клавиша вводит текст
 */
function isTextKey(e) {
    var keyCode = e.charCode || e.keyCode || e.which || 0;
    // TODO: проверку можно сделать проще, если проверять обратное -- что нажата системная клавиша
    if (!e.ctrlKey && !e.altKey && !e.metaKey && (
            (keyCode >= 48 && keyCode <= 57) ||     //isDigit
            (keyCode >= 96 && keyCode <= 105) ||    //isNumpad
            (keyCode >= 65 && keyCode <= 90) ||     //isLetter
            (keyCode >= 1025 && keyCode <= 1071) || //isLetter (кирилица в Opera)
            keyCode === 0))                         //isLetter (кирилица в FF)
        return true;
}

DOM.decl({ block : 'input', modName : 'autofocus', modVal : 'hidden' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.bindToDoc('keydown', this._onDocKeyDown);
            }
        },

        'focused' : {
            true : function() {
                this.__base.apply(this, arguments);

                this
                    .unbindFromDoc('keydown')
                    .delMod('autofocus');
            }
        }
    },

    _onDocKeyDown : function(e) {
        if(this.hasMod('focused')) return;

        if(isTextKey(e) && !this.__self.isTextDomNode(this.__self.getActiveDomNode())) {
            // ставим курсор в конец строки и добавляем пробел
            // TODO: что за пробел?? o_0
            var inputDomNode = this.elem('control')[0],
                val = this.val();

            if(val.length && val.substr(val.length - 1, 1) !== ' ') {
                val += ' ';
                this.val(val);
            }

            if(inputDomNode.createTextRange) { // IE
                var r = inputDomNode.createTextRange();
                r.collapse(false);
                r.select();
            } else if(inputDomNode.selectionStart) { // браузеры
                inputDomNode.setSelectionRange(val.length, val.length);
            }

            this.setMod('focused');
        }
    }
});

provide(DOM);

});
