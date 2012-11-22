(function() {

BEM.HTML.decl({ block: 'input', modName: 'type', modVal: 'password' }, {

    onElem : {

        'input' : function(ctx) {

            ctx
                .tag('input')
                .attr('type', 'password');

        }

    }

});

}())
