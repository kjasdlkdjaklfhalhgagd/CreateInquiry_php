<?php
	$dbName = 'inquiry';
	$user = 'root';
	$password = '';
	$host = 'localhost';
	$dsn = "mysql:dbname={$dbName};host={$host}";
	
	try
	{
		$dbh = new PDO($dsn, $user, $password);
	}
	catch (PDOException $e)
	{
		echo "エラー";
		return ;
	}