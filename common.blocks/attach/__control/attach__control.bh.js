module.exports = function(bh) {

    bh.match('attach__control', function(ctx) {
        var attrs = {
                type : 'file'
            },
            attach = ctx.tParam('attach');

        // в js генерим html для attach__control без самого attach
        if(attach) {
            attrs.name = attach.name;
            attach.mods && attach.mods.disabled && (attrs.disabled = 'disabled');
            attach.tabIndex && (attrs.tabindex = attach.tabIndex);
            attrs['aria-label'] = attach.ariaLabel;
            attrs['aria-labelledby'] = attach.ariaLabelledby || ctx.tParam('textId');
        }

        ctx
            .tag('input')
            .attrs(attrs);

    });

};
