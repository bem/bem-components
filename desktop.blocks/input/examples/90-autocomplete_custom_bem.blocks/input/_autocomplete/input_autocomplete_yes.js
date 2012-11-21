BEM.DOM.decl({ name : 'input', modName : 'autocomplete', modVal : 'yes' }, {

    _buildItemsHtml : function(data) {
        
        return BEM.HTML.build($.map(data, function(data, i) {
            return {
                block : 'b-autocomplete-item',
                data  : data,
                mods  : { type : 'metro' }
            };
        }));

    }
        
});

BEM.decl('i-my-dataprovider', {
    get: function(val, onSuccess) {
        var blocks = ['Шаболовская', 'Парк Культуры', 'Библиотека им. Ленина', 'Алексеевская', 'Авиамоторная'],
            values = [];

        if (val) {
            for (var i = 0; i != blocks.length; i++) {
                if (blocks[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                    values.push(blocks[i]);
                }
            }
        }

        onSuccess(values);
    }
});