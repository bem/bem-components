module.exports = function(bh) {

    bh.match('menu', function(ctx, json) {
        if(!ctx.mod('mode'))
            return;

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

            if(!Array.isArray(json.content)) throw Error('menu: content must be an array of the menu items');

            iterateItems(json.content);
        }

        ctx
            .tParam('firstItem', firstItem)
            .tParam('checkedItems', checkedItems);
    });
};
