<?php /* Smarty version Smarty-3.1.18, created on 2014-09-12 03:46:07
         compiled from "/Library/WebServer/Documents/phpInquiry/workspace/templates/create.tpl" */ ?>
<?php /*%%SmartyHeaderCode:122654405412505f7172a1-29092389%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7018a2ff93bedc526ebbdec043ac127bc69346ef' => 
    array (
      0 => '/Library/WebServer/Documents/phpInquiry/workspace/templates/create.tpl',
      1 => 1409901862,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '122654405412505f7172a1-29092389',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_5412505f73c0f8_58211378',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5412505f73c0f8_58211378')) {function content_5412505f73c0f8_58211378($_smarty_tpl) {?><html>
<head>
<meta charset="UTF-8">
<title>アンケート作成</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript" src="../js/action.js"></script>
</head>
<body>
<br />
<h1>アンケートを作ります</h1>
<br />
<form action="dataView.php" method="post" >
	アンケートの名前を入力してください : <input id="nquete_name" type="text" name="enquete_name" onKeyPress="return checkEnter(event);" /><br />
	<div id="q_1"></div><br />
	<input type="button" value="質問を追加する" onclick="addQuestionDiv();" />
	<input type="button" value="最後の質問を削除" onclick="killQuestionDiv();" /><br />
	<br />
	<input type="submit" value="送信" onclick="return checkValue();" />
</form>

</body>
</html><?php }} ?>
