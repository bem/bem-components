module.exports = function(bh) {

    bh.match('menu', function(ctx, json) {
        var menuMods = {
            theme : ctx.mod('theme'),
            disabled : ctx.mod('disabled')
        };

        ctx
            .js(true)
            .tParam('menuMods', menuMods)
            .mix({ elem : 'control' });

        var attrs = {
            role : 'menu',
            id : json.id,
            'aria-label' : json.ariaLabel,
            'aria-labelledby' : json.ariaLabelledby
        };

        if(ctx.mod('disabled')) {
            attrs['aria-disabled'] = true;
        } else {
            attrs.tabindex = json.tabIndex || 0;
        }

        ctx.attrs(attrs);

        var firstItem,
            checkedItems = [];

        if(json.content) {
            var isValDef = typeof json.val !== 'undefined',
                isModeCheck = ctx.mod('mode') === 'check',
                containsVal = function(val) {
                    return isValDef &&
                        (isModeCheck?
                            json.val.indexOf(val) > -1 :
                            json.val === val);
                },
                iterateItems = function(content) {
                    var i = 0, itemOrGroup;
                    while(itemOrGroup = content[i++]) {
                        if(itemOrGroup.block === 'menu-item') {
                            itemOrGroup.attrs = itemOrGroup.attrs || {};
                            itemOrGroup.attrs.role = itemOrGroup.attrs.role || 'menuitem';
                            firstItem || (firstItem = itemOrGroup);
                            if(containsVal(itemOrGroup.val)) {
                                (itemOrGroup.mods = itemOrGroup.mods || {}).checked = true;
                                checkedItems.push(itemOrGroup);
                            }
                        } else { // menu__group
                            iterateItems(itemOrGroup.content);
                        }
                    }
                };

            if(!Array.isArray(json.content)) throw Error('menu: content must be an array of the menu items');

            iterateItems(json.content);
        }

        ctx
            .tParam('firstItem', firstItem)
            .tParam('checkedItems', checkedItems);
    });
};
