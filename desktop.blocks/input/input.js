/**
 * @module input
 */

import bemDom from 'bem:i-bem-dom';
import tick from 'bem:tick';
import idle from 'bem:idle';

const instances = [];
let boundToTick;
const bindToTick = function() {
        boundToTick = true;
        tick
            .on('tick', update)
            .start();
        idle
            .on({
                idle : function() {
                    tick.un('tick', update);
                },
                wakeup : function() {
                    tick.on('tick', update);
                }
            })
            .start();
    };
const update = function() {
        let instance, i = 0;
        while(instance = instances[i++]) {
            instance.setVal(instance._elem('control').domElem.val());
        }
    };

/**
 * @exports
 * @class input
 * @bem
 */

export default function(Input) {
return bemDom.declBlock(Input, /** @lends input.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                boundToTick || bindToTick();

                this._instanceIndex = instances.push(this) - 1;
            },

            '' : function() {
                this.__base.apply(this, arguments);

                instances.splice(this._instanceIndex, 1);
                let i = this._instanceIndex, instance;
                while(instance = instances[i++]) --instance._instanceIndex;
            }
        }
    },

    _focus : function() {
        const input = this._elem('control').domElem[0];
        if(input.createTextRange && !input.selectionStart) {
            const range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }
    }
});
};
