module.exports = function(bh) {

    bh.match('attach__control', function(ctx) {
        var attrs = { type : 'file' },
            attach = ctx.tParam('_attach');

        // в js генерим html для attach__control без самого attach
        if(attach) {
            attrs.name = attach.name;
            attach.mods && attach.mods.disabled && (attrs.disabled = 'disabled');
            attach.tabIndex && (attrs.tabindex = attach.tabIndex);
            attach.accept && (attrs.accept = attach.accept);
        }

        ctx
            .tag('input')
            .attrs(attrs);

    });

};
