<?php
return function ($bh) {

    $bh->match('link', function($ctx, $json) use ($bh) {
        $ctx
            ->tag('a')
            ->mix([ 'elem' => 'control' ]); // satisfy interface of `control`

        $url = !$ctx->isSimple($json->url)? // url could contain bemjson
            $bh->apply($json->url) :
            $json->url;
        $attrs = [];

        $tabIndex = null;
        if(!$ctx->mod('disabled')) {
            if($url) {
                $attrs['href'] = $url;
                $tabIndex = $json->tabIndex;
            } else {
                $tabIndex = $json->tabIndex ?: 0;
            }
            $ctx->js(true);
        } else {
            $ctx->js($url? [ 'url' => $url ] : true);
        }


        $tabIndex === null || ($attrs['tabindex'] = $tabIndex);

        $json->title && ($attrs['title'] = $json->title);
        $json->target && ($attrs['target'] = $json->target);

        $ctx->attrs($attrs);
    });

};
