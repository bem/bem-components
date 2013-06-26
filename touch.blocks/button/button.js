/**
 * @namespace
 * @name Button
 */
BEM.DOM.decl('button', /** @lends Button.prototype */ {}, /** @lends Button */ {

    live : function() {

        var eventsToMods = {
            'pointerdown' : { name : 'pressed', val : 'yes' },
            'pointerup' : { name : 'pressed' },
        };

        this.liveBindTo('pointerdown pointerup', function(e) {
            var mod = eventsToMods[e.type];
            this.setMod(mod.name, mod.val || '');
        });
    }

});
