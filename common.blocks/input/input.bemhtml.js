block('input')(
    tag()('span'),
    js()(true),
    content()(function () {
        return { elem : 'box', content : { elem : 'control', _input : this.ctx } };
    })
);
