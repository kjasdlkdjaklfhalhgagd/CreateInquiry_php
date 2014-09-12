<html>
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
</html>