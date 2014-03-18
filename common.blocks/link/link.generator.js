({
    block : 'link',
    mods : { theme : '{{lorem(1)}}' },
    url : 'http://{{email}}/',
    target : function(){ return this.bool() ? '_blank' : undefined; },
    title : '{{street}}',
    content : '{{numeric(100,999)}} {{street}}, {{city}}'
})
