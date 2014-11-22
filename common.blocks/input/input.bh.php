<?php
return function ($bh) {

    $bh->match('input', function($ctx, $json) {
        $ctx->tag('span')
            ->js(true)
            ->tParam('_input', $json);

        if($ctx->content() === null) {
            $ctx->content([ 'elem' => 'box', 'content' => [ 'elem' => 'control' ] ]);
        }
    });

};
