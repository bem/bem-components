module.exports = function(bh) {

    bh.match('tabs', function(ctx, json) {
        var mods = json.mods,
            radioGroup = {
                block : 'radio-group',
                mix : { block : 'tabs', elem : 'tabs-group' },
                mods : ctx.extend({ type : 'line' }, mods),
                name : json.name || 'tabs',
                options : []
            },
            hasSelected = false,
            boxContainer = [];

        json.tabs && json.tabs.forEach(function(tab, i) {
            var tabContent = {
                elem : 'box',
                js : { id : i },
                content : tab.content
            };

            radioGroup.options.push({
                val : i,
                text : tab.title,
                mix : { block : 'tabs', elem : 'tab' }
            });

            if(!hasSelected && tab.checked === true) {
                radioGroup.options[i].checked = true;
                hasSelected = true;
                tabContent.mods = { selected : true };
            }

            boxContainer.push(tabContent);
        });

        if(!hasSelected) {
            radioGroup.options[0].checked = true;
            boxContainer[0].mods = { selected : true };
        }

        ctx
            .js(true)
            .content([radioGroup, { elem : 'container', content : boxContainer }]);
    });

};
