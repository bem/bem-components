block('menu')(
    def()(function() {
        var ctx = this.ctx,
            mods = this.mods,
            firstItem,
            checkedItems = [];

        if(ctx.content) {
            var isValDef = typeof ctx.val !== 'undefined',
                containsVal = function(val) {
                    return isValDef &&
                        (mods.mode === 'check'?
                            ctx.val.indexOf(val) > -1 :
                            ctx.val === val);
                },
                iterateItems = function(content) {
                    var i = 0, itemOrGroup;
                    while(itemOrGroup = content[i++]) {
                        if(itemOrGroup.block === 'menu-item') {
                            firstItem || (firstItem = itemOrGroup);
                            if(containsVal(itemOrGroup.val)) {
                                (itemOrGroup.mods = itemOrGroup.mods || {}).checked = true;
                                checkedItems.push(itemOrGroup);
                            }
                        } else if(itemOrGroup.content) { // menu__group
                            iterateItems(itemOrGroup.content);
                        }
                    }
                };

            if(!this.isArray(ctx.content)) throw Error('menu: content must be an array of the menu items');

            iterateItems(ctx.content);
        }

        return applyNext({
            _firstItem : firstItem,
            _checkedItems : checkedItems,
            _menuMods : mods
        });
    }),
    attrs()(function() {
        var attrs = { role : 'menu' };

        this.mods.disabled?
            attrs['aria-disabled'] = 'true' :
            attrs.tabindex = 0;

        return attrs;
    }),
    js()(true),
    mix()({ elem : 'control' }),
    mod('disabled', true)
        .js()(function() {
            return this.extend(applyNext(), { tabIndex : 0 });
        })
);
