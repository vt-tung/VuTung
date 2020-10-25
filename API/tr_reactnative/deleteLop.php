<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$id_class = $obj['id_class'];
	$result = mysqli_query($link, "DELETE FROM class WHERE id_class='$id_class'");
	if ($result) {
		echo json_encode('Delete class successfully');
	}else {
		echo json_encode('Delete class not successfully');
	}
	mysqli_close($link);
?>