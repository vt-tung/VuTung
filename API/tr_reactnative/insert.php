<?php
	include 'connections.php';
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$id_class = $obj['id_class'];
	$MaSV 	  = $obj['MaSV'];
	$name     = $obj['name'];
	$image 	  = $obj['image'];
	$email    = $obj['email'];
	$phone_number = $obj['phone_number'];
	$check = mysqli_query($link, "SELECT * FROM users WHERE MaSV='$MaSV'");
	if ($id_class=="" || $MaSV=="" || $name=="" || $image=="" || $email=="" || $phone_number=="") {
		echo json_encode('Fields must not be empty!');
	}else {
		if (mysqli_num_rows($check)>0) {
			echo json_encode('Code student already exist');
		}else{
			$result = mysqli_query($link, "INSERT INTO users(id_class, MaSV, name, image, email, phone_number) VALUES('$id_class', '$MaSV','$name', '$image', '$email', '$phone_number')");
			if ($result) {
				echo json_encode('Insert student successfully');
			}else {
				echo json_encode('Insert student not successfully');
			}
		}
	}

	mysqli_close($link);
?>