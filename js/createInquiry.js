
// グローバル変数
var MAX_QUESTION = 20;
var MAX_ANSWER = 20;


// ページが読み込まれたら動かす（1つ目の質問を表示する）
$(function()
{
	$("div#q_1").hide();
	addQuestion("div#q_1");
});

/**
 * Enter押されてもsubmitされないようにする
 * @param e {object} イベントハンドラ
 */
 function checkEnter(e)
 {
 	if (!e) var e = window.event;
 
    if(e.keyCode == 13)
    {
        return false;
    }
 }

/**
 * セレクトボックスが設定されたら呼び出される関数。
 * @param {object} セレクトボックスオブジェクト
 */
function changSelect(selectBox)
{
	// 選んだ回答タイプ
	var selectNum = selectBox.options[selectBox.selectedIndex].value;
	// どこのセレクトボックスか
	var selectBoxName = "#q_type_"+parseInt(selectBox.name.replace(/q_type_/g,""));

	// 既に表示していたら消す
	if(0 < $(selectBoxName+" div").size())
	{
		$(selectBoxName+" div").fadeOut("fast",function(e){ $(this).remove(); });
	}

	// チェックボックス
	if(selectNum == 1)
	{
		viewCheckBoxField(selectBoxName);
	}
	// ラジオボタン
	else if(selectNum == 2)
	{
		viewRadioButtonField(selectBoxName);
	}
}

/**
 * チェックボックス設定画面を表示。
 * @param {string} idName 表示する場所のid名	
 */
