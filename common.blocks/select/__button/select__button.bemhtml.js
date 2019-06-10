block('select').elem('button')(
    mode('button-attrs')(function() {
        var mods = this.mods;

        return {
            role : 'listbox',
            'aria-owns' : this._optionIds.join(' '),
            'aria-multiselectable' : mods.mode === 'check'? 'true' : undefined,
            'aria-labelledby' : this._selectTextId
        };
    }),
    mode('button-mods')(function() {
        var mods = this.mods;

        return {
            size : mods.size,
            theme : mods.theme,
            view : mods.view,
            focused : mods.focused,
            disabled : mods.disabled,
            checked : mods.mode !== 'radio' && !!this._checkedOptions.length
        };
    }),
    mode('button')(function() {
        var select = this._select;

        return {
            block : 'button',
            mix : { block : this.block, elem : this.elem },
            mods : apply('button-mods'),
            attrs : apply('button-attrs'),
            id : select.id,
            tabIndex : select.tabIndex,
            content : [
                apply('content'),
                { block : 'icon', mix : { block : 'select', elem : 'tick' } }
            ]
        };
    }),
    replace()(function() {
        return apply('button');
    }),
    def()(function() {
        return applyNext({ _selectTextId : this.generateId() });
    })
);

block('button').elem('text').match(function() { return this._select; })(
    addAttrs()(function() {
        return { id : this._selectTextId };
    })
);
