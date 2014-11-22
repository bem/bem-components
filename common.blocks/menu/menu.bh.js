module.exports = function(bh) {
    function toString(val) {
        return typeof val === 'object'? JSON.stringify(val) : String(val);
    }

    function isValEq(itemValues, val) {
        return itemValues.indexOf(toString(val)) !== -1;
    }

    function isGroup(item) {
        return (!item.block || item.block === 'menu') && item.elem === 'group';
    }

    function isItem(item) {
        return item.block === 'menu-item';
    }

    function checkItem(item, checked, checkedItems) {
        item.mods = item.mods || {};
        item.mods.checked = checked;
        checkedItems.push(item);
    }

    bh.match('menu', function(ctx, json) {
        var menuMods = {
            theme : ctx.mod('theme'),
            disabled : ctx.mod('disabled')
        };

        ctx
            .js(true)
            .tParam('menuMods', menuMods)
            .mix({ elem : 'control' });

        var attrs = { role : 'menu' };
        ctx.mod('disabled') || (attrs.tabindex = 0);
        ctx.attrs(attrs);

        var i = 0, iItem = 0,
            itemOrGroup, firstItem, checkedItems = [],
            itemValues = ctx.mod('mode') === 'check'?
                (json.val || []).map(toString) :
                [toString(json.val)],
            checkGroup = function(group) {
                var item,
                    j = 0,
                    jItem = 0,
                    checked;

                while(item = group.content[j++]) {
                    if(isItem(item)) {
                        jItem++;

                        iItem === 1 && jItem === 1 && (firstItem = item);

                        checked = isValEq(itemValues, item.val);
                        checked && checkItem(item, checked, checkedItems);
                    }
                }
            };

        if(json.content) {
            while(itemOrGroup = json.content[i++]) { // NOTE: because of possible performance bust
                if(ctx.isSimple(itemOrGroup)) {
                    // do nothing for simple item
                } else if(isGroup(itemOrGroup)) {
                    iItem++;
                    checkGroup(itemOrGroup);
                } else if(isItem(itemOrGroup)) {
                    iItem++;
                    iItem === 1 && (firstItem = itemOrGroup);

                    var checked = isValEq(itemValues, itemOrGroup.val);
                    checked && checkItem(itemOrGroup, checked, checkedItems);
                }
            }
        }

        ctx
            .tParam('firstItem', firstItem)
            .tParam('checkedItems', checkedItems);
    });
};
