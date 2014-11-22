<?php
return function ($bh) {

    $bh->match('select_mode_radio-check', function($ctx, $json) {
        $ctx->applyBase();
        $ctx->js($ctx->extend($ctx->js(), [ 'text' => $json->text ]));

        $checkedOptions = $ctx->tParam('checkedOptions');

        if($checkedOptions[0]) {
            $ctx->content([
                [
                    'elem' => 'control',
                    'val' => $checkedOptions[0]['val']
                ],
                $ctx->content()
            ], true);
        }
    });

    $bh->match('select_mode_radio-check__button', function($ctx) {
        $checkedOptions = $ctx->tParam('checkedOptions');

        $content = $checkedOptions[0] ?: $ctx->tParam('select');
        $ctx->content([
            'elem' => 'text',
            'content' => $content['text']
        ]);
    });

};
