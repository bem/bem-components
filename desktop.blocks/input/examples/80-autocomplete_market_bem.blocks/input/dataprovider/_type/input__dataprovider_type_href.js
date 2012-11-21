BEM.decl({ name : 'i-href-dataprovider', baseBlock : 'i-request_type_ajax' }, {

    get : function(request, callback) {

        return this.__base(
            { part : request },
            function(data) {
                var items = data[1].map(function(item, i){
                    return ['href', item, data[2][i]];
                });

                callback.call(this, { items: items, metainfo: data[2] })
            });

    }

});