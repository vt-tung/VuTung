<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$class_name = $obj['class_name'];
	$check = mysqli_query($link, "SELECT * FROM class WHERE class_name='$class_name' LIMIT 1");
	if ($class_name=="") {
		echo json_encode('Fields must not be empty!');
	}else {
		if (mysqli_num_rows($check)>0) {
			echo json_encode('Class already exist');
		}else{
			$result = mysqli_query($link, "INSERT INTO class(class_name) VALUES('$class_name')");
			if ($result) {
				echo json_encode('Insert class successfully');
			}else {
				echo json_encode('Insert class not successfully');
			}
		}
	}
	mysqli_close($link);
?>