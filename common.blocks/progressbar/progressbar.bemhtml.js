block('progressbar')(
    def()(function() {
        return applyNext({ _val : this.ctx.val || 0 });
    }),

    addJs()(function(){
        return { val : this._val };
    }),

    addAttrs()(function() {
        return {
            role : 'progressbar',
            'aria-valuenow' : this._val + '%' /* NOTE: JAWS doesn't add 'percent' automatically */
        };
    }),

    content()(
        function() {
            return {
                elem : 'bar',
                attrs : { style : 'width:' + this._val + '%' }
            };
        },
        match(function() { return typeof this.ctx.content !== 'undefined'; })(function() {
            return this.ctx.content;
        })
    )
);
