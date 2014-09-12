<?php /* Smarty version Smarty-3.1.18, created on 2014-09-05 09:24:22
         compiled from "C:\xampp\htdocs\php\workspace\templates\create.tpl" */ ?>
<?php /*%%SmartyHeaderCode:22566540964c96f92c4-89178951%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e4efc655284e6375f587640e3f8f1904e8df876e' => 
    array (
      0 => 'C:\\xampp\\htdocs\\php\\workspace\\templates\\create.tpl',
      1 => 1409901861,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '22566540964c96f92c4-89178951',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_540964c97b0c75_87563821',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_540964c97b0c75_87563821')) {function content_540964c97b0c75_87563821($_smarty_tpl) {?><html>
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
