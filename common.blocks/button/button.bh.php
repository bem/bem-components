<?php
return function ($bh) {

    $bh->match('button', function($ctx, $json) {
        $json->icon = $ctx->phpize($json->icon);
        $modType = $ctx->mod('type');
        $isRealButton = !$modType || $modType === 'submit';

        $ctx
            ->tParam('_button', $json)
            ->tag($json->tag ?: 'button')
            ->js(true)
            ->attrs([
                'role' => 'button',
                'tabindex' => $json->tabIndex,
                'id' => $json->id,
                'type' => $isRealButton? $modType ?: 'button' : null,
                'name' => $json->name,
                'value' => $json->val,
                'title' => $json->title
            ])
            ->mix([ 'elem' => 'control' ]); // NOTE: satisfy interface of `control`

        $isRealButton &&
            $ctx->mod('disabled') && $ctx->attr('disabled', 'disabled');

        $content = $ctx->content();
        if ($content === null) {
            $content = [$json->icon];
            key_exists('text', $json) && ($content[] = ['elem' => 'text', 'content' => $json->text]);
            $ctx->content($content);
        }
    });

};
