({
    block : 'input',
    mods : {
        theme : '{{lorem(1)}}',
        type : function(){ return ['password','search',undefined][this.numeric(0,2)]; },
        size : function(){ return ['s','m','l','xl'][this.numeric(0,3)]; },
        disabled : '{{bool}}',
        'has-clear' : '{{bool}}'
    },
    id : function(){ return this.bool() ? this.lorem(1) : undefined; },
    name : function(){ return this.bool() ? this.lorem(1) : undefined; },
    val : '{{lorem(2)}}',
    placeholder : '{{lorem(2)}}'
})
