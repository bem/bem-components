BEM.HTML.decl({ block : 'b-autocomplete-item', modName : 'type', modVal : 'lingvo' }, {

    onBlock : function(ctx) {

        var data = ctx.param('data')[1];
        
        ctx.content([
            { tag : 'span', elem : 'text', content : data.text },
            { tag : 'span', elem : 'translation', content : [' — ', data.translation] }
        ]);

    }

});
