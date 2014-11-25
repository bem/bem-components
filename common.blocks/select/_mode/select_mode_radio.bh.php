<?php
return function ($bh) {

    $bh->match('select_mode_radio', function($ctx) {
        $ctx->applyBase();

        $checkedOptions =& $ctx->tParamRef('checkedOptions');
        $firstOption =& $ctx->tParamRef('firstOption');

        // php!yolo...
        $select = $ctx->tParam('select');
        $firstOptionLocation = $ctx->tParam('firstOptionLocation');

        if (empty($checkedOptions)) {
            // php!yolo: temporary fixes
            if (sizeof($firstOptionLocation) === 1) {
                $select->options[$firstOptionLocation[0]]['checked'] = true;
            } else {
                $select->options[$firstOptionLocation[0]]['group'][$firstOptionLocation[1]]['checked'] = true;
            }
            // /php!yolo

            $firstOption['checked'] = true;
            $checkedOptions[] = $firstOption;
        }

        $ctx->tParam('checkedOption', @$checkedOptions[0]);

        $ctx->content([
            [
                'elem' => 'control',
                'val' => @$checkedOptions[0]['val']
            ],
            $ctx->content()
        ], true);
    });

    $bh->match('select_mode_radio__button', function($ctx) {
        $ctx->content([
            'elem' => 'text',
            'content' => $ctx->tParam('checkedOption')['text']
        ]);
    });

};
