({
    block : 'attach',
    mods : {
        theme : '{{lorem(1)}}',
        size : function(){ return ['s','m','l','xl'][this.numeric(0,3)]; },
        disabled : '{{bool}}'
    },
    button : function() {
        return this.bool() ? {
            block : 'button',
            icon : { elem : 'icon' }
        } : undefined; },
    buttonText : '{{lorem(1)}}',
    noFileText : '{{lorem(3)}}'
})
