module.exports = function(bh) {
    bh.match('image', function(ctx, json) {
        ctx.attr('role', 'img');

        if(typeof json.content !== 'undefined') {
            ctx.tag('span');
        } else {
            var srcset = json.srcset || {};
            srcset = Object.keys(srcset).map(function(size){
                return srcset[size] + ' ' + size;
            }).join(', ');

            ctx
                .tag('img')
                .attrs({
                    role : null,
                    src : json.url,
                    srcset : srcset,
                    width : json.width,
                    height : json.height,
                    alt : json.alt,
                    title : json.title
                }, true);
        }
    });
};
