block('select').mod('mode', 'check')(
    js()(function() {
        return this.extend(applyNext(), { text : this.ctx.text });
    }),

    elem('button').content()(function() {
        var checkedOptions = this._checkedOptions;
        return [
            {
                elem : 'text',
                content : checkedOptions.length === 1?
                    checkedOptions[0].text :
                    checkedOptions.reduce(function(res, option) {
                        return res + (res? ', ' : '') + (option.checkedText || option.text);
                    }, '') ||
                        this._select.text
            }
            // TODO: with icons
        ];
    }),

    match(function() { return this._checkedOptions[0]; }).content()(function() {
        var res = this._checkedOptions.map(function(option) {
            return {
                elem : 'control',
                val : option.val
            };
        });
        res.push(applyNext());
        return res;
    })
);
