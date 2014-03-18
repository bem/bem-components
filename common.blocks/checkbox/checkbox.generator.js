({
    block : 'checkbox',
    mods : {
        theme : '{{lorem(1)}}',
        type : function(){ return this.bool() ? 'button' : undefined; },
        size : function(){ return ['s','m','l','xl'][this.numeric(0,3)]; },
        disabled : '{{bool}}',
        checked : '{{bool}}'
    },
    val : '{{lorem(1)}}',
    name : '{{phone(xxxxxxxx)}}',
    text : '{{lorem(2)}}'
})
