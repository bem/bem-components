<?php
return function ($bh) {

    $bh->match('select__control', function($ctx, $json) {
        $val = $json->val;
        $ctx
            ->tag('input')
            ->attrs([
                'type' => 'hidden',
                'name' => $ctx->tParam('select')->name,
                'value' => $ctx->isSimple($val)? $val : json_encode($val),
                'disabled' => isset($json->blockMods) && $json->blockMods->disabled? 'disabled' : null
            ]);
    });

};
