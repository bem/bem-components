block('tabs')(
    js()(true),

    content()(function() {
        var ctx = this.ctx,
            radioGroup = {
                block : 'radio-group',
                mix : { block : 'tabs', elem : 'tabs-group' },
                mods : this.extend({ type : 'line' }, ctx.mods),
                name : ctx.name || 'tabs',
                options : []
            },
            hasSelected = false,
            boxContainer = [];

        ctx.tabs && ctx.tabs.forEach(function(tab, i) {
            var tabBox = {
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
                tabBox.mods = { selected : true };
            }

            boxContainer.push(tabBox);
        });

        if(!hasSelected) {
            radioGroup.options[0].checked = true;
            boxContainer[0].mods = { selected : true };
        }

        return [radioGroup, { elem : 'container', content : boxContainer }];
    })
);
