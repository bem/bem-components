module.exports = function(bh) {

    bh.match('input', function(ctx, json) {
        ctx.tag('span')

            .js(true)

            .param('id', ctx.generateId())

            .tParam('_input', json);

        var content = ctx.content();
        if(typeof content === 'undefined') {
            content = [{ elem : 'control' }];
            // NOTE: не вынесли в отдельные шаблоны ради оптимизации
            ctx.label && content.unshift({ elem : 'label', content : ctx.label });
            ctx.content(content);
        }
    });

};
