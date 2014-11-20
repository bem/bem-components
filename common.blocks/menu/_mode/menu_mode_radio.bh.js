module.exports = function(bh) {
    bh.match('menu_mode_radio', function(ctx) {
        ctx.applyBase();

        var checkedItems = ctx.tParam('checkedItems'),
            firstItem = ctx.tParam('firstItem');

        if(firstItem && !checkedItems.length) {
            firstItem.mods.checked = true;
        }
    });
};
