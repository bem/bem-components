modules.define('test', ['i-bem-dom', 'page', 'modal', 'link', 'button'],
    function(provide, bemDom, Page, Modal, Link, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var page = this.findParentBlock(Page),
                    content = this._elem('content').domElem,
                    text = this._elem('text') && this._elem('text').domElem,
                    paragraph = text && text.html();

                this._modal = this.findChildBlock(Modal);
                this._events(Modal).on({ modName : 'visible', modVal : '*' }, function(e, data) {
                    page.setMod('hide-scroll', data.modVal);
                });

                this._events(Link).on('click', function() {
                    this._modal.toggleMod('visible');
                }, this);

                this
                    .bindToButtonClick('closer', function() {
                        this._modal.delMod('visible');
                    })
                    .bindToButtonClick('add-text', function() {
                        text.append(paragraph);
                    })
                    .bindToButtonClick('remove-text', function() {
                        text.find('p:last').remove();
                    })
                    .bindToButtonClick('wider', function() {
                        content.css('width', parseInt(content.css('width'), 10) + 100);
                    })
                    .bindToButtonClick('narrower', function() {
                        content.css('width', parseInt(content.css('width'), 10) - 100);
                    });
            }
        }
    },

    bindToButtonClick : function(elem, action) {
        var button = this.findChildElem(elem) && this.findChildElem(elem).findMixedBlock(Button);

        button && this._events(button).on('click', action, this);

        return this;
    }
}, {
    lazyInit : false // because we need to test, that modal doesn't animate when it _js_inited, but not _visible
}));

});
