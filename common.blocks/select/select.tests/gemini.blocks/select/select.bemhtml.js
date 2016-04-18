block('select').def()(function() {
    return applyNext({ _selectCls : this.ctx.cls });
});

block('popup').match(function() { return this._selectCls; }).def()(function() {
    // NOTE: we "mark" popups which are inside select block
    // with special classes, so gemini tests could find them
    this.ctx.cls = this._selectCls + '-popup';
    delete this._selectCls;
    return applyNext();
});
