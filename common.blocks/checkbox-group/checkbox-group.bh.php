<?php
return function ($bh) {

    $bh->match('checkbox-group', function($ctx, $json) {
        $ctx
            ->tag('span')
            ->js(true)
            ->mix([ 'block' => 'control-group' ]);

        $mods = $ctx->mods();
        $content = [];
        if ($json->options) {
            foreach ($json->options as $i => $option) {
                $option = (object)$option;
                $content[] = [
                    $i && !$mods->type ? [ 'tag' => 'br' ] : null,
                    [
                        'block' => 'checkbox',
                        'mods' => [
                            'type' => $mods->type,
                            'theme' => $mods->theme,
                            'size' => $mods->size,
                            'checked' => $option->checked,
                            'disabled' => $option->disabled || $mods->disabled
                        ],
                        'name' => $json->name,
                        'val' => $option->val,
                        'text' => $option->text,
                        'title' => $option->title,
                        'icon' => $option->icon
                    ]
                ];
            }
        }
        $ctx->content($options);
    });

};
