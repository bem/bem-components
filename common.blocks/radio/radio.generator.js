({
    block : 'radio',
    mods : {
        theme : '{{lorem(1)}}',
        type : function(){ return this.bool() ? 'button' : undefined; },
        size : function(){ return ['s','m','l','xl'][this.numeric(0,3)]; },
        disabled : '{{bool}}'
    },
    options : [
        '{{repeat(4)}}',
        {
            val : '{{index}}',
            text : '{{lorem(2)}}'
        }
    ],
    name : '{{lorem(1)}}',
    val : '{{numeric(1,4)}}'
})
