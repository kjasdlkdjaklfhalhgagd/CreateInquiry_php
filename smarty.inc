<?php
	// Smartyの用意をする
	$base_path = __DIR__ . '/';
	require_once($base_path.'Smarty-3.1.18/libs/Smarty.class.php');
	$smarty = new Smarty();

	$smarty->setTemplateDir($base_path . 'workspace/templates/');
	$smarty->setCompileDir($base_path .  'workspace/templates_c/');

