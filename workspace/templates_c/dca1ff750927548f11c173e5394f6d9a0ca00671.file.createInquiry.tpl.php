<?php /* Smarty version Smarty-3.1.18, created on 2014-09-12 09:17:58
         compiled from "/Library/WebServer/Documents/phpInquiry/workspace/templates/createInquiry.tpl" */ ?>
<?php /*%%SmartyHeaderCode:169323215554129e26b72592-97197428%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'dca1ff750927548f11c173e5394f6d9a0ca00671' => 
    array (
      0 => '/Library/WebServer/Documents/phpInquiry/workspace/templates/createInquiry.tpl',
      1 => 1410506030,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '169323215554129e26b72592-97197428',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_54129e26ba2f60_25781856',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54129e26ba2f60_25781856')) {function content_54129e26ba2f60_25781856($_smarty_tpl) {?><html>
<head>
<meta charset="UTF-8">
<title>アンケート作成</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript" src="../js/createInquiry.js"></script>
</head>
<body>
<br />
<h1>アンケートを作ります</h1>
<br />
<form action="sendNewInquiry.php" method="post" >
	アンケートの名前を入力してください : <input id="nquete_name" type="text" name="enquete_name" onKeyPress="return checkEnter(event);" /><br />
	<div id="q_1"></div><br />
	<input type="button" value="質問を追加する" onclick="addQuestionDiv();" />
	<input type="button" value="最後の質問を削除" onclick="killQuestionDiv();" /><br />
	<br />
	<input type="submit" value="送信" onclick="return checkValue();" />
</form>

</body>
</html><?php }} ?>
