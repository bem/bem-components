module.exports = function(bh) {

    bh.match('checkbox-group', function(ctx, json) {
        ctx
            .tag('span')
            .attrs({ role : 'group' })
            .js(true)
            .mix({ block : 'control-group' });

        var mods = ctx.mods(),
            val = json.val,
            isValDef = typeof val !== 'undefined';

        if(isValDef && !Array.isArray(val)) throw Error('checkbox-group: val must be an array');

        ctx.content((json.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                {
                    block : 'checkbox',
                    mods : {
                        type : mods.type,
                        theme : mods.theme,
                        size : mods.size,
                        checked : isValDef && val.indexOf(option.val) > -1,
                        disabled : option.disabled || mods.disabled
                    },
                    name : json.name,
                    val : option.val,
                    text : option.text,
                    title : option.title,
                    icon : option.icon
                }
            ];
        }));
    });

};
