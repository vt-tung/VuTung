<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$idMon = $obj['idMon'];
	$result = mysqli_query($link, "DELETE FROM monhoc WHERE idMon='$idMon'");
	if ($result) {
		echo json_encode('Delete subjects successfully');
	}else {
		echo json_encode('Delete subjects not successfully');
	}
	mysqli_close($link);
?>