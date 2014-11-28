<?php
return function ($bh) {

    $bh->match('menu__group', function($ctx, $json) {
        $ctx->attr('role', 'group');

        if(key_exists('title', $json)) {
            $title = $json->title;
            $ctx
                ->attr('aria-label', $title, true)
                ->content([
                    [ 'elem' => 'group-title', 'content' => $title ],
                    $ctx->content()
                ], true);
        }
    });

};
