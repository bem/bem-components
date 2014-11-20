module.exports = function(bh) {

    bh.match('checkbox-group', function(ctx, json) {
        ctx
            .tag('span')
            .js(true)
            .mix({ block : 'control-group' });

        var mods = ctx.mods(),
            val = json.val;

        if(val !== undefined) {
            val = val.map(String);
        }

        ctx.content((json.options || []).map(function(option, i) {
            return [
                !!i && !mods.type && { tag : 'br' },
                {
                    block : 'checkbox',
                    mods : {
                        type : mods.type,
                        theme : mods.theme,
                        size : mods.size,
                        checked : val !== undefined && val.indexOf(String(option.val)) !== -1,
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
