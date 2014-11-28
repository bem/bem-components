<?php
return function ($bh) {

    $bh->match('checkbox_type_button', function($ctx, $json) {
        $mods = $ctx->mods();

        $ctx->content([[
            'block' => 'button',
            'mods' => [
                'togglable' => 'check',
                'checked' => $mods->checked,
                'disabled' => $mods->disabled,
                'theme' => $mods->theme,
                'size' => $mods->size
            ],
            'title' => $json->title,
            'content' => [
                $json->icon,
                key_exists('text', $json)?
                    [ 'elem' => 'text', 'content' => $json->text ] :
                    ''
            ]
        ], [
            'block' => 'checkbox',
            'elem' => 'control',
            'checked' => $mods->checked,
            'disabled' => $mods->disabled,
            'name' => $json->name,
            'val' => $json->val
        ]]);
    });

};
