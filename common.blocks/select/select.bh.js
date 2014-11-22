module.exports = function(bh) {
    function toString(val) {
        return typeof val === 'object'? JSON.stringify(val) : String(val);
    }

    function isValEq(optionValues, val) {
        return optionValues.indexOf(toString(val)) !== -1;
    }

    bh.match('select', function(ctx, json) {
        if(!ctx.mod('mode')) throw Error('Can\'t build select without mode modifier');

        ctx.js({
            name : json.name,
            optionsMaxHeight : json.optionsMaxHeight
        });

        var i = 0, j,
            optionOrGroup, option, firstOption, checkedOptions = [],
            optionValues = ctx.mod('mode') === 'check'?
                (json.val || []).map(toString) :
                [toString(json.val)];

        while(optionOrGroup = json.options[i++]) { // NOTE: because of possible performance bust
            if(optionOrGroup.group) {
                j = 0;
                while(option = optionOrGroup.group[j++]) {
                    i === 1 && j === 1 && (firstOption = option);
                    option.checked = isValEq(optionValues, option.val);
                    option.checked && checkedOptions.push(option);
                }
            } else {
                i === 1 && (firstOption = optionOrGroup);
                optionOrGroup.checked = isValEq(optionValues, optionOrGroup.val);
                optionOrGroup.checked && checkedOptions.push(optionOrGroup);
            }
        }

        ctx
            .tParam('select', json)
            .tParam('firstOption', firstOption)
            .tParam('checkedOptions', checkedOptions);

        ctx.content([
            { elem : 'button' },
            {
                block : 'popup',
                mods : { target : 'anchor', theme : ctx.mod('theme'), autoclosable : true },
                directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
                content : { block : json.block, mods : ctx.mods(), elem : 'menu' }
            }
        ]);
    });

};
