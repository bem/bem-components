module.exports = function(bh) {

    bh.match('select', function(ctx, json) {
        if(!ctx.mod('mode')) throw Error('Can\'t build select without mode modifier');

        ctx.js({
            name : json.name,
            optionsMaxHeight : json.optionsMaxHeight
        });

        var options = json.options,
            i = 0, j,
            optionOrGroup, option, firstOption, checkedOptions = [];

        while(optionOrGroup = options[i++]) { // NOTE: because of possible performance bust
            if(optionOrGroup.group) {
                j = 0;
                while(option = optionOrGroup.group[j++]) {
                    i === 1 && j === 1 && (firstOption = option);
                    option.checked && checkedOptions.push(option);
                }
            } else {
                i === 1 && (firstOption = optionOrGroup);
                optionOrGroup.checked && checkedOptions.push(optionOrGroup);
            }
        }

        json._checkedOptions = checkedOptions;
        json._firstOption = firstOption;

        ctx.content([
            { elem : 'button' },
            {
                block : 'popup',
                mods : { theme : ctx.mod('theme'), autoclosable : true },
                js : { directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'] },
                content : { block : json.block, mods : ctx.mods(), elem : 'menu' }
            }
        ]);
    });

};
