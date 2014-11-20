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

        var attrs = { role : 'menu' };
        ctx.mod('disabled') || (attrs.tabindex = 0);
        ctx.attrs(attrs);

        var i = 0, iItem = 0,
            itemOrGroup, firstItem, checkedItems = [],
            toString = function(val) {
                return typeof val === 'object'? JSON.stringify(val): String(val);
            },
            itemValues = ctx.mod('mode') === 'check'? (json.val || []).map(toString): [toString(json.val)],
            isValEq = function(val) {
                return itemValues.indexOf(toString(val)) !== -1;
            },
            isGroup = function(item) {
                return item.block === 'menu' && item.elem === 'group';
            },
            isItem = function(item) {
                return item.block === 'menu-item';
            },
            checkGroup = function(group) {
                var item,
                    j = 0,
                    jItem = 0,
                    checked;

                while(item = group.content[j++]) {
                    if(isItem(item)) {
                        jItem++;

                        iItem === 1 && jItem === 1 && (firstItem = item);

                        checked = isValEq(item.val);
                        item.mods = item.mods || {};
                        item.mods.checked = checked;
                        checked && checkedItems.push(item);
                    }
                }
            },
            checkItem = function(item) {
                iItem === 1 && (firstItem = item);

                var checked = isValEq(item.val);
                item.mods = item.mods || {};
                item.mods.checked = checked;
                checked && checkedItems.push(item);
            };

        if(json.content) {
            while(itemOrGroup = json.content[i++]) { // NOTE: because of possible performance bust
                if(!ctx.isSimple(itemOrGroup)) {
                    if(isGroup(itemOrGroup)) {
                        iItem++;
                        checkGroup(itemOrGroup);
                    } else if(isItem(itemOrGroup)) {
                        iItem++;
                        checkItem(itemOrGroup);
                    }
                }
            }
        }

        ctx
            .tParam('firstItem', firstItem)
            .tParam('checkedItems', checkedItems);
    });
};
