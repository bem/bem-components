module.exports = function(bh) {
    bh.match('menu_mode_radio', function(ctx) {
        ctx.applyBase();
        var firstItem = ctx.tParam('firstItem');
        if(firstItem && !ctx.tParam('checkedItems').length) {
            (firstItem.elemMods = firstItem.elemMods || {}).checked = true;
        }
    });
};
