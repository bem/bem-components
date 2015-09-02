module.exports = function(bh) {

    bh.match('select', function(ctx, json) {
        if(!ctx.mod('mode')) throw Error('Can\'t build select without mode modifier');

        function containsVal(val) {
            return isValDef &&
                (isModeCheck?
                    json.val.indexOf(val) > -1 :
                    json.val === val);
        }

        function iterateOptions(content) {
            var i = 0, option;
            while(option = content[i++]) {
                if(option.group) {
                    iterateOptions(option.group);
                } else {
                    firstOption || (firstOption = option);
                    if(containsVal(option.val)) {
                        option.checked = true;
                        checkedOptions.push(option);
                    }
                }
            }
        }

        var isValDef = typeof json.val !== 'undefined',
            isModeCheck = ctx.mod('mode') === 'check',
            firstOption, checkedOptions = [],
            popupId = ctx.generateId();

        iterateOptions(json.options);

        ctx
            .js({
                name : json.name,
                optionsMaxHeight : json.optionsMaxHeight
            })
            .tParam('select', json)
            .tParam('firstOption', firstOption)
            .tParam('checkedOptions', checkedOptions)
            .tParam('popupId', popupId)
            .content([
                { elem : 'button' },
                {
                    block : 'popup',
                    mods : { target : 'anchor', theme : ctx.mod('theme'), autoclosable : true },
                    attrs : { id : popupId, role : 'presentation' },
                    directions : ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
                    content : { block : json.block, mods : ctx.mods(), elem : 'menu' }
                }
            ]);
    });

};
