<?php
include_once "library/less/lessc.inc.php";

$lessCompiler = new lessc();

foreach (glob('styles/*.less') as $filename) {
    $cssFilename = substr($filename, 0, strlen($filename) - 4) . 'css';

    try {
        $lessCompiler->compileFile($filename, $cssFilename);
    } catch (Exception $e) {
        echo sprintf("Could not compile less file %s: %s\n", $filename, $e->getMessage());
    }
}