modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var page = this.findBlockOutside('page'),
                    content = this.elem('content'),
                    text = this.elem('text'),
                    paragraph = text.html();

                this._modal = this.findBlockInside('modal')
                    .on({ modName : 'visible', modVal : '*' }, function(e, data) {
                        page.setMod('hide-scroll', data.modVal);
                    });

                this.findBlockInside('link').on('click', function() {
                    this._modal.toggleMod('visible');
                }, this);

                this
                    ._bindToButtonClick('closer', function() {
                        this._modal.delMod('visible');
                    })
                    ._bindToButtonClick('add-text', function() {
                        text.append(paragraph);
                    })
                    ._bindToButtonClick('remove-text', function() {
                        text.find('p:last').remove();
                    })
                    ._bindToButtonClick('wider', function() {
                        content.css('width', parseInt(content.css('width'), 10) + 100);
                    })
                    ._bindToButtonClick('narrower', function() {
                        content.css('width', parseInt(content.css('width'), 10) - 100);
                    });
            }
        }
    },

    _bindToButtonClick : function(elem, action) {
        var button = this.findBlockOn(elem, 'button');

        button && button.on('click', action, this);

        return this;
    }
}, {
    live : false // because we need to test, that modal doesn't animate when it _js_inited, but not _visible
}));

});
