<?php 
	$link = mysqli_connect('localhost','root','','tr_user');
	mysqli_query($link,"SET NAMES 'utf8'");
	if(!$link){
		echo('connection field');
	}
?>