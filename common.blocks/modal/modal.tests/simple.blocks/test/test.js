modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

var Test = BEMDOM.decl(this.name, /** @lends popup.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                var page = this.findBlockOutside('page'),
                    closer = this.findBlockInside('closer', 'button');

                this._modal = this.findBlockInside('modal')
                    .on({ modName : 'visible', modVal : '*' }, function(e, data) {
                        page.setMod('hide-scroll', data.modVal);
                    });

                closer && closer.on('click', function() {
                    this._modal.delMod('visible');
                }, this);
            }
        }
    }
}, {
    live : function() {
        this.liveInitOnBlockInsideEvent('click', 'link', function() {
            this._modal.toggleMod('visible');
        });
    }
});

Test.decl({ modName : 'rich', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var content = this.elem('content'),
                    text = this.elem('text');

                this.findBlockOn('add-text', 'button').on('click', function() {
                    text.append('<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
                        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an ' +
                        'unknown printer took a galley of type and scrambled it to make a type specimen book.</p>');
                });
                this.findBlockOn('remove-text', 'button').on('click', function() {
                    text.find('p:last').remove();
                });
                this.findBlockOn('wider', 'button').on('click', function() {
                    content.css('width', parseInt(content.css('width'), 10) + 100);
                });
                this.findBlockOn('narrower', 'button').on('click', function() {
                    content.css('width', parseInt(content.css('width'), 10) - 100);
                });
            }
        }
    }
});

provide(Test);

});
