<?php
return function ($bh) {

    $bh->match('select', function($ctx, $json) {
        if (!$ctx->mod('mode')) throw new \Exception('Can\'t build select without mode modifier');

        $ctx->js([
            'name' => $json->name,
            'optionsMaxHeight' => $json->optionsMaxHeight
        ]);

        $firstOption = null;
        $checkedOptions = [];
        if (!empty($json->options) && is_array($json->options)) {
            foreach ($json->options as $i => $optionOrGroup) {
                if (isset($optionOrGroup['group']) && is_array($optionOrGroup['group'])) {
                    foreach ($optionOrGroup['group'] as $j => $option) {
                        if ($i === 0 && $j === 0) {
                            $firstOption = $option;
                            $firstOptionLocation = [$i, $j]; // php!yolo fix
                        }
                        empty($option['checked']) || ($checkedOptions[] = $option);
                    }
                }
                else {
                    if ($i === 0) {
                        $firstOption = $optionOrGroup;
                        $firstOptionLocation = [$i]; // php!yolo fix
                    }
                    empty($optionOrGroup['checked']) || ($checkedOptions[] = $optionOrGroup);
                }
            }
        }

        $ctx
            ->tParam('select', $json)
            ->tParam('firstOption', $firstOption)
            ->tParam('firstOptionLocation', $firstOptionLocation) // php!yolo fix
            ->tParam('checkedOptions', $checkedOptions);

        $ctx->content([
            [ 'elem' => 'button' ],
            [
                'block' => 'popup',
                'mods' => [ 'target' => 'anchor', 'theme' => $ctx->mod('theme'), 'autoclosable' => true ],
                'directions' => ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
                'content' => [ 'block' => $json->block, 'mods' => $ctx->mods(), 'elem' => 'menu' ]
            ]
        ]);
    });

};
