BEM.DOM.decl('i-global', {

    onSetMod : {

        'js' : function() {

            var input = this.findBlockInside('input')

            BEM.blocks['check-button'].on('check', function(e) {

                var block = e.block,
                    inset;

                inset = input
                    .appendInset(this.createInset(block))
                    .findBlocksInside('b-search-filter')[0];

                block.on('release', function(e) {
                    input.removeInset(inset.domElem);
                    block.un('release');
                });

            }, this);

        }

    },

    createInset : function(block) {
        return BEM.HTML.build({
                    block: 'b-search-filter',
                    mix: [{ block: 'b-search-filter', elem: 'box' }],
                    content: {
                        elem: 'inptok',
                        text: block.val()
                    }
                });
    }

});
