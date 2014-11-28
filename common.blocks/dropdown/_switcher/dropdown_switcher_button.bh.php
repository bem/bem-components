<?php
return function ($bh) {

    $bh->match('dropdown_switcher_button__switcher', function($ctx, $json) {
        $content = $ctx->content();
        // if (Array.isArray(content)) return content
        if ($ctx->isArray($content)) { // php!yolo. bug?
            if (count($content) > 1) return $content;
            $content = $content[0];
        }

        $res = $ctx->isSimple($content)?
            [ 'block' => 'button', 'text' => $content ] :
            $content;
        $res = $ctx->phpize($res);

        if ($res->block === 'button') {
            $resMods = $res->mods;
            $dropdownMods = $json->blockMods;
            $resMods->size || ($resMods->size = $dropdownMods->size);
            $resMods->theme || ($resMods->theme = $dropdownMods->theme);
            $resMods->disabled = $dropdownMods->disabled;
        }

        return $res;
    });

};
