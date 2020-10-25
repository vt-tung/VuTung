<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$id = $obj['id'];
	$result = mysqli_query($link, "DELETE FROM users WHERE id='$id'");
	if ($result) {
		echo json_encode('Delete student successfully');
	}else {
		echo json_encode('Delete student not successfully');
	}
	mysqli_close($link);
?>