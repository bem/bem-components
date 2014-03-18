({
    block : 'button',
    mods : {
        theme : '{{lorem(1)}}',
        type : function(){ return this.bool() ? 'link' : undefined; },
        size : function(){ return ['s','m','l','xl'][this.numeric(0,3)]; },
        disabled : '{{bool}}',
        action : '{{bool}}',
        pseudo : '{{bool}}'
    },
    text : '{{lorem(2)}}',
    icon : function(){ return this.numeric(1,10) > 7 ? { elem : 'icon' } : undefined; },
    url : 'mailto:{{email}}'
})
