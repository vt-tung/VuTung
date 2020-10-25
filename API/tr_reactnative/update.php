<?php
	include 'connections.php';
	$json         = file_get_contents('php://input');
	$obj          = json_decode($json, true);
	$id           = $obj['id'];
	$id_class 	  = $obj['id_class'];
	$MaSV 	  	  = $obj['MaSV'];
	$name         = $obj['name'];
	$image 	  	  = $obj['image'];
	$email 		  = $obj['email'];
	$phone_number = $obj['phone_number'];
	$result = mysqli_query($link, "UPDATE users SET id_class='$id_class', MaSV='$MaSV',name='$name', image='$image',email='$email', phone_number='$phone_number' WHERE id='$id'");
	if ($result) {
		echo json_encode('Update student successfully');
	}else {
		echo json_encode('Update student not successfully');
	}

	mysqli_close($link);
?>