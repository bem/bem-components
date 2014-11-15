/**
 * @module cut
 */

modules.define('cut', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class cut
 * @bem
 */
provide(BEMDOM.decl(this.name, {
	onSetMod : {
		'js' : {
			'inited' : function() {
				this._switcher = null;
				this._popup = null;
				this._params = {
					expanded : this.params.expandedText  || 'Hide',
					collapsed : this.getSwitcher().text()  || 'Show'
				};

				this.bindTo('switcher', 'click', this._onContainerVisibilityChange);
			}
		},

		'opened' : {
			'true' : function() {
				this.setMod((this.getSwitcher()), 'opened');
				this.setMod((this.getContainer()), 'visible');

				this._switcherTextChange();
			},
			'' : function() {
				this.delMod((this.getSwitcher()), 'opened');
				this.delMod((this.getContainer()), 'visible');

				this._switcherTextChange();
			}
		}
	},

	getSwitcher : function() {
		return this._switcher ||
			(this._switcher = this.elem('switcher'));
	},

	getContainer : function() {
		return this._container ||
			(this._container = this.elem('container'));
	},

	_onContainerVisibilityChange : function(e) {
		e.preventDefault();

		this.toggleMod('opened');
	},

	_switcherTextChange : function() {
		BEMDOM.update(
			this._switcher,
			!this.hasMod('opened')? this._params.collapsed : this._params.expanded
		);
	}
}));

});
