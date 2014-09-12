<?php
	$MAX_QUESTION = 20;
	$MAX_ANSWER = 20;

	// アンケートの名前を取る
	$name = $_POST["enquete_name"];

	// 質問文
	$q = [];
	// 回答文
	$r = [];

	// 質問を取る
	for($i = 1; $i <= $MAX_QUESTION; $i++)
	{
		// 質問があれば表示
		if(isset($_POST["q_name_".$i]))
		{
			array_push($q,$_POST["q_name_".$i]);

			// 回答タイプにより表示を変える
			// チェックボックス		
			if($_POST["q_type_".$i] == 1)
			{
				$hoge = [];
				// todo:関数にするかな
				for($j = 1; $j <= $MAX_ANSWER; $j++)
				{
					// あったら
					if(isset($_POST["q_".$i."_check_".$j]))
					{
						$foo = $_POST["q_".$i."_check_".$j];
						array_push($hoge,$foo);
					}
				}
				array_push($hoge,1);
				array_push($r,$hoge);
			}
			// ラジオボタン
			else if($_POST["q_type_".$i] == 2)
			{
				$hoge = [];
				for($j = 1; $j <= $MAX_QUESTION; $j++)
				{
					// あったら
					if(isset($_POST["q_".$i."_radio_".$j]))
					{
						$foo = $_POST["q_".$i."_radio_".$j];
						array_push($hoge,$foo);
					}
				}
				array_push($hoge,2);
				array_push($r,$hoge);
			}
			// それ以外は自由回答
			else
			{
				array_push($r,3);
			}
		}
		else
		{
			//add($name,$q,$r);
			break;
		}
	}

	// アンケートを登録する
	function add($name,$q,$r)
	{
		require_once('../db.inc');

		$sql = "INSERT INTO inquiry_q(name,q) VALUES(:name,:q);";
		$pre = $dbh->prepare($sql);

		$pre->bindValue(':name', $name);
		$pre->bindValue(':q', serialize($r));

		$pre->execute();

		$sql = "SELECT * FROM inquiry_q ORDER BY id DESC LIMIT 1;";
		$pre = $dbh->prepare($sql);
		$pre->execute();
		$r = $pre->fetch();

		$a = unserialize($r["q"]);
		var_dump($a[0][1]);
			
	}