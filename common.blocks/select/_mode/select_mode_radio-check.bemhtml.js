block('select').mod('mode', 'radio-check')(
    addJs()(function() {
        return { text : this.ctx.text };
    }),

    elem('button').content()(function() {
        return [
            { elem : 'text', content : (this._checkedOptions[0] || this._select).text }
            // TODO: with icons
        ];
    }),

    match(function() { return this._checkedOptions[0]; })(
        content()(function() {
            return [
                {
                    elem : 'control',
                    val : this._checkedOptions[0].val
                },
                applyNext()
            ];
        })
    )
);
