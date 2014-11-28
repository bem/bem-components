<?php
return function ($bh) {

    $bh->match('select__button', function($ctx, $json) {
        $mods = $json->blockMods;
        $select = $ctx->tParam('select');
        $checkedOptions = $ctx->tParam('checkedOptions');

        return [
            'block' => 'button',
            'mix' => [ 'block' => $json->block, 'elem' => $json->elem ],
            'mods' => [
                'size' => $mods->size,
                'theme' => $mods->theme,
                'view' => $mods->view,
                'focused' => $mods->focused,
                'disabled' => $mods->disabled,
                'checked' => $mods->mode !== 'radio' && count($checkedOptions)
            ],
            'id' => $select->id,
            'textMaxWidth' => $select->textMaxWidth,
            'content' => [
                $ctx->content(),
                [ 'block' => 'icon', 'mix' => [ 'block' => 'select', 'elem' => 'tick' ] ]
            ]
        ];
    });

};
