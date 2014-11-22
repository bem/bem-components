<?php
return function ($bh) {

    $bh->match('dropdown_switcher_button__switcher', function($ctx, $json) {
        $content = $ctx->content();
        if (is_array($content)) return $content;

        $res = $ctx->isSimple($content)?
            (object)([ 'block' => 'button', 'text' => $content ]) :
            $content;

        if ($res->block === 'button') {
            $resMods = $res->mods ?: ($res->mods = (object)[]);
            $dropdownMods = $json->blockMods;
            $resMods->size || ($resMods->size = $dropdownMods->size);
            $resMods->theme || ($resMods->theme = $dropdownMods->theme);
            $resMods->disabled = $dropdownMods->disabled;
        }

        return $res;
    });

};
