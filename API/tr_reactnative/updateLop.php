<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json, true);
	$id_class 	= $obj['id_class'];
	$class_name = $obj['class_name'];
	if ($class_name=="") {
		echo json_encode('Fields must not be empty!');
	}else{
		$result = mysqli_query($link, "UPDATE class SET class_name='$class_name' WHERE id_class='$id_class'");

		if ($result) {
			echo json_encode('Update class successfully');
		}else {
			echo json_encode('Update class not successfully');
		}
	}

	mysqli_close($link);
?>