function viewCheckBoxField(idName)
{
	// idNameから#q_typeを削除したもの数値に
	var idNum = parseInt(idName.replace(/#q_type_/g,""));

	var html = '<div>'+
			   'チェックボックスの数 : <input type="text" id="check_box_num_'+idNum+'" name="check_box_num_'+idNum+'" value="4" size="1" maxlength="2" onKeyPress="return checkEnter(event);" style="ime-mode:disabled" />(最大20個)'+
			   '<input type="button" value="表示する" onclick="viewCheckBoxDetail(&#39'+'check_box_num_'+idNum+'&#39);" /><br />'+
			   '<div id="check_'+idNum+'"></div>'+
			   '</div>';

	$(idName).prepend(html).hide().fadeIn("fast");
	viewCheckBoxDetail("check_box_num_"+idNum);
}
/**
 * チェックボックスの詳細設定を表示。
 * @param {string} textFieldName 表示する個数が書いてあるtextのid
 */
function viewCheckBoxDetail(textFieldName)
{
	// 問題番号
	var qNum = parseInt(textFieldName.replace(/check_box_num_/g,""));
	// 詳細を表示するIdの名前
	var idName = "#check_"+qNum;
	// 何個表示するか
	var viewNum = $("#"+textFieldName).val();
	// 最後に表示するhtml
	var html = "<div id='check_list_"+qNum+"'>";

	// 0とか1とか入力する人用
	if(viewNum <= 0 || 1 == viewNum)
	{
		alert("2以上を入力してください");
		return false;
	}
	// 最大20個
	if( 20 < viewNum)
	{
		alert("20個以上質問は作れません");
		return false;
	}
	// 前のが表示されていたら削除
	if(0 < $("#check_list_"+qNum).size())
	{
		$("#check_list_"+qNum).remove();
	}

	for(var i = 1; i <= viewNum; i++)
	{
		// <li>の横のリストにしたらさらに良くなるかな？
		if( i < 10 )
		{
			html += '0'+i+' : <input type="text" name="q_'+qNum+'_check_'+i+'" onKeyPress="return checkEnter(event);" />';
		}
		else
		{
			html += i+' : <input type="text" name="q_'+qNum+'_check_'+i+'" onKeyPress="return checkEnter(event);" />';
		}
		// 五個ごとに改行を挟む
		if((i % 5) == 0) { html += "<br />" }
	}
	html += "</div>";

	$(idName).hide();
	$(idName).prepend(html).fadeIn("fast");
}

/**
 * ラジオボタン設定画面を表示。
 * @param {string} idName 表示する場所のid名	
 */
function viewRadioButtonField(idName)
{
	// idNameから#qTypeを削除したもの数値に
	var idNum = parseInt(idName.replace(/#q_type_/g,""));
	var html = '<div>'+
			   'ラジオボタンの数 : <input type="text" id="radio_num_'+idNum+'" name="radio_num_'+idNum+'" value="4" size="1" maxlength="2" onKeyPress="return checkEnter(event);" style="ime-mode:disabled" />(最大20個)'+
			   '<input type="button" value="表示する" onclick="viewRadioButtonDetail(&#39'+'radio_num_'+idNum+'&#39);" /><br />'+
			   '<div id="radio_'+idNum+'"></div>'+
			   '</div>';

	$(idName).prepend(html).hide().fadeIn("fast");
	viewRadioButtonDetail("radio_num_"+idNum);
}

/**
 * ラジオボタンの詳細設定を表示。
 * @param {string} textFieldName 表示する個数が書いてあるtextのid
 */
function viewRadioButtonDetail(textFieldName)
{
	// 問題番号
	var qNum = parseInt(textFieldName.replace(/radio_num_/g,""));
	// 詳細を表示するIdの名前
	var idName = "#radio_"+qNum;
	// 何個表示するか
	var viewNum = $("#"+textFieldName).val();
	// 最後に表示するhtml
	var html = "<div id='radio_list_"+qNum+"'>";

	// 0とか1とか入力する人用
	if(viewNum <= 0 || 1 == viewNum)
	{
		alert("2以上を入力してください");
		return false;
	}
	// 最大20個
	if( 20 < viewNum)
	{
		alert("20個以上質問は作れません");
		return false;
	}
	// 前のが表示されていたら削除
	if(0 < $("#radio_list_"+qNum).size())
	{
		$("#radio_list_"+qNum).remove();
	}

	for(var i = 1; i <= viewNum; i++)
	{
		if( i < 10 )
		{
			html += '0'+i+' : <input type="text" name="q_'+qNum+'_radio_'+i+'" onKeyPress="return checkEnter(event);" />';
		}
		else
		{
			html += i+' : <input type="text" name="q_'+qNum+'_radio_'+i+'" onKeyPress="return checkEnter(event);" />';
		}
		// 五個ごとに改行を挟む
		if((i % 5) == 0) { html += "<br />" }
	}
	html += "</div>";

	$(idName).hide();
	$(idName).prepend(html).fadeIn("fast");
}

/**
 * 質問を囲うdivを表示します。
 */
function addQuestionDiv()
{

	for(var i = 2; i <= MAX_QUESTION + 1; i++)
	{
		// 前のクイズdiv要素
		var afterQuestionDivName = "div#q_"+(i - 1);
		// 次のクイズdiv
		var nextQuestionDivName = "div#q_"+i;

		// 次の質問が無かったら
		if(!(0 < $(nextQuestionDivName).size()))
		{
			if(i == MAX_QUESTION + 1)
			{
				alert("20個以上質問は作れません");
			}
			else
			{
				// 現在ある最後の質問の要素の後ろに新しく作る
				$(afterQuestionDivName).after("<div id='q_"+i+"' name='q_"+i+"' ></div>");

				// フェードインさせたいので非表示にする
				$(nextQuestionDivName).hide();

				addQuestion(nextQuestionDivName);
			}
			break;
		}
	}
}

/**
 * 質問を囲うdivを削除します。
 */
 function killQuestionDiv()
 {
 	for(var i = 1; i <= MAX_QUESTION + 1; i++)
	{
		var nextQDivName = "div#q_"+i;
		if(!(0 < $(nextQDivName).size()))
		{
			// 最初の要素は消せないので抜け出す
			if((i-1) == 1)
			{
				alert("削除できません");
			}
			else
			{
				// 1個前の要素を削除
				$("div#q_"+(i-1)).fadeOut("fast",function(e){$(this).remove();});
			}
			break;
		}
	}
 }

/**
 * 質問を追加します。
 * @param {String} 追加するdiv要素のid名
 */
function addQuestion(idName)
{
	// idNameから"div # q"を取り除いた物を数値にする = 質問番号
	var questionNum = parseInt(idName.replace(/div|#|q|_/g,""));

	var questinHTML = '<br />質問'+questionNum+' : <input type="text" id="q_name_'+questionNum+'" name="q_name_'+questionNum+'" onKeyPress="return checkEnter(event);" /><br />'+
					  '質問タイプ : '+
					  '<select name="q_type_'+questionNum+'" size="1" onchange="changSelect(this);">'+
					  '<option value="1" label="チェックボッラジオクス（複数回答）">チェックボックス（複数回答）</option>'+
					  '<option value="2" label="ラジオボタン（どれか1つ回答）">ラジオボタン（どれか1つ回答）</option>'+
					  '</select><br />'+
					  '<div id="q_type_'+questionNum+'"></div>';

	$(idName).prepend(questinHTML).fadeIn("fast");
	viewCheckBoxField("#q_type_"+questionNum);
}

/**
 * 送信前に不備がないか確認します。
 */
function checkValue()
{
	// エラーがあったらtrue
	var errerFlag = false;
	// エラーメッセージ
	var errerMessage = [];

	// アンケート名がなかったらエラー
	if(!$("#nquete_name").val().replace(/ |　/g,''))
	{
		errerFlag = true;
		errerMessage.push("アンケートの名前を入力してください");
	}

	for(var i = 1; i <= MAX_QUESTION; i++)
	{
		// 要素があれば
		if(0 < $("#q_"+i).size())
		{
			// 質問文が入ってなかったら
			if(!$("#q_name_"+i).val().replace(/ |　/g,''))
			{
				errerFlag = true;
				errerMessage.push("[質問"+i+"]の質問文に誤りがあります");
			}
		}
		else
		{
			break;
		}
	}

	// エラーがあれば
	if(errerFlag)
	{	
		// エラー表示
		for(var i = 0; i < errerMessage.length; i++)
		{
			alert(errerMessage[i]);
		}
		return false;
	}	
}