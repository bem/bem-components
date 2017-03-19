block('input').elem('control')(

    addAttrs()(function() {
        return this.extend({
            autocomplete : 'off',
            autocorrect : 'off',
            autocapitalize : 'off',
            spellcheck : 'false'
        }, applyNext());
    })

);
