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
					collapsed : this._getSwitcher().text()  || 'Show'
				};
			}
		},

		'opened' : {
			'true' : function() {
				this.setMod((this._getSwitcher()), 'opened');
				this.setMod((this._getContainer()), 'visible');

				this._switcherTextChange();
			},
			'' : function() {
				this.delMod((this._getSwitcher()), 'opened');
				this.delMod((this._getContainer()), 'visible');

				this._switcherTextChange();
			}
		}
	},

	_getSwitcher : function() {
		return this._switcher ||
			(this._switcher = this.elem('switcher'));
	},

	_getContainer : function() {
		return this._container ||
			(this._container = this.elem('container'));
	},

	_onSwitcherClick : function(e) {
		e.preventDefault();

		this.toggleMod('opened');
	},

	_switcherTextChange : function() {
		this._switcher.html(!this.hasMod('opened')? this._params.collapsed : this._params.expanded);
	}

}, {
	live : function() {
		this.liveBindTo('switcher', 'click', function(e){
			this._onSwitcherClick(e);
		});
	}
} ));

});